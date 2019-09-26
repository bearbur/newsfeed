import React, {useState, useEffect, Fragment} from "react";
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
    height: 80vh;
`;

const News = styled.div`
	min-height: 60vh;
	overflow-y: auto;
	padding: 1em;
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

		//todo put to store

		fetchData();
	}, []);
	return (

		<NewsWrapper>
			<NewsTitle>
				Новости
			</NewsTitle>
			{
				data.news.length === 0 ? <LoadingSpinner/> : (
					<Fragment>
						<News>
							{data.news.map((contentOfNews,indexNews)=><NewsItem key={indexNews}  content={contentOfNews}/>)}
						</News>
						<Fragment>
							<span>Всего новостей: {data.news.length}.</span>
						</Fragment>
					</Fragment>
					)
			}
		</NewsWrapper>
	);
}
export default NewsContainer;