import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/LeetCode/data.json');
        setData(response.data.codes);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    
  }, []);

  return { data, loading, error};
};

export default useFetch;
