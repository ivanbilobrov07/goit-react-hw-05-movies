import { useState, useEffect, useRef } from 'react';
import ResponsivePagination from 'react-responsive-pagination';

import { fetchTrandingMovies } from 'services';
import { STATUS } from 'constants';

import { MoviesList } from 'components/MoviesList';
import { PaginationWrapper } from 'components/PaginationWrapper.styled';
import { Loader } from 'components/Loader';
import 'react-responsive-pagination/themes/classic.css';

export const TrendMovies = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [selectedPage, setSelectedPage] = useState(1);
  const [trendMovies, setTrendMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const firstRender = useRef(true);

  useEffect(() => {
    const fetchData = async page => {
      setStatus(STATUS.PENDING);

      const data = await fetchTrandingMovies(page);
      const totalPages = data.total_pages;

      //This check is necessary because of it is forbiden
      //to get items more than from 500`th page
      if (totalPages >= 500) {
        setTotalPages(500);
      } else {
        setTotalPages(totalPages);
      }

      setTrendMovies(data.results);
      setStatus(STATUS.FULLFIELD);
    };

    fetchData(1);
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const fetchData = async page => {
      setStatus(STATUS.PENDING);

      const data = await fetchTrandingMovies(page);

      setTrendMovies(data.results);
      setStatus(STATUS.FULLFIELD);
    };

    fetchData(selectedPage);
  }, [selectedPage]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  }

  if (status === STATUS.FULLFIELD && trendMovies) {
    return (
      <>
        <MoviesList movies={trendMovies} />
        <PaginationWrapper>
          <ResponsivePagination
            current={selectedPage}
            total={totalPages}
            onPageChange={setSelectedPage}
          />
        </PaginationWrapper>
      </>
    );
  }
};
