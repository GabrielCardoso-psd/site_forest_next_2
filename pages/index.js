import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from "../components/header/header";
import {Banner} from "../components/banner/banner";
import {Nossahistoria} from "../components/nossahistoria/nossahistoria";
import {Pth18} from "../components/pth18/pth18";
import {Operacao} from "../components/operacao/operacao";
import {Form} from "../components/form/form";
import {Footer} from "../components/footer/footer";

export default function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Nossahistoria/>
        <Pth18/>
        <Operacao/>
        <Form/>
        <Footer/>
    </div>
  )
}
