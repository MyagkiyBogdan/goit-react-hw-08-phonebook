import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import authOperations from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import authSelectors from 'redux/auth/authSelectors';

const HomeView = lazy(() => import('./views/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const PublicRoute = lazy(() => import('./routes/PublicRoute'));
const PrivateRoute = lazy(() => import('./routes/PrivateRoute'));

export function App() {
  const dispatch = useDispatch();

  // const isFetchingCurrentUser = useSelector(
  //   state => state.auth.isFetchingCurrentUser
  // );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser(), [dispatch]);
    // console.log('isFetchingCurrentUser', isFetchingCurrentUser);
  });

  // return isFetchingCurrentUser ? null : (
  <Suspense fallback={<div>Loading...</div>}>
    <AppBar />
    <Routes>
      <Route path="/" exact element={<HomeView />} />
      <Route element={<PublicRoute closed redirectTo="contacts" />}>
        <Route path="/login" element={<LoginView />} />
      </Route>
      <Route element={<PublicRoute closed redirectTo="contacts" />}>
        <Route path="/register" element={<RegisterView />} />
      </Route>
      <Route element={<PrivateRoute redirectTo="login" />}>
        <Route path="contacts" element={<ContactsView />} />
      </Route>
    </Routes>
  </Suspense>;
  // );
}

// формы - formik и yup
// добавить тосты нотификации авторизации
// Сделать компонент loading для suspense

//  <Suspense fallback={<div>Loading...</div>}>
//         <AppBar />
//         <Routes>
//           <Route path="/" exact element={<HomeView />} />
//           <Route element={<PublicRoute closed redirectTo="contacts" />}>
//             <Route path="/login" element={<LoginView />} />
//           </Route>
//           <Route element={<PublicRoute closed redirectTo="contacts" />}>
//             <Route path="/register" element={<RegisterView />} />
//           </Route>
//           <Route element={<PrivateRoute redirectTo="login" />}>
//             <Route path="contacts" element={<ContactsView />} />
//           </Route>
//         </Routes>
//       </Suspense>
