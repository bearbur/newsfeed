import React, { useState, useEffect } from "react";
import axios from "axios";
import Constants from "../constants";
import NewsItem from "../components/news-item";
import LoadingSpinner from "../components/loading-spinner";
import styled from "styled-components";

const NewsWrapper = styled.div`
	padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 70vw;
    height: 20em;
    overflow-y: auto;
`;

const NewsTitle = styled.h1`
	    font-size: 2em;	
	    padding: 1em;
`;

function NewsContainer() {
	const [data, setData] = useState({ news: [] });
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				Constants.urls.news,
			);
			setData({news:result.data.data});
		};
		fetchData();
	}, []);
	return (

		<NewsWrapper>
			<NewsTitle>
				Новости
			</NewsTitle>
			{
				data.news.length === 0 ? <LoadingSpinner/> : data.news.map((contentOfNews,indexNews)=><NewsItem key={indexNews}  content={contentOfNews}/>)
			}
		</NewsWrapper>
	);
}
export default NewsContainer;