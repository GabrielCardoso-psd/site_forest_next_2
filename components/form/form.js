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
                    <Col md={4}>
                        <div className={css.bgform}>
                            <div className={css.titleform}>Fale com a gente!</div>
                            <form action="">
                                <div>
                                <label className={css.label} htmlFor="">
                                    Nome:<br/>
                                    <input className={css.input} placeholder="Ex.: Gabriel Cardoso" type="text"/>
                                </label>
                                </div>

                                <div>
                                <label className={css.label} htmlFor="">
                                    E-mail:<br/>
                                    <input className={css.input} placeholder="Ex.: gabriel@gmail.com" type="text"/>
                                </label>
                                </div>

                                <div>
                                <label className={css.label} htmlFor="">
                                    Mensagem:<br/>
                                    <input className={css.input} placeholder="Ex.: Olá!" type="text"/>
                                </label>
                                    <div>
                                    <input className={css.submitButton} type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>

                    <Col md={8}>
                        <iframe className={css.video} width="960" height="515" src="https://www.youtube.com/embed/VpDZUTQLiWI"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}