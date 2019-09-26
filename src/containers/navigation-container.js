import React from "react";
import NavigationBar from "../components/navigation-bar";
import styled from "styled-components";
import {Consumer} from "../providers/auth";

const NavigationWrapper = styled.div`
	height: 100%;
	padding: 0;
`;

 const NavigationContainer = () => {
	return (
		<NavigationWrapper>
			<Consumer>
				{({store, actions}) =>
					(<NavigationBar auth={store.authCorrect} onLogout={()=>actions.onLogout()}/>)}
			</Consumer>
		</NavigationWrapper>)
}

export default NavigationContainer;