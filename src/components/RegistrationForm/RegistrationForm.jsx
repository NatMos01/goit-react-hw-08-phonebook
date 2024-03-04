import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUserThunk } from 'store/operations'
import { FormButton, FormContainer, FormWrapper, Input, InputLabel, StyledForm, StyledH2 } from './RegistrationForm.styled'



const RegistrationForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const { name: nameInput, email: emailInput, password: passwordInput } = e.target.elements
        dispatch(registerUserThunk({ name: nameInput.value, email: emailInput.value, password: passwordInput.value }))
        nameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''
        navigate('/contacts')

    }


    return (
        <FormContainer >
            <StyledH2 >Register</StyledH2>
            <StyledForm onSubmit={handleSubmit}>
                <FormWrapper >
                    <InputLabel htmlFor="name">Name
                    </InputLabel>
                    <Input name="name" placeholder="Name" id="name" type="text" required />
                </FormWrapper>
                <FormWrapper >
                    <InputLabel htmlFor="email">Email</InputLabel><Input placeholder="Email" name="email" id="email" type="email" required />
                </FormWrapper>
                <FormWrapper >
                    <InputLabel htmlFor="password">Password</InputLabel><Input placeholder="Password" name="password" id="password" type="password" required />
                </FormWrapper>
                <FormButton type="submit" style={{
                    marginTop: '15px',
                    cursor: 'pointer'
                }}>Registration</FormButton>
            </StyledForm>
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>

        </FormContainer>

    )
}

export default RegistrationForm