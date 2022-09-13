import { API } from "../api/API";
import { useEffect, useState } from 'react';
export const useFetch = (endpoint) => {
  const [data, setData] = useState([])
  const [loading, setLoading,] = useState(true)
  const [error, setError] = useState(false)
  const getData = async (endpoint) => {
    try {
      const { data } = await API.get(endpoint);
      setData(data);
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);

  return [data, loading, error]
}