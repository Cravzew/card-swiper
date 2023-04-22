import React from 'react';
import styled from "styled-components";
import {useAppSelector} from "../../store/store";
import CardSuccess from "./CardSuccess";
import CardLoading from "./CardLoading";
import CardError from "./CardError";


const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  padding: 10px 15px;
  max-width: 500px;
`

function Card() {
    const {status, error, url} = useAppSelector(state => state.photo)

    return (
        <CardStyled>
            {status === 'loading' && <CardLoading/>}
            {status === 'resolved' && <CardSuccess url={url}/>}
            {status === 'rejected' && <CardError error={error}/>}
        </CardStyled>
    );
}

export default Card;