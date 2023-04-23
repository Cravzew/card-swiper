import React, {useState} from 'react';
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
    const [visible, setVisible] = useState(false)

    const photo = Object.values(url)

    return (
        <CardSuccessStyled style={{
            visibility: `${visible ? 'visible' : 'hidden'}`
        }}>
            <img onLoad={() => setVisible(true)} style={{
                border: '1px solid gray',
            }} src={photo + ''} alt=""/>
        </CardSuccessStyled>
    );
}

export default CardSuccess;