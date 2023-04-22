import React from 'react';
import styled from "styled-components";

const FlexStyled = styled.div`
  display: flex;
  justify-content: ${(props: IFlexProps) => props.justify || 'stretch'};
  align-items: ${(props: IFlexProps) => props.align || 'stretch'};
  flex-direction: ${(props: IFlexProps) => props.direction || 'stretch'};
  margin: ${(props: IFlexProps) => props.margin || '0'};
`

export interface IFlexProps {
    justify?: string,
    align?: string,
    direction?: string,
    margin?: string,
    children: React.ReactNode
}


function Flex(props: IFlexProps) {
    return (
        <FlexStyled {...props}/>
    );
}

export default Flex;