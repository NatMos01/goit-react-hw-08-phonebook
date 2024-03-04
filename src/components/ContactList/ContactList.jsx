import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "store/operations";

import { getContacts, getFilter } from "store/selectors";
import { StyledButton, StyledLi, StyledUl } from "./ContactList.styled";

const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const [filteredContacts, setFilteredContacts] = useState([]);


  useEffect(() => {
    if (filter) {
      const filtered = contacts.filter(contact =>

        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [filter, contacts]);


  const deleteContactById = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <>
      <StyledUl
      >
        {filteredContacts && filteredContacts.map(contact => (
          <StyledLi
            key={contact.id}

          >
            {contact.name} {contact.number}
            <StyledButton onClick={() => deleteContactById(contact.id)}>Delete</StyledButton>
          </StyledLi>
        ))}


      </StyledUl>
    </>
  );
};
export default ContactList;