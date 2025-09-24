import React, { useEffect, useState } from 'react';

function App() {
  const [queue, setQueue] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/queue-status')
      .then((res) => res.json())
      .then(setQueue);
  }, []);

  return (
    <div>
      <h1>Temple Management Dashboard</h1>
      {queue && (
        <div>
          <p>Queue Length: {queue.queueLength}</p>
          <p>Estimated Wait Time: {queue.waitTime}</p>
        </div>
      )}
    </div>
  );
}

export default App;