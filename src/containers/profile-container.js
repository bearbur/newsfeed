import React  from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import {Consumer} from "../auth/provider";
const ProfileFormWrapper = styled.div`
    background: yellow;
`;
function LoginFormContainer() {
	return (
		<ProfileFormWrapper>
			<Consumer>
				{({ store }) => (
					store.authCorrect ? (
						<div>
							<h1>{"Profile"}!</h1>
						</div>
					) : Redirect("/")
				)}
			</Consumer>
		</ProfileFormWrapper>
	);
}
export default LoginFormContainer;