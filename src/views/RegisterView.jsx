export function RegisterView() {
  return (
    <div className="wrapper">
      <div className="header-section">
        <h1>Phonebook</h1>
      </div>
      <div className="main-section">
        <h2 className="section-title">Register:</h2>
        <form>
          <label htmlFor="text">Name</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
