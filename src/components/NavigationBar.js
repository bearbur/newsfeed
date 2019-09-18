import React, {Component} from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    border: 1px solid yellow;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 2em;
`;


const NavTitle = styled.input`
    border: 1px solid green;
    height: 100%;
    font-size: 1em;
`;

const NavButton = styled.input`
    border: 1px solid red;
    height: 100%;
    font-size: 1em;
`;

export default class NavigationBar extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <NavBar>
                <NavTitle type="button" value="NewsFeed"/>
                <NavButton type="button" value="Login"/>
                <NavButton type="button" value="News"/>
                <NavButton type="button" value="Profile"/>
                <NavButton type="button" value="Sign"/>
            </NavBar>
        );
    }
}