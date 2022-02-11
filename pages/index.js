import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from "../components/header/header";
import {Banner} from "../components/banner/banner";
import {Nossahistoria} from "../components/nossahistoria/nossahistoria";
import {Pth18} from "../components/pth18/pth18";

export default function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Nossahistoria/>
        <Pth18/>
    </div>
  )
}
