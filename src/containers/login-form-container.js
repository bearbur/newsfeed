import React  from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {Consumer} from "../auth/provider";
import LoginForm from  "../components/login-form";

const LoginFormWrapper = styled.div`
    background: yellow;
    height: 20em;
    width: 20em;
    padding: 1em;
`;
function LoginFormContainer() {
	return (
		<LoginFormWrapper>
			<Consumer>
				{({ store, actions }) => (
					store.authCorrect ?
						<Redirect to='/profile' />
					 : (
						<div>
							<LoginForm
								handleChange={actions.handleChange}
								onLogin={actions.onLogin}
								email={store.email}
								password={store.password}
								errorLog={store.error}
							/>
						</div>)
				)}
			</Consumer>
		</LoginFormWrapper>
	);
}
export default LoginFormContainer;