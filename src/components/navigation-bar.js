import React from "react";
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

const LogoutButton = styled.input`
	background: red;
	color: white;
	border: none;
`;

const AuthBlock = styled.div`
    background: light-blue;
    width: 25vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const LogInBlock = styled.div`
    background: pink;
    padding: 0.1em;
`;

const NavigationBar = (props) => {
		return (
			<NavBar>
				<NavTitle><Link to="/">NewsFeed</Link></NavTitle>
				<NavButton><Link to="/news">News</Link></NavButton>
                <AuthBlock>
                    {props.auth && <NavButton><Link to="/profile">Profile</Link></NavButton>}
				    {!props.auth&&<LogInBlock><NavButton><Link to="/auth">Sign In</Link></NavButton></LogInBlock>}
                    {props.auth&&<NavButton><LogoutButton type="button" value="Sign Out" onClick={()=>props.onLogout()}/></NavButton>}
                </AuthBlock>
			</NavBar>
		);
};

export default NavigationBar;
