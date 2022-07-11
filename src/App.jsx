import { ContactsView } from './views/ContactsView';
import { HomeView } from './views/HomeView';
import { LoginView } from './views/LoginView';
import { RegisterView } from './views/RegisterView';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

export function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </>
  );
}
