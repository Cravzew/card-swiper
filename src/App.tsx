import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import Card from "./components/Card/Card";
import {useAppDispatch} from "./store/store";
import {fetchPhoto} from "./store/reducers/photoReducer";
import {useMotionValue, useTransform, motion} from "framer-motion";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPhoto())
    }, [dispatch])

    const x = useMotionValue(0)
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#ff4d4d", "#f1dcff", "rgb(72,255,0)"]
    )

    return (
        <motion.div
        style={{background}}
        >
            <Layout width={'1000px'}>
                <Card x={x}/>
            </Layout>
        </motion.div>
    );
}

export default App;