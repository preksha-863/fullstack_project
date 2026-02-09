import { useState, useEffect } from 'react'

function App(){
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("https://fullstack-project-2-ci9l.onrender.com/api/facts")
      .then(res => res.json())
      .then(data => setFacts(data));
  }, []);

  return (
<div>
      <h1>Facts List</h1>
      <ul>
        {facts.map(f => (
          <li key={f.id}>{f.fact}</li>
        ))}
      </ul>
    </div>
  );
}
export default App