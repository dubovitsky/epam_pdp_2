import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MoviewItem from 'components/item';

import Data from '../../serials.mock.js';

const listItems = Data.map((item) =>
  <MoviewItem key={item.id} value={item}></MoviewItem>
);

export default function MoviesList () {
    return (
        <Container>
            <Row>
                {listItems}
                {listItems}
            </Row>
        </Container>
    )
}
