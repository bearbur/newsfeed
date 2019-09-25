import React, { Component, createContext } from 'react';
import Constants from '../constants/'
import {loginRequest, validResponseAuth} from "../helpers/requestsToApi";

const initialState = {
        authCorrect: false,
        email: "",
        password: "",
        error: null,
        id: null,
        profile: {}
};

export const Context = createContext({...initialState});

class AuthProvider extends Component {

        state = {...initialState};

        get actions() {
                return {
                        handleChange: this.handleChange,
                        onLogin: this.onLogin,
                        onLogout: this.onLogout,
                        updateProfileInformation: this.updateProfileInformation
                };
        }

        handleChange = e => {
                this.setState({
                        [e.target.name]: e.target.value
                });
        };

        onLogin = e => {
                if(e)e.preventDefault();

                const { email, password } = this.state;

                loginRequest(email, password)
                    .then(r=>{
                            //Success login
                            if(validResponseAuth(r)){
                                    this.setState({
                                            authCorrect: true,
                                            password: "",
                                            id: r.data.data.id
                                    });
                            }
                            //Login failure
                            else{
                                    const informationFromResponse = r.data;
                                    if(
                                        informationFromResponse.hasOwnProperty("status")&&
                                        informationFromResponse.hasOwnProperty("message")&&
                                        informationFromResponse["status"]==="err"&&
                                        informationFromResponse["message"]==="wrong_email_or_password"
                                    ){
                                            this.setState({
                                                    authCorrect: false,
                                                    password: "",
                                                    error: {
                                                            message: Constants["messages"]["authIncorrect"]
                                                    }
                                            });
                                    } else if(r.status&&r.status===500){
                                            this.setState({
                                                    authCorrect: false,
                                                    password: "",
                                                    error: {
                                                            message: Constants["messages"]["serverError"]
                                                    }
                                            });
                                    } else {
                                            console.error(r);
                                            this.setState({
                                                    authCorrect: false,
                                                    password: "",
                                                    error: {
                                                            message: Constants["messages"]["unKnownError"]
                                                    }
                                            });
                                    }
                            }
                    })
                    .catch( err => {
                            console.error(err);
                            this.setState({
                                    authCorrect: false,
                                    password: "",
                                    error: {
                                            message: Constants["messages"]["unKnownError"]
                                    }
                            });
                    });
        };

        onLogout = () => {
                this.setState(initialState);
        };

        updateProfileInformation = (profileObject) => {
                this.setState({profile:profileObject})
        };

        render() {

                return (
                    <Context.Provider
                        value={{
                                store: this.state,
                                actions: this.actions
                        }}
                    >
                            {this.props.children}
                    </Context.Provider>
                );
        }
}

export const Consumer = Context.Consumer;
export const Provider = AuthProvider;