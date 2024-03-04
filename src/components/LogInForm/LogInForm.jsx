import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { logInThunk } from "store/operations"
import { getError } from "store/selectors"
import { FormButton, FormContainer, FormWrapper, Input, InputLabel, StyledForm, StyledH2 } from "./LogInForm.styled"


const LogInForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isError = useSelector(getError)


    const handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = e.target.elements
        const userData = {
            email: email.value,
            password: password.value,
        }
        dispatch(logInThunk(userData))
        password.value = '';
        email.value = ''
        if (isError === null) {
            navigate('/contacts')
        }
    }

    return (
        <FormContainer>
            <StyledH2>Login page</StyledH2>
            <StyledForm onSubmit={handleSubmit} >
                <FormWrapper >
                    <InputLabel htmlFor="email">Email</InputLabel><Input placeholder='Email' name="email" id="email" type="email" required />
                </FormWrapper>
                <FormWrapper >
                    <InputLabel htmlFor="password">Password</InputLabel><Input placeholder="Password" name="password" id="password" type="password" required />
                </FormWrapper>
                {isError === "Request failed with status code 400" && <p style={{
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'red'
                }}>Oops, something went wrong. Check that you entered your email and password correctly</p>}
                <FormButton type="submit" style={{
                    marginTop: '15px',
                    cursor: 'pointer'
                }}>Login</FormButton>
            </StyledForm>
            <p>Don`t have an account? <Link to={'/registration'}>Signup</Link></p>
        </FormContainer>
    )
}

export default LogInForm