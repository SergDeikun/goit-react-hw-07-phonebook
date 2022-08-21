import { useState } from 'react';
import { Input } from './contactForm.styled';
import { ButtonSubmit } from './contactForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsApiSlice/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhoneNumber(value.toLowerCase());
        break;

      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }

    await addContact({ name, phoneNumber });
    reset();
  };

  const reset = () => {
    setName('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phoneNumber}
          onChange={handleChange}
        />
      </label>

      <ButtonSubmit type="submit">add contact</ButtonSubmit>
    </form>
  );
};

export default ContactForm;
