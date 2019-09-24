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

const NavBlock = styled.div`
    background: light-blue;
    width: 25vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const AuthBlock = styled.div`
    background: pink;
    padding: 0.1em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const NavigationBar = (props) => {
		return (
			<NavBar>
                <NavBlock>
                    <NavButton><Link to="/">NewsFeed</Link></NavButton>
                </NavBlock>
                <NavBlock>
				    <NavButton><Link to="/news">News</Link></NavButton>
                </NavBlock>
                <NavBlock>
                    {!props.auth&&<AuthBlock><NavButton><Link to="/auth">Sign In</Link></NavButton></AuthBlock>}
                    {props.auth && (
                        <AuthBlock>
                            <NavButton><Link to="/profile">Profile</Link></NavButton>
                            <NavButton><LogoutButton type="button" value="Sign Out" onClick={()=>props.onLogout()}/></NavButton>
                        </AuthBlock>
                    )}
                </NavBlock>
			</NavBar>
		);
};

export default NavigationBar;
