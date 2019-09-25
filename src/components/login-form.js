import React  from "react";
import styled from "styled-components";
import LoadingSpinner from "../components/loading-spinner";

const SignForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 15em;
`;

const InputCell = styled.input`
    background: rgba(250, 124, 100, 0.2);
    color: white;
    border: none;
    text-align: center;
    height: 1.5em;
    width: 100%;
    font-weight: bolder;
    font-size: 1.2em;
    border-radius: 0.25em;
`;

const Label = styled.span`
    text-align: center;
    width: 100%;
`;
const SignIn = styled.input`
    background: blue;
    color: white;
    font-weight: bolder;
    border: none;
    width: 10em;
    height: 2em;
    border-radius: 0.25em;
`;

const ErrorLog = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 3em;
`;

const ErrorMessage = styled.span`
	color: pink;
	font-size: 0.8em;
`;

const LoginForm = (props) => {
	return (
			props.processing ? (
				<LoadingSpinner/>
				) :
				(
					<SignForm>
						<Label>Email</Label>
						<InputCell type = "text" name="email" value={props.email} onChange={(e)=>props.handleChange(e)}/>
						<Label>Password</Label>
						<InputCell type = "password" name="password" value={props.password} onChange={(e)=>props.handleChange(e)}/>
						<SignIn type = "button" value="Sign In" onClick = {(e)=>{props.onLogin(e); props.toggle();}} />
						{(props["errorLog"] && props["errorLog"]["message"] && typeof props["errorLog"]["message"] === "string") ? <ErrorLog>
							{()=>props.toggle()}
							<ErrorMessage>{props["errorLog"]["message"]}</ErrorMessage>
						</ErrorLog> : <ErrorLog/>}
					</SignForm>
				)
	);
};
export default LoginForm;