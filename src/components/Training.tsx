import React from 'react';
import styled from "styled-components";
import {useAppSelector} from "../store/store";

const TrainingStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;

  p {
    user-select: none;
    transition: all .2s ease-in-out;
  }
`

interface ITrainingProps {
    children: React.ReactNode
}

function Training(props: ITrainingProps) {
    const training = useAppSelector(state => state.training.show)

    return (
        <TrainingStyled {...props}>
            <p style={{
                opacity: `${training ? '1' : '0'}`,
                transform: `${training ? 'translateX(-50px)' : 'translateX(-100px)'}`,
            }}>Swipe left to like</p>
            {props.children}
            <p style={{
                opacity: `${training ? '1' : '0'}`,
                transform: `${training ? 'translateX(50px)' : 'translateX(100px)'}`,
            }}>Swipe right to skip</p>
        </TrainingStyled>
    );
}

export default Training;