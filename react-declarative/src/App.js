import React, { useState } from 'react';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Content />
    </div>
  );
};

const Content = () => {
  const [scene, setScene] = useState('button');

  if (scene === 'button') {
    return (
      <button
        className="bd-blue-500 px-4 py-3 rounded border-0"
        onClick={() => setScene('question')}
      >
        Show the unicorn
      </button>
    );
  }

  if (scene === 'question') {
    return (
      <button
        className="bd-pink-500 px-4 py-3 rounded border-0"
        onClick={() => setScene('unicorn')}
      >
        Are you sure?
      </button>
    );
  }

  if (scene === 'unicorn') {
    return <span class="fs-1">🦄</span>;
  }
};

export default App;
