import React from 'react';
import Header from "../components/Header";
import Layout from "../components/Layout";
import Lists from "../components/Lists";
import Footer from "../components/Footer";

function Liked() {
    return (
        <>
            <Header/>
            <Layout padding={'10px 15px'}>
                <Lists/>
            </Layout>
            <Footer/>
        </>
    );
}

export default Liked;