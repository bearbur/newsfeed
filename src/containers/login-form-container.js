import React  from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {Consumer} from "../providers/auth";
import LoginForm from  "../components/login-form";

const LoginFormWrapper = styled.div`
    height: 20em;
    width: 20em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const LoginTitle = styled.h1`
	    font-size: 2em;	
	    padding: 1em;
`;

const loginState = {processing: false};
const toggleProcessing = () => {
	const processing = loginState.processing;
	loginState["processing"] = !processing;
};

function LoginFormContainer() {
	return (
		<LoginFormWrapper>
			<LoginTitle>
				Авторизуйтесь
			</LoginTitle>
			<Consumer>
				{({ store, actions }) => (
					store.authCorrect ?
						<Redirect to='/profile' />
					 : (
						<div>
							{loginState.processing=false}
							<LoginForm
								handleChange={actions.handleChange}
								onLogin={actions.onLogin}
								email={store.email}
								password={store.password}
								errorLog={store.error}
								processing={loginState.processing}
								toggle={()=>toggleProcessing()}
							/>
						</div>)
				)}
			</Consumer>
		</LoginFormWrapper>
	);
}
export default LoginFormContainer;