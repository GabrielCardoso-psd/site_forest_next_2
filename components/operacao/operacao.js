import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import css from './operacao.module.css'

export function Operacao () {
    return (
        <Container fluid>
        <Row>
            <Col>
                <div>O que você precisa para a sua</div>
                <div>Operação</div>
                <button>ler mais</button>
            </Col>
        </Row>
        </Container>
    )
}