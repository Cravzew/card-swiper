import React from 'react';
import styled from "styled-components";

const LayoutStyled = styled.div`
  max-width: ${(props: ILayoutProps) => props.width || '1440px'};
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface ILayoutProps {
    width?: string,
    children: React.ReactNode
}

function Layout(props: ILayoutProps) {
    return (
        <LayoutStyled {...props}/>
    );
}

export default Layout;