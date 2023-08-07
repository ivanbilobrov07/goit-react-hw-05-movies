import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async page => {
      setStatus(STATUS.PENDING);

      const data = await searchMoviesByQuery(query, page);
      const array = new Array(data.total_pages).fill(null);
      const totalPages = data.total_pages;

      //This check is necessary because of it is forbiden
      //to get items more than from 500`th page
      if (totalPages >= 500) {
        setTotalPages(500);
      } else {
        setTotalPages(totalPages);
      }

      setData(array);
      setData(movies => {
        movies[page - 1] = data.results;

        return movies;
      });
      setStatus(STATUS.FULLFIELD);
    };

    fetchData(1);
  }, [query]);

  useEffect(() => {
    if (page === 1 || data[page - 1]) {
      scrollToTop();
      return;
    }

    const fetchData = async page => {
      setStatus(STATUS.PENDING);

      const data = await searchMoviesByQuery(query, page);

      setData(movies => {
        movies[page - 1] = data.results;

        return movies;
      });
      setStatus(STATUS.FULLFIELD);
    };

    fetchData(page);
  }, [page, data, query]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const visibleImages = data && data[page - 1];

  if (status === STATUS.PENDING) {
    return <Loader />;
  } else if (status === STATUS.FULLFIELD && visibleImages) {
    return (
      <>
        <MoviesList movies={visibleImages} />
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
