import React, { useContext } from 'react';
import { Context } from "context/Context.js";
import Container from 'react-bootstrap/Container';
import { PropTypes } from 'prop-types';
import Row from 'react-bootstrap/Row';
import MoviewItem from 'components/item';
import styles from './styles.module.css';

 const MoviesList = (props) => {
    const { isLoaded } = props;
    const [context] = useContext(Context);
    const { data } = context;

    if (!isLoaded) {
        return (
            <Container>
                <div className={styles.loader}>Loading...</div>
            </Container>
        )
    } else {
        return (
            <Container>
                <Row>
                    {data.map(item => (
                        <MoviewItem key={item.id} movie={item}></MoviewItem>
                    ))}
                </Row>
            </Container>
        )
    }
}

MoviewItem.propTypes = {
    isLoaded: PropTypes.bool
};

export default MoviesList;
