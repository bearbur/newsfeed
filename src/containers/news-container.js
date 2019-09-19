import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Constants from '../constants';
import NewsItem from "../components/news-item";
import LoadingSpinner from "../components/loading-spinner";
import styled from "styled-components";

const News = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
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

        <News>
            {
                data.news.length === 0 ? <LoadingSpinner/> : data.news.map((contentOfNews,indexNews)=><NewsItem key={indexNews}  content={contentOfNews}/>)
            }
        </News>
    );
}
export default NewsContainer;