import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import css from './header.module.css'

export function Header () {
    return (
        <div className={css.bgheader}>
            <Container fluid>
                <div className={css.alinhamento}>
                    <div>
                        <a href=""><Image src="/forest-1.jpg" alt="logo forest" width={180} height={48}/></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}