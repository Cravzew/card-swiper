import React from 'react';
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../store/store";
import CardSuccess from "./CardSuccess";
import CardError from "./CardError";
import {motion, MotionValue} from 'framer-motion'
import {fetchPhoto} from "../../store/reducers/photoReducer";


const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  padding: 10px 15px;
  max-width: 400px;
  box-shadow: 0 0 200px #000;
`

function Card({x}: { x: MotionValue<number> }) {
    const {status, error, url} = useAppSelector(state => state.photo)
    const dispatch = useAppDispatch()

    function handleNext(e: any) {
        if (e.x === 1500 || e.x === 0) {
            dispatch(fetchPhoto())
        }
    }

    return (
        <motion.div
            drag="x"
            dragConstraints={{left: 0, right: 0}}
            style={{x}}
            onDrag={handleNext}
        >
            <CardStyled style={{
                visibility: `${status !== 'loading' ? 'visible' : 'hidden'}`
            }}>
                {status === 'resolved' && <CardSuccess url={url}/>}
                {status === 'rejected' && <CardError error={error}/>}
            </CardStyled>
        </motion.div>
    );
}

export default Card;