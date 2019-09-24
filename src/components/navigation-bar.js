import React, {Component} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
    border: 1px solid yellow;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 2em;
    width: 100%;
`;

const NavTitle = styled.div`
    border: 1px solid green;
    height: 100%;
    font-size: 1em;
    width: 10em;
`;

const NavButton = styled.div`
    border: 1px solid red;
    height: 100%;
    font-size: 1em;
    width: 10em;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export default class NavigationBar extends Component {
	componentDidMount() {

	}

	render() {
		return (
			<NavBar>
				<NavTitle><Link to="/">NewsFeed</Link></NavTitle>
				<NavButton><Link to="/news">News</Link></NavButton>
				<NavButton><Link to="/profile">Profile</Link></NavButton>
				<NavButton><Link to="/auth">Sign</Link></NavButton>
			</NavBar>
		);
	}
}