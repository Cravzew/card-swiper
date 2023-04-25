import React, {useState} from 'react';
import styled from "styled-components";
import Loader from "../Loader";

const CardSuccessStyled = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
  }
`

function CardSuccess({url}: { url: string; }) {
    const [loading, setLoading] = useState(true)

    const photo = Object.values(url)

    return (
        <CardSuccessStyled>
            {loading && <Loader/>}
            <img onLoad={() => setLoading(false)} style={{
                border: '1px solid gray',
                display: `${loading ? 'none' : 'block'}`
            }} src={photo + ''} alt=""/>
        </CardSuccessStyled>
    );
}

export default CardSuccess;