import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import css from './operacao.module.css'

export function Operacao () {
    return (
        <div className={css.background}>
        <Container fluid>
        <Row className={css.row}>
            <Col className={css.column-1}>
                <h6 className={css.frase}>O que você precisa para a sua</h6>
                <h1 className={css.operacao}>Operação</h1>
                <div>
                    A PTH-18 supera os competidores da sua classe de tamanho em capacidade, devido sua lança e
                    braço serem projetados para manter as tubulações e mangueiras hidráulicas totalmente protegidas,
                    evitando trincas e quebras de tubulação e rompimentos de mangueiras na colheita. Essa máquina
                    proporciona alto desempenho!
                </div>
                <button className={css.button}>ler mais</button>
            </Col>
            
            <Col>
                <Image src="/terceiro-bloco.c60f7da.png" alt="pth 12" width={650} height={650}/>
            </Col>
        </Row>
        </Container>
        </div>
    )
}