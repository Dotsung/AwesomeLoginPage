// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';


const SignInCard = styled.div`
    background-color: white;
    margin: auto;
    margin-top: 15rem;
    width: 500px;
    z-index: 2;
    @media (max-width: 550px){
        width: 100%;
        height: 100%;
        margin: auto;
    }
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3rem;
    padding-top: 3rem;
`

const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
`

const StyledInput = styled.input`
    margin-top: 0.5rem;
    border: none;
    height: 2.5rem;
    background-color: ${oc.gray[2]}
    border-radius: 3px;
    font-size: 1rem;
    &::placeholder {
        padding-left: 0.5rem;
        font-size: 1rem;
    }
`

const H1 = styled.h1`
    margin: 0;
    margin-bottom: 1rem;
    font-size: 2.5rem;
`

const ButtonWrapper = styled.div`
    margin-top: 0.5rem;
    display: flex;
`

const StyledButton = styled.button`
    margin-top: 1rem;
    border: none;
    height: 2.5rem;
    background-color: ${oc.gray[7]}
    color: white;
    border-radius: 3px;
    font-size: 1.5rem;
`

const Spacer = styled.div`
    flex: 1;
`

const ToSignUp = styled(Link)`
    margin-top: 0.7rem;
    font-size: 1rem;
    color: ${oc.gray[6]}

    &:visited{
        color: ${oc.gray[6]}
    }

    &:hover{
        color: ${oc.gray[7]}
    }
`

const Separator = styled.div`
    height: 1px;
    width: 100%;
    background: #ced4da;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
`

const Or = styled.div`
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: #fff;
    padding-left: .5rem;
    padding-right: .5rem;
    font-size: .85em;
    font-weight: 600;
    color: #212529;
`

const SocialButtons = styled.div`
    margin: auto 0;
`

const FaceBookButton = styled.div`
    display: flex;
    background-color: ${oc.blue[7]};
    color: white;
    height: 2.5rem;
    line-height: 2.4rem;
    border-radius: 3px;
    &:hover{
        background-color: ${oc.blue[8]};
    }
`

const TwitterButton = styled.div`
    display: flex;
    background-color: ${oc.indigo[5]};
    color: white;
    margin-top: 0.5rem;
    height: 2.5rem;
    line-height: 2.4rem;
    border-radius: 3px;
    &:hover{
        background-color: ${oc.indigo[7]};
    }
`

const GoogleButton = styled.div`
    display: flex;
    background-color: ${oc.red[7]};
    color: white;
    margin-top: 0.5rem;
    height: 2.5rem;
    line-height: 2.4rem;
    border-radius: 3px;
    &:hover{
        background-color: ${oc.red[8]};
    }
`

const Icon = styled(FontAwesomeIcon)`
    margin-left: 1rem;
    font-size: 2rem;
    padding-top: 0.25rem;
`

const H3 = styled.h3`
    margin: 0;
    margin-left: 1rem;
    font-size: 1.5rem;
`

const Alert = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: auto;
    background-color: white;
    box-shadow: 10px 5px 5px black;
`

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }

    onChange = (e) => {
        const { name, value } = e.target; 
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        axios.post(
            'http://localhost:4000/api/auth/signin',
            {
                email: this.state.email,
                password: this.state.password
            }
        )
        .then((result) => {
            console.log(result);
            console.log(result.data.user);
            console.log(result.data.age);
        })
        .catch((result) => {
            console.log(result);
            console.log('실패 ㅠ');
        });
    }

    render(){
        const { email, password } = this.state;

        return(
            <SignInCard>
                <FormWrapper>
                    <Alert>
                        asdf
                    </Alert>
                    <H1>로그인</H1>
                    <SignInForm onSubmit={this.onSubmit}>
                        <StyledInput type="text" name="email" placeholder="Email" value={email} onChange={this.onChange} />
                        <StyledInput type="password" name="password" placeholder="Password" value={password} onChange={this.onChange} />
                        <StyledButton>로그인</StyledButton>
                    </SignInForm>
                    <ToSignUp to='/auth/signup'>회원이 아니신가요?가입하기</ToSignUp>
                </FormWrapper>
            </SignInCard>
        )
    }
}

export default SignIn;