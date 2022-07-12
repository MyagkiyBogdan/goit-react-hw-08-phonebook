import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import defaultAvatart from 'img/placeholder.jpeg';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleLogout = () => dispatch(authOperations.logout());

  return (
    <div>
      <img src={defaultAvatart} alt="defaultAvatar" width="32" />
      <span>Welcome, {name}!</span>
      <button type="button" onClick={handleLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
