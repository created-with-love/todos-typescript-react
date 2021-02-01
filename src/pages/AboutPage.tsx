import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Page with information</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi impedit
        nam culpa fuga cupiditate repellat perferendis nesciunt reprehenderit
        recusandae nisi?
      </p>

      <button className="btn" onClick={() => history.push('/')}>
        Go back
      </button>
    </>
  );
};
