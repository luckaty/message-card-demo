import React from 'react';
import MessageCard from './MessageCard';

function App() {
  return (
    <div>
      <MessageCard name="Blessed" message="Welcome to Day 4 of my React Journey!" />
      <MessageCard name="Visitor" message="Thanks for checking out my blog 😄" />
    </div>
  );
}

export default App;
