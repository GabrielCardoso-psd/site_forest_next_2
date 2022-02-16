import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import css from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer (){
    return(
        <div>
            <Container fluid>
                <div>
                    <Col>
                        <div>Nos acompanhe nas redes</div>
                        <FontAwesomeIcon icon={solid('user-secret')} />
                    </Col>
                </div>
            </Container>
        </div>

    )
}