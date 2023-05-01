import Navbar from "./Navbar"
import Footer from "./Footer"

import Head from 'next/head'

export default function Layout({ children}) {
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/pokeball.ico" />
        </Head>
            <Navbar />
            <main>{children}</main>
            <Footer/>
        </>
    )
}