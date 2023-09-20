import React from 'react';

const Contact = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ background: 'blue', color: 'white', padding: '10px' }}>
      {label}
    </button>
  );
};

export default Contact;