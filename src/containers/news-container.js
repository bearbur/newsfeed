import React from 'react';
import { Consumer } from '../providers/news';
import styled from 'styled-components';
import News from '../components/news';

const NewsWrapper = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90vw;
    height: 80vh;
`;

const NewsTitle = styled.h1`
    font-size: 2em;
    padding: 1em;
`;

function NewsContainer() {
    return (
        <Consumer>
            {({ store, actions }) => (
                <NewsWrapper>
                    <NewsTitle>Новости</NewsTitle>
                    <News news={store.news} updateNews={actions.updateNews} />
                </NewsWrapper>
            )}
        </Consumer>
    );
}
export default NewsContainer;
