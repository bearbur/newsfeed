import React from "react";
import styled from "styled-components";

const Item = styled.div`
   	padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Title = styled.span`
    font-size: 1.2em;
	    font-weight: bolder;
	    color: #3480eb;	
	    padding: 1em;
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
	);
};

export default NewsItem;