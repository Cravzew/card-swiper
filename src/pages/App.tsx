import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import Card from "../components/Card";
import {useAppDispatch, useAppSelector} from "../store/store";
import {fetchPhoto} from "../store/reducers/photoReducer";
import Header from "../components/Header";
import Training from "../components/Training";
import Footer from "../components/Footer";

function App() {
    const dispatch = useAppDispatch()
    const {url, error} = useAppSelector(state => state.photo)

    useEffect(() => {
        if (!url || error) {
            dispatch(fetchPhoto())
        }
    }, [dispatch])

    return (
        <>
            <Header/>
            <Layout content={'true'} height={'100vh'} boxShadow={'0 0 1px 0'}>
                <Training>
                    <Card/>
                </Training>
            </Layout>
            <Footer/>
        </>
    );
}

export default App;