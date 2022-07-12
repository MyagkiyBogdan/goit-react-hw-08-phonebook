import { ContactsView } from './views/ContactsView';
import { HomeView } from './views/HomeView';
import { LoginView } from './views/LoginView';
import { RegisterView } from './views/RegisterView';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import authOperations from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser(), [dispatch]);
  });

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

// формы - formik и yup
// добавить тосты нотификации авторизации
