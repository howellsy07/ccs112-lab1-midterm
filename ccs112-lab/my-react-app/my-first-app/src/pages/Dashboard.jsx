import { useState } from "react";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <section className="page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>React State Demonstration</p>
      </div>

      <div className="card counter-card">
        <h2>Counter</h2>

        <p className="counter">
          {count}
        </p>

        <div className="counter-buttons">
          <button onClick={() => setCount(count - 1)}>
            −
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>

          <button onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;