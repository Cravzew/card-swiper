import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import Card from "./components/Card/Card";
import {useAppDispatch} from "./store/store";
import {fetchPhoto} from "./store/reducers/photoReducer";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPhoto())
    }, [dispatch])

    return (
        <>
            <Layout width={'1000px'}>
                <Card/>
            </Layout>
        </>
    );
}

export default App;