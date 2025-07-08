import React from 'react';

function MessageCard({ name, message }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px auto',
      width: '300px',
      textAlign: 'center'
    }}>
      <h3>Hello, {name}!</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
