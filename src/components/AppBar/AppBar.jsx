import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { Wrapper } from './AppBar.styled';

export function AppBar() {
  return (
    <Wrapper>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </Wrapper>
  );
}
