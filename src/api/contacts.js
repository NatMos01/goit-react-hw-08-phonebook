import axios from "axios"


export const fetchAllContacts = async () => {
    const response = await axios.get('contacts')
    return response.data
}
export const addSingleContact = async ({ name, number }) => {
    const response = await axios.post('contacts', { name, number });
    return response.data;
}
export const deleteSingleContact = async (contactId) => {
    const response = await axios.delete(`contacts/${contactId}`);
    return response.data;

}