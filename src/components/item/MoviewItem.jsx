import React from 'react';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

export default function MoviewItem (props) {
    const { src, title, genre, year } = props.value;

    return (
        <Col md={3} className={styles.serialWrapper}>
            <a  href="#">
                <img className={styles.serialPoster} src={src} alt={title} />
                <div className={styles.serialMeta}>
                    <span className={styles.serialTitle}>{title}</span>
                    <span className={styles.serialGenre}>{genre}</span>
                    <span className={styles.serialYear}>{year}</span>
                </div>
            </a>
        </Col>
    )
}
