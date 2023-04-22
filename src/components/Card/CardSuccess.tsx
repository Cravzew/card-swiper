import React from 'react';
import {useAppDispatch} from "../../store/store";
import {fetchPhoto} from "../../store/reducers/photoReducer";
import styled from "styled-components";

const CardSuccessStyled = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
  }
`

function CardSuccess({url}: { url: string; }) {

    const photo = Object.values(url)

    return (
        <CardSuccessStyled>
            <img style={{
                border: '1px solid gray'
            }} src={photo + ''} alt=""/>
        </CardSuccessStyled>
    );
}

export default CardSuccess;