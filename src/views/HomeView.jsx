import { Link } from 'react-router-dom';

export function HomeView() {
  return (
    <div className="wrapper">
      <div className="header-section">
        <h1>Phonebook</h1>
      </div>
      <div className="main-section">
        <h2 className="section-title">
          Hello! To start using this App please:
        </h2>
        <Link to="/login">Login</Link>
        <span>or</span>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
