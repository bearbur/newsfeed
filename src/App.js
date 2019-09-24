import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider}  from "./auth/provider";
import NavigationContainer from "./containers/navigation-container";
import NewsContainer from "./containers/news-container";
import styled from "styled-components";
import LoginFormContainer from "./containers/login-form-container";
import ProfileContainer from "./containers/profile-container";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #000;
    height: 100vh;
    color: #fff;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    border: 1px solid orange;
    display: flex;
    flex-direction: column;
    align-items: center;
`;



function App() {
    

	return (

		<Router>

			<AppWrapper>
				<Provider>
					<Header>
						<NavigationContainer/>
					</Header>
					<Main>
						<Route path="/" exact component={NewsContainer}/>
						<Route path="/news" exact component={NewsContainer}/>
						<Route path="/profile" exact component={ProfileContainer}/>
						<Route path="/auth" exact component={LoginFormContainer}/>
					</Main>
				</Provider>
			</AppWrapper>

		</Router>
	);

}

export default App;
