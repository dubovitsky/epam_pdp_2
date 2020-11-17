import React from 'react';
import { PropTypes } from 'prop-types';
import ErrorBoundary from 'components/error';
import MoviesList from 'components/list';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

const MovieDetails = (props) => {
    // const {
    //     src,
    //     title,
    //     rating,
    //     description,
    //     year,
    //     duration,
    //     genre
    // } = props.location.options.value;

    return (
        <>
            <Navbar search={true} />

            <ErrorBoundary>

                <Container>
                    hello
                    {/* <div className={styles.movieDescription}>
                        <Row>
                            <Col sm={3}>
                                <img className="img-fluid" src={src} alt={title} />
                            </Col>
                            <Col sm={9}>
                                <div className={styles.flexbox}>
                                    <h1>{title}</h1>
                                    <span className={styles.rating}>{rating}</span>
                                </div>
                                <p>{genre}</p>
                                <p className={styles.flexbox}>
                                    <span className={styles.year}>{year}</span>
                                    <span>{duration}</span>
                                </p>
                                <p>{description}</p>
                            </Col>
                        </Row>
                    </div>
                    
                    <div className={styles.genre}>Films by {genre} genre</div> */}
                </Container>

                {/* <MoviesList /> */}

            </ErrorBoundary>

            <Footer />
        </>
    )
}

MovieDetails.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    id: PropTypes.string,
    rating: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string
};

export default MovieDetails;