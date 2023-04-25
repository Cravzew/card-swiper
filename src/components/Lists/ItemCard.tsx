import React from 'react';
import styled from "styled-components";

const ItemCardStyled = styled.li`
  margin: 10px;
  border: 1px solid gainsboro;
  padding: 10px;
  display: inline-block;
  
  img {
    border: 1px solid gainsboro;
    max-width: 200px;
  }
`

function ItemCard({url}: { url: string; }) {
    const photo = Object.values(url)

    return (
        <ItemCardStyled>
            <img src={photo + ''} alt=""/>
        </ItemCardStyled>
    );
}

export default ItemCard;