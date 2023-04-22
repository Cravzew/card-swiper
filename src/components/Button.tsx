import React from 'react';
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props: IButtonProps) => props.transparent && ('none' || props.secondary)};
  color: ${(props: IButtonProps) => props.secondary};
  border: 2px solid;
  border-color: ${(props: IButtonProps) => props.primary};
  padding: ${(props: IButtonProps) => props.padding};
  outline: none;

  &:focus,
  &:focus-visible,
  &:hover {
    background-color: ${(props: IButtonProps) => props.primary};
    border-color: ${(props: IButtonProps) => props.secondary};
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
  }
`

interface IButtonProps {
    primary?: string,
    secondary?: string,
    padding?: string
    transparent?: boolean,
    children?: React.ReactNode,
    onClick?: () => void
}

function Button(props: IButtonProps) {
    return (
        <ButtonStyled {...props}/>
    );
}

export default Button;