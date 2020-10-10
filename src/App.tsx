import React from 'react';

export const App: React.FC = () => {
  return (
    <div>
      <p>Hello, world.</p>
      <p>env: {process.env.APP_ENV}</p>
    </div>
  );
};
