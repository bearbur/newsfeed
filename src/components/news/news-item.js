import React from "react";
import { object } from 'prop-types';
import styled from "styled-components";

const Item = styled.div`
   	padding: 1em;
   	margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
	border-radius: 1em; 
`;
const Title = styled.span`
    font-size: 1.2em;
	    font-weight: bolder;
	    color: #3480eb;	
	    padding: 1em;
`;
const Text = styled.span`
    font-weight: light;
    color: #000;
`;

const NewsItem = ({content}) => {
	return(
		<Item >
			<Title>{content.title}</Title>
			<Text>{content.text}</Text>
		</Item>
	);
};

export default NewsItem;

NewsItem.propTypes = {
	content: object.isRequired
};