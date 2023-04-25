import React from 'react';
import styled from "styled-components";
import Layout from "./Layout";
import Flex from "./Flex";
import logo from '../images/logo.png'
import {Link} from "react-router-dom";
import {setShow} from "../store/reducers/trainingReducer";
import {useAppDispatch} from "../store/store";

const HeaderStyled = styled.header`
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 10px 63px rgba(0, 0, 0, 0.07);
  border: 1px solid gainsboro;
`

function Header() {
    const dispatch = useAppDispatch()

    return (
        <HeaderStyled >
            <Layout padding={'20px 15px'}>
                <Flex justify={'space-between'} align={'center'}>
                    <Flex>
                        <Link to={'/'}>
                            <img style={{
                                width: '15%'
                            }} src={logo} alt="logo Cravzew"/>
                        </Link>
                    </Flex>
                    <Flex>
                        <Link to={'/liked'} style={{
                            textDecoration: 'underline'
                        }}>
                            LIKED
                        </Link>
                    </Flex>
                </Flex>
            </Layout>
        </HeaderStyled>
    );
}

export default Header;