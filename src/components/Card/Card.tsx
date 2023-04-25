import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {motion, useMotionValue} from 'framer-motion'
import {addToFilters, fetchPhoto} from "../../store/reducers/photoReducer";
import CardError from "./CardError";
import CardSuccess from "./CardSuccess";
import {setShow} from "../../store/reducers/trainingReducer";


const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  box-shadow: 0 0 100px #000;
`

function Card() {
    const {status, error, url} = useAppSelector(state => state.photo)
    const [update, setUpdate] = useState(false)
    const [added, setAdded] = useState(false)

    const dispatch = useAppDispatch()

    function handleUpdate() {
        setUpdate(true)
        dispatch(setShow(false))
    }

    function handleNext(e: MouseEvent) {
        if (e.x >= 1500) {
            handleUpdate()
        }
        if (e.x <= 100) {
            handleUpdate()
            setAdded(true)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (update) dispatch(fetchPhoto())
            if (added) dispatch(addToFilters(url))
            setUpdate(false)
            setAdded(false)
        }, 500)
        return () => {
            clearTimeout(timeout)
        }
    }, [update])

    const x = useMotionValue(0)

    return (
        <motion.div
            drag="x"
            dragConstraints={{left: 0, right: 0}}
            style={{x,zIndex: 1}}
            onDrag={handleNext}
        >
            <CardStyled>
                {status === 'resolved' && <CardSuccess url={url}/>}
                {status === 'rejected' && <CardError error={error}/>}
            </CardStyled>
        </motion.div>
    );
}

export default Card;