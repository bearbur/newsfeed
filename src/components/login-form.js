import React  from "react";
import styled from "styled-components";

const SignForm = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputCell = styled.input`
    background: green;
    border: none;
`;

const Label = styled.span`
    background: purple;
`;
const SignIn = styled.input`
    background: blue;
    color: orange;
    font-weight: bolder;
    border: none;
`;

const ErrorLog = styled.div`
	display: flex;
	flex-direction: column;
`;

const ErrorMessage = styled.span`
	background: pink;
	color: brown;
`;

const LoginForm = (props) => {
	return (
		<SignForm>
			<Label>Email</Label>
			<InputCell type = "text" name="email" value={props.email} onChange={(e)=>props.handleChange(e)}/>
			<Label>Password</Label>
			<InputCell type = "password" name="password" value={props.password} onChange={(e)=>props.handleChange(e)}/>
			<SignIn type = "button" value="Sign In" onClick = {(e)=>props.onLogin(e)} />
			{(props["errorLog"] && props["errorLog"]["message"] && typeof props["errorLog"]["message"] === "string")&&<ErrorLog>
				<ErrorMessage>{props["errorLog"]["message"]}</ErrorMessage>
			</ErrorLog>}
		</SignForm>
	);
};
export default LoginForm;