
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "store/operations";
import { getContacts } from "store/selectors";
import { AddContactButton, Input, InputLabel, StyledForm, StyledH2 } from "./AddContactForm.styled";

const AddContactForm = () => {
  const dispatch = useDispatch();


  const contactsList = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const { name: nameInput, phone: phoneInput } = event.target.elements


    const isExistName = contactsList?.some(
      contact =>
        contact.name &&
        typeof contact.name === 'string' &&
        contact.name.toLowerCase() === nameInput.value.toLowerCase()
    );
    const isExistPhone = contactsList?.some(
      contact =>
        contact.number &&
        typeof contact.number === 'string' &&
        contact.number === phoneInput.value
    );
    if (isExistName) {
      alert(`${nameInput.value} is already in contacts.`);
      return;
    }
    if (isExistPhone) {
      alert(`${phoneInput.value} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: nameInput.value, number: phoneInput.value }));

  };

  return (
    <>
      <StyledH2>
        Phonebook
      </StyledH2>
      <StyledForm
        onSubmit={handleSubmit}
      >
        <InputLabel

        >
          Name
          <Input type="text"
            name="name"
            placeholder="Name"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </InputLabel>
        <InputLabel

        >
          Number
          <Input type="tel"
            name="phone"
            placeholder="Phone"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </InputLabel>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </StyledForm>
    </>
  );
};

export default AddContactForm;