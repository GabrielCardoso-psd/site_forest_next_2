import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import css from './form.module.css'

export function Form () {
    return (
        <div className={css.background}>
            <Container fluid>
                <div>
                    Preencha o formulário
                </div>
                <div>
                    Fale com a PESA Forest
                </div>
                <div className={css.divider}></div>
            </Container>
        </div>
    )
}