import React from 'react';
import styled from "styled-components";

const ErrorStyled = styled.p`
  color: red
`

function CardError({error}: { error: string }) {
    return (
        <ErrorStyled>
            Error: <br/>
            {error}
        </ErrorStyled>
    );
}

export default CardError;