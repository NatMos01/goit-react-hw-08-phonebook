import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "store/filter/contactsFilterSlice";
import { getFilter } from "store/selectors";
import { Input, InputLabel, StyledH2 } from "./ContactSearch.styled";

const ContactsSearch = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)


  const handleChange = (e) => {
    const { value } = e.target

    dispatch(setFilter(value))
  }

  return (
    <div>
      <StyledH2
      >
        Contacts
      </StyledH2>
      <InputLabel
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '15px',
          gap: '5px',
        }}
      >
        Find contact by name
        <Input
          name="filter"
          value={filter}
          onChange={handleChange}
          placeholder="Name"
          style={{ maxWidth: '200px' }}
        ></Input>
      </InputLabel>
    </div>
  );
};

export default ContactsSearch;