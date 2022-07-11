import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contacts">My contacts</Link>
    </div>
  );
}
