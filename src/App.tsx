import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import Card from "./components/Card/Card";
import {useAppDispatch} from "./store/store";
import {fetchPhoto} from "./store/reducers/photoReducer";
import Header from "./components/Header";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPhoto())
    }, [dispatch])

    return (
        <>
            <Header/>
            <Layout content={'true'} height={'100vh'} boxShadow={'0 0 1px 0'}>
                <Card/>
            </Layout>
        </>
    );
}

export default App;