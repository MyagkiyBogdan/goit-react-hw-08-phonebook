export function LoginView() {
  return (
    <div className="wrapper">
      <div className="header-section">
        <h1>Phonebook</h1>
      </div>
      <div className="main-section">
        <h2 className="section-title">Login:</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
