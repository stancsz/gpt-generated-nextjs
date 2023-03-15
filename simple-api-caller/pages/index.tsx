import { useState } from 'react';
import { fetchApiData } from './api';

const IndexPage = () => {
  const [input, setInput] = useState('');
  const [apiData, setApiData] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await fetchApiData(input);
    setApiData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {apiData && (
        <div>
          <h2>API response:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
