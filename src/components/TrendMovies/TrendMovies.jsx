import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const fetchData = async page => {
      setStatus(STATUS.PENDING);

      const data = await fetchTrandingMovies(page);
      const array = new Array(data.total_pages).fill(null);
      const totalPages = data.total_pages;

      //This check is necessary because of it is forbiden
      //to get items more than from 500`th page
      if (totalPages >= 500) {
        setTotalPages(500);
      } else {
        setTotalPages(totalPages);
      }

      setTrendMovies(array);
      setTrendMovies(movies => {
        movies[page - 1] = data.results;

        return movies;
      });
      setStatus(STATUS.FULLFIELD);
    };

    fetchData(1);
  }, []);

  useEffect(() => {
    if (selectedPage === 1 || trendMovies[selectedPage - 1]) {
      scrollToTop();
      return;
    }

    const fetchData = async page => {
      setStatus(STATUS.PENDING);

      const data = await fetchTrandingMovies(page);

      setTrendMovies(movies => {
        movies[page - 1] = data.results;

        return movies;
      });
      setStatus(STATUS.FULLFIELD);
    };

    fetchData(selectedPage);
  }, [selectedPage, trendMovies]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const visibleImages = trendMovies && trendMovies[selectedPage - 1];

  if (status === STATUS.PENDING) {
    return <Loader />;
  }

  if (status === STATUS.FULLFIELD && visibleImages !== null) {
    return (
      <>
        <MoviesList movies={visibleImages} />
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
