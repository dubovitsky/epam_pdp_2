import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from 'components/navbar';
import Results from 'components/results';
import Filter from 'components/filter';

const Header = () => {
    return (
        <header>
            <NavBar />
            <Container className="pt-3 pb-2">
                <Row>
                    <Col>
                        <Results />
                    </Col>
                    <Col>
                        <Filter />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;