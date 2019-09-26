import React, { Component, createContext } from 'react';

const initialState = {
    news: []
};

export const Context = createContext({ ...initialState });

class NewsProvider extends Component {
    state = { ...initialState };

    get actions() {
        return {
            updateNews: this.updateNews
        };
    }

    updateNews = news => {
        this.setState({ news: news });
    };

    render() {
        return (
            <Context.Provider
                value={{
                    store: this.state,
                    actions: this.actions
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
export const News = NewsProvider;
