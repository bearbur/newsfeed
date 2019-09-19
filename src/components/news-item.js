import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Title = styled.span`
    font-weight: bold;
`;
const Text = styled.span`
    font-weight: light;
`;

 const NewsItem = (props) => {
     return(
         <Item >
             <Title>{props.content.title}</Title>
             <Text>{props.content.text}</Text>
         </Item>
     )
 }

 export default NewsItem;