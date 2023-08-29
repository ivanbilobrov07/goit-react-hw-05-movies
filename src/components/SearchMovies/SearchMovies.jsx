import { useEffect, useRef, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';

import { searchMoviesByQuery } from 'services';
import { STATUS } from 'constants';

import { MoviesList } from 'components/MoviesList';
import { PaginationWrapper } from 'components/PaginationWrapper.styled';
import { Loader } from 'components/Loader';
import 'react-responsive-pagination/themes/classic.css';

export const SearchMovie = ({ query }) => {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState(null);

  const firstRender = useRef(true);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async page => {
      setStatus(STATUS.PENDING);

      const data = await searchMoviesByQuery(query, page);
      const totalPages = data.total_pages;

      //This check is necessary because of it is forbiden
      //to get items more than from 500`th page
      if (totalPages >= 500) {
        setTotalPages(500);
      } else {
        setTotalPages(totalPages);
      }

      setData(data.results);
      setStatus(STATUS.FULLFIELD);
    };

    fetchData(1);
  }, [query]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const fetchData = async page => {
      setStatus(STATUS.PENDING);

      const data = await searchMoviesByQuery(query, page);

      setData(data.results);
      setStatus(STATUS.FULLFIELD);
    };

    fetchData(page);
  }, [page, query]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  } else if (status === STATUS.FULLFIELD && data) {
    return (
      <>
        <MoviesList movies={data} />
        <PaginationWrapper>
          <ResponsivePagination
            current={page}
            total={totalPages}
            onPageChange={setPage}
          />
        </PaginationWrapper>
      </>
    );
  }
};
