import React, {useState} from 'react';
import styled, {css} from "styled-components";
import Loader from "./Loader";

const ImageCardStyled = styled.div`
  ${(props: IImageCard) => props.primary && css`
    position: relative;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
    }

    img {
      border: 1px solid gray,
    }


  `}
  ${(props: IImageCard) => props.secondary && css`
    margin: 10px;
    border: 1px solid gainsboro;
    padding: 10px;
    display: inline-block;

    img {
      border: 1px solid gainsboro;
      max-width: 200px;
    }
  `}
`


interface IImageCard {
    url: string,
    primary?: string,
    secondary?: string,
}

function ImageCard(props: IImageCard) {
    const {url} = props

    const [loading, setLoading] = useState(true)

    const photo = Object.values(url)

    return (
        <ImageCardStyled {...props}>
            {loading && <Loader/>}
            <img onLoad={() => setLoading(false)} style={{
                display: `${loading ? 'none' : 'block'}`
            }} src={photo + ''} alt="image"/>
        </ImageCardStyled>
    );
}

export default ImageCard;