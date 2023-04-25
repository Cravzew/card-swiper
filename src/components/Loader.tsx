import React from 'react';
import styled from "styled-components";

const SpinnerStyled = styled.div`
  width: 164px;
  height: 164px;
  display: inline-block;
  overflow: hidden;
  background: rgba(NaN, NaN, NaN, 0);
`

const LoadingStyled = styled.div`
  @keyframes ldio-z05lsavaesc {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  div {
    box-sizing: border-box !important
  }

  > div {
    position: absolute;
    width: 90.19999999999999px;
    height: 90.19999999999999px;
    top: 36.9px;
    left: 36.9px;
    border-radius: 50%;
    border: 4.92px solid #000;
    border-color: #1d0e0b transparent #1d0e0b transparent;
    animation: ldio-z05lsavaesc 3.0303030303030303s linear infinite;
  }

  > div:nth-child(2) {
    border-color: transparent
  }

  > div:nth-child(2) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  > div:nth-child(2) div:before, > div:nth-child(2) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 4.92px;
    height: 4.92px;
    top: -4.92px;
    left: 37.72px;
    background: #1d0e0b;
    border-radius: 50%;
    box-shadow: 0 85.28px 0 0 #1d0e0b;
  }

  > div:nth-child(2) div:after {
    left: -4.92px;
    top: 37.72px;
    box-shadow: 85.28px 0 0 0 #1d0e0b;
  } {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

  div {
    box-sizing: content-box;
  }
`

function Loader() {
    return (
        <SpinnerStyled>
            <LoadingStyled className="ldio-z05lsavaesc">
                <div></div>
                <div>
                    <div></div>
                </div>
            </LoadingStyled>
        </SpinnerStyled>
    );
}

export default Loader;