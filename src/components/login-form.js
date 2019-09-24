import React  from "react";
import styled from "styled-components";

const SignForm = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputCell = styled.input`
    background: green;
`;

const Label = styled.span`
    background: purple;
`;
const SignIn = styled.input`
    background: blue;
    color: orange;
    font-weight: bolder;
`;

const LoginForm = (props) => {
	return (
		<SignForm>
			<Label>Email</Label>
			<InputCell type = "text" name="email" value={props.email} onChange={(e)=>props.handleChange(e)}/>
			<Label>Password</Label>
			<InputCell type = "password" name="password" value={props.password} onChange={(e)=>props.handleChange(e)}/>
			<SignIn type = "button" value="Sign In" onClick = {(e)=>props.onLogin(e)} />
		</SignForm>
	);
};
export default LoginForm;