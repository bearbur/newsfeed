import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 0;
    background: #3480eb;
    color: white;
`;

const NavButton = styled.div`
    height: 100%;
    font-size: 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: none;
`;

const LogoutButton = styled.input`
	background: red;
	color: white!important;
	border: none;
`;

const NavBlock = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: none;
    width: 30vw;
`;

const AuthBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    border: none;
`;

const LinkStyle = {
  textDecoration: 'none',
    padding: '1em',
    color: 'white'
};

const NavigationBar = (props) => {
		return (
			<NavBar>
                <NavBlock>
				    <NavButton><Link style={LinkStyle} to="/news">Новости</Link></NavButton>
                </NavBlock>
                <NavBlock>
                    {!props.auth&&<AuthBlock><NavButton><Link style={LinkStyle}  to="/auth">Войти</Link></NavButton></AuthBlock>}
                    {props.auth && (
                        <AuthBlock>
                            <NavButton><Link style={LinkStyle}  to="/profile">Профиль</Link></NavButton>
                            <NavButton><LogoutButton style={LinkStyle}  type="button" value="Выйти" onClick={()=>props.onLogout()}/></NavButton>
                        </AuthBlock>
                    )}
                </NavBlock>
			</NavBar>
		);
};

export default NavigationBar;
