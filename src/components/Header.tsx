import React from 'react';
import styled from "styled-components";
import Layout from "./Layout";

const HeaderStyled = styled.header`
  position: fixed;
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 10px 63px rgba(0, 0, 0, 0.07);
`

function Header() {
    return (
        <HeaderStyled>
            <Layout padding={'20px 15px'}>
                CRAVZEW
            </Layout>
        </HeaderStyled>
    );
}

export default Header;