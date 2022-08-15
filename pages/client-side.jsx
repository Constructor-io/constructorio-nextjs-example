import { useEffect, useState } from 'react';
import useCioClient from '../hooks/useCioClient'

export default function ClientSide() {
  const [results, setResults] = useState([]);
  const cioClient = useCioClient();

  useEffect(() => {
    const fetchResultsFromAPI = async () => {
      const data = await cioClient.search.getSearchResults('shoes');

      setResults(data?.response?.results);
    };

    if (cioClient?.search) fetchResultsFromAPI();
  }, [cioClient?.search]);

  return (
    <div>
      <p>{ results?.[0]?.value }</p>
    </div>
  )
}

