import React, { useEffect, useState, useContext } from 'react';
import Container from "react-bootstrap/Container";
import PaginationListNoToken from '../PageComponents/PaginationListNoToken';
import MoviesList from '../PageComponents/MoviesPageComponents/MoviesList';

const MoviesPage = () => {
    let [moviesContent, setMoviesContent] = useState();
    const url = "https://localhost:5001/api/titles/movies"; 

    useEffect(() => {
    }, [moviesContent]);

    return (
        <Container>
            <PaginationListNoToken url={url} setContent={setMoviesContent}></PaginationListNoToken>
            {(moviesContent === null) ?
                <p>Loading content...</p> :
                <MoviesList moviesList={moviesContent}></MoviesList>
            }
        </Container>
    );
};

export default MoviesPage;