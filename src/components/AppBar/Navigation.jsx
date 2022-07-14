import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { StyledLink } from './AppBar.styled';
export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">My contacts</StyledLink>}
    </div>
  );
}
