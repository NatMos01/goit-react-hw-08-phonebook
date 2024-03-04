import AddContactForm from "components/AddContactForm/AddContactForm"
import ContactList from "components/ContactList/ContactList"

import ContactsSearch from "components/ContactsSearch/ContactsSearch"
import Loader from "components/Loader/Loader"

import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "store/operations"
import { getContacts, getError, getIsLoading, getToken } from "store/selectors"
import styled from "styled-components"


const ContactsPage = () => {
    const dispatch = useDispatch()
    const token = useSelector(getToken)
    useEffect(() => {
        dispatch(fetchContacts(token))
    }, [token, dispatch])

    const contacts = useSelector(getContacts)


    const isLoading = useSelector(getIsLoading)
    const isError = useSelector(getError)




    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            fontSize: 30,
            color: '#010101',
            paddingLeft: '25px',
        }}>Please log in to use the service 😘</div>
    }





    return (
        <StyledDiv>
            <AddContactForm />
            <ContactsSearch />
            {contacts && <ContactList />}
        </StyledDiv>
    )
}

export default ContactsPage

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;


`