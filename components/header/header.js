import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import css from './header.module.css'

export function Header () {
    return (
        <div className={css.bgheader}>
            <Container fluid>
                <div>
                    <Row>
                        <Col sm={4}>
                            <div>
                                <a href=""><Image src="/forest-1.jpg" alt="logo forest" width={180} height={48}/></a>
                            </div>
                        </Col>

                        <Col className={css.menu} sm={4}>
                            <a className={css.menulink} href="">INÍCIO</a>
                            <a className={css.menulink} href="">MENU</a>
                            <a className={css.menulink} href="">SOBRE A PESA FOREST</a>
                            <a className={css.menulink} href="">CONTATO</a>
                        </Col>

                        <Col  className={css.botaoalign} sm={4}>
                            <button className={css.botao}>
                                Entrar em contato
                            </button>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}