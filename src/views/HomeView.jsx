import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const username = useSelector(authSelectors.getUsername);
  return (
    <div className="wrapper">
      <div className="header-section">
        <h1>Phonebook</h1>
      </div>
      <div className="main-section">
        {isLoggedIn ? (
          <>
            <h1>Hello {username}</h1>
            <p>I hope you enjoy using the app!</p>
            <p>
              Any questions or offers? You can contact me on{' '}
              <a
                href="https://www.linkedin.com/in/bogdan-myagkiy/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </>
        ) : (
          <>
            <h2 className="section-title">
              Hello! To start using this App please:
            </h2>
            <Link to="/login">Login</Link>
            <span>or</span>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
