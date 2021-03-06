import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import css from './pth18.module.css'

export function Pth18 () {
    return (
        <div className={css.bgsessao}>
            <Container fluid>
            <Row>
                <Col md={5}>
                    <div className={css.pth1}>PTH 18</div>
                    <div className={css.pth2}>PTH 18</div>
                    <div className={css.text}>
                        A PTH-18 reúne toda a tecnologia que você procura em uma escavadeira para
                        o trabalho florestal. O motor à diesel C4.4 ACERT CAT® oferece o equilíbrio
                        perfeito entre durabilidade, eficiência de combustível e baixas emissões.
                        São amplamente testados em serviço, usam uma variedade de sistemas de
                        combustível de Trilho Comum e sistemas de controle avançados para oferecer
                        máximo de tempo de atividade nos ambientes mais difíceis. Além disso, o
                        motor C4.4 é capaz de enfrentar as aplicações mais severas e proporcionar
                        um desempenho superior.
                    </div>
                    <button className={css.button}>
                        Saber mais
                    </button>
                    <div className={css.details}>DETALHES DA MÁQUINA</div>
                    <div className={css.phrase}>Conheça um poucp mais sobre a máquina PTH 18, para mais informações entre em contato</div>
                </Col>

                <Col md={7}>
                    <div>
                        <Image src="/pth12-1.png" alt="pth 12" width={1300} height={900}/>
                    </div>
                </Col>
            </Row>

            </Container>
        </div>
    )
}