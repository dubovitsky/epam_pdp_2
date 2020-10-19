import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import styles from './styles.module.css';

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <span className={styles.title}>Find you movie</span>
                </Navbar.Brand>
                <Form inline>
                    <Form.Group as={Row} className="mr-sm-2">
                        <Form.Label className={styles.white} column sm={5}>
                            Search by
                        </Form.Label>
                        <Col sm={7}>
                            <ToggleButtonGroup type="radio" name="radio" defaultValue={[1]}>
                                <ToggleButton variant="secondary" value={1}>Title</ToggleButton>
                                <ToggleButton variant="secondary" value={2}>Genre</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Form.Group>   
             
                    <Form.Group className="mr-sm-2">
                        <Form.Label className="sr-only">Find you movie</Form.Label>
                        <Form.Control type="search" placeholder="Search" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </Container>
        </Navbar>
    )
}
