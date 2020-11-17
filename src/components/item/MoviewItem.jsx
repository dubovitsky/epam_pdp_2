import React from 'react';
import { PropTypes } from 'prop-types';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';
import { Link } from "react-router-dom";

const MoviewItem = (props) => {
    const { id, title, genres, poster_path, release_date } = props.movie;
    const year = new Date(release_date).getFullYear();
    const genre = genres.join(', ');

    return (
        <Col md={3} className={styles.serialWrapper}>
            <Link title={title} to={{
                pathname: `/movie/${id}`,
                options: {...props}
            }}>
                <img className={styles.serialPoster} src={poster_path} alt={title} />
                <div className={styles.serialMeta}>
                    <span className={styles.serialTitle}>{title}</span>
                    <span className={styles.serialGenre}>{genre}</span>
                    <span className={styles.serialYear}>{year}</span>
                </div>
            </Link>
        </Col>
    )
}

MoviewItem.propTypes = {
    movie: PropTypes.object
};

export default MoviewItem;