import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';

import { searchMoviesByQuery } from 'services';
import { STATUS } from 'constants';

import { Container } from 'components/Container.styled';
import { MoviesList } from 'components/MoviesList';
import { PaginationWrapper } from 'components/PaginationWrapper.styled';
import { Loader } from 'components/Loader';
import 'react-responsive-pagination/themes/classic.css';

const Movies = () => {
  const [searchParams, setQSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState(null);

  const query = searchParams.get('query') ?? '';

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

  const updateQueryString = e => {
    e.preventDefault();
    const inputRef = e.target.elements.query;

    const query = inputRef.value;
    const nextParams = query !== '' ? { query } : {};

    setQSearchParams(nextParams);
    inputRef.value = '';
  };

  const visibleImages = data && data[page - 1];

  return (
    <section>
      <Container>
        <form onSubmit={updateQueryString}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>
        {status === STATUS.PENDING && <Loader />}
        {status === STATUS.FULLFIELD && visibleImages && (
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
        )}
      </Container>
    </section>
  );
};

export default Movies;
