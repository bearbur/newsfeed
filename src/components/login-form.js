import React  from "react";
import { bool, string, func, object } from 'prop-types';
import styled from "styled-components";
import LoadingSpinner from "../components/loading-spinner";

const SignForm = styled.form`
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

const handleKeyDown = (e,onLogin) => {
    if (e.key === 'Enter') {
        onLogin();
    }
};

const LoginForm = ({processing, email,  password, handleChange, onLogin, toggle, errorLog}) => {

	return (
			processing ? (
				<LoadingSpinner/>
				) :
				(
					<SignForm>
						<Label>Электронная почта</Label>
						<InputCell
                            type = "email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            name="email"
                            value={email}
                            onChange={(e)=>{handleChange(e);}}
                        />
						<Label>Пароль</Label>
						<InputCell type = "password" name="password" value={password} onChange={(e)=>handleChange(e)} onKeyDown = {(e)=>{handleKeyDown(e, onLogin);}}/>
						<SignIn type = "submit" value="Отправить" onClick = {(e)=>{onLogin(e); toggle();}} />
						{(errorLog && errorLog["message"] && typeof errorLog["message"] === "string") ? <ErrorLog>
							<ErrorMessage>{errorLog["message"]}</ErrorMessage>
						</ErrorLog> : <ErrorLog/>}
					</SignForm>
				)
	);
};
export default LoginForm;

LoginForm.propTypes = {
    processing: bool.isRequired,
    email: string.isRequired,
    password: string.isRequired,
    handleChange: func.isRequired,
    onLogin: func.isRequired,
    toggle: func.isRequired,
    errorLog: object
};