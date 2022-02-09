import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import css from './nossahistoria.module.css'

export function Nossahistoria () {
    return (
        <div>
            <div className={css.bgsessao}>
                <Container fluid>
                    <Row className={css.linhasessao}>
                        <Col>
                            <div>MÁQUINA</div>
                        </Col>

                        <Col>
                            <div className={css.conheca}>Conheça sobre</div>
                            <div className={css.historia}>
                                Nossa história
                                <div className={css.historia2}>
                                    NOSSA HISTÓRIA
                                </div>
                            </div>
                            <div>Oferecemos uma linha completa de equipamentos florestais para atender às necessidades de sua aplicação
                                – das principais máquinas que auxiliam na construção de estradas, em serrarias e reflorestamento, até
                                máquinas criadas para fins específicos, que colhem, extraem e carregam, a linha de produtos da PESA®
                                Forest é tudo o que você precisa para terminar o trabalho.
                            </div>
                            <button>SABER MAIS</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}