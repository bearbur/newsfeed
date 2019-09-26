import React, {useState, useEffect, Fragment} from "react";
import { array, func } from 'prop-types';
import axios from "axios";
import Constants from "../constants";
import NewsItem from "./news/news-item";
import LoadingSpinner from "../components/loading-spinner";
import styled from "styled-components";

const NewsWrapper = styled.div`
	padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90vw;
    height: 80vh;
`;

const NewsList = styled.div`
	min-height: 60vh;
	overflow-y: auto;
	padding: 1em;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const News = ({news, updateNews}) => {
    const [data, setData] = useState({ news: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                Constants.urls.news,
            );
            setData({news: result.data.data||news});
        };
        fetchData();
        updateNews(data.news);
    }, [news]);

    return (
                <NewsWrapper>
                    {
                        data.news.length === 0 ? <Fragment><LoadingSpinner/> </Fragment>: (
                            <Fragment>
                                <NewsList>
                                    {data.news.map((contentOfNews,indexNews)=><NewsItem key={indexNews}  content={contentOfNews}/>)}
                                </NewsList>
                                <Fragment>
                                    <span>Всего новостей: {data.news.length}.</span>
                                </Fragment>
                            </Fragment>
                        )
                    }
                </NewsWrapper>

    );
};

export default News;

News.propTypes = {
    news: array,
    updateNews: func.isRequired
};