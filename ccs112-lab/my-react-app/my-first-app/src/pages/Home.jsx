function Home() {
  return (
    <section className="page">
      <div className="hero">
        <h1>Welcome to My React App</h1>

        <p>
          This website demonstrates React Router navigation,
          reusable components, and React state management.
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <h2>React Router</h2>
          <p>
            Navigate between different pages without reloading
            the entire website.
          </p>
        </div>

        <div className="card">
          <h2>React State</h2>
          <p>
            Manage interactive elements using React's useState hook.
          </p>
        </div>

        <div className="card">
          <h2>Components</h2>
          <p>
            Build reusable Navbar, Sidebar, Footer, and page components.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;