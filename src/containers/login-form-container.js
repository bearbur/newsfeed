import React  from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {Consumer} from "../auth/provider";
import LoginForm from  "../components/login-form";

const LoginFormWrapper = styled.div`
    background: yellow;
`;
function LoginFormContainer() {
	return (
		<LoginFormWrapper>
			<Consumer>
				{({ store, actions }) => (
					store.authCorrect ?
						Redirect("/login")
					 : (
						<div>
							<LoginForm handleChange={actions.handleChange} onLogin={actions.onLogin} email={store.email} password={store.password}/>
						</div>)
				)}
			</Consumer>
		</LoginFormWrapper>
	);
}
export default LoginFormContainer;