import React from 'react';
import styled from "styled-components";
import Flex from "./Flex";
import Layout from "./Layout";

const FooterStyled = styled.footer`
  border: 1px solid gainsboro;
`

function Footer() {
    return (
        <FooterStyled>
            <Layout padding={'20px 15px'}>
                <Flex direction={'column'}>
                    <Flex justify={'space-between'}>
                        <p style={{
                            maxWidth: '500px'
                        }}>
                            The photos you see come from a third party site and do not belong to me. If you have any
                            questions, please contact the owner.
                        </p>
                        <Flex direction={'column'}>
                            <h2>Contacts</h2>
                            <ul>
                                <li>Telegram: @cravzew</li>
                            </ul>
                        </Flex>
                    </Flex>
                    <div style={{
                        textAlign: 'right',
                        marginTop: '30px'
                    }}>
                        ©CRAVZEW 2022. All rights reserved.
                    </div>
                </Flex>
            </Layout>
        </FooterStyled>
    );
}

export default Footer;