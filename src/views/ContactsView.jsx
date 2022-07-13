import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import EmptyMessage from 'components/EmptyMessage';
import Filter from 'components/Filter';
import Spiner from 'components/Spiner';

import { useGetContactsQuery } from 'redux/contactsApi';

export default function ContactsView() {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <div className="wrapper">
      <div className="header-section">
        <h1>Phonebook</h1>
      </div>
      <div className="main-section">
        <h2 className="section-title">Add new contact</h2>
        <ContactForm />
        <div className="contacts-secton">
          <h2 className="page-title">Your contacts</h2>
          {isLoading && <Spiner width={50} height={50} color="blue" />}
          {data && data.length > 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            !isLoading && <EmptyMessage />
          )}
        </div>
      </div>
    </div>
  );
}
