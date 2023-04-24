import React from 'react';
import styled, {css} from "styled-components";

const LayoutStyled = styled.div`
  max-width: ${(props: ILayoutProps) => props.width || '1000px'};
  margin: 0 auto;
  padding: ${(props: ILayoutProps) => props.padding};
  height: ${(props: ILayoutProps) => props.height || 'auto'};
  box-shadow: ${(props: ILayoutProps) => props.boxShadow || '0'};
  ${(props: ILayoutProps) => props.content && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`


interface ILayoutProps {
    width?: string,
    children: React.ReactNode,
    padding?: string,
    height?: string,
    boxShadow?: string,
    content?: string,
}

function Layout(props: ILayoutProps) {
    return (
        <LayoutStyled {...props}/>
    );
}

export default Layout;