import { Container } from './App.styled';
import ContactForm from '../contactForm/contactForm';
import ContactsList from '../contactsList/contactsList';
import Filter from '../filter/filter';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;
