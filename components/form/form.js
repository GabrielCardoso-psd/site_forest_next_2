import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import css from './form.module.css'

export function Form () {
    return (
        <div className={css.background}>
            <Container fluid>
                <div className={css.text1}>
                    Preencha o formulário
                </div>
                <div className={css.text2}>
                    Fale com a PESA Forest
                </div>
                <div className={css.divider}></div>
                <Row>
                    <Col md={5}>
                        <div className={css.bgform}>
                            <div className={css.titleform}>Fale com a gente!</div>
                            <form action="">
                                <div>
                                <label className={css.label} htmlFor="">
                                    Nome:<br/>
                                    <input placeholder="Ex.: Gabriel Cardoso" type="text" name={name}/>
                                </label>
                                </div>

                                <div>
                                <label htmlFor="">
                                    E-mail:<br/>
                                    <input placeholder="Ex.: gabriel@gmail.com" type="text" name={name}/>
                                </label>
                                </div>

                                <div>
                                <label htmlFor="">
                                    Mensagem:<br/>
                                    <input placeholder="Ex.: Olá!" type="text" name={name}/>
                                </label>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}