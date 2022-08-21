import { useSelector } from 'react-redux';

import { List } from './contactList.styled';
import { Item } from './contactList.styled';
import { ButtonDelete } from './contactList.styled';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsApiSlice/contactsSlice';

const ContactsList = () => {
  const { data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(state => state.filter.value);

  const normalizeFilter = filter.trim().toLowerCase();
  const visibleContacts =
    data &&
    data.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

  const handleDeleteContact = e => {
    deleteContact(e.target.id);
  };

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(({ name, id, phoneNumber }) => {
          return (
            <Item key={id}>
              {name}: {phoneNumber}
              <ButtonDelete type="button" id={id} onClick={handleDeleteContact}>
                Delete
              </ButtonDelete>
            </Item>
          );
        })}
    </List>
  );
};

export default ContactsList;
