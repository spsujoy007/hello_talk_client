import axios from 'axios';
import { useEffect, useState } from 'react';

const useTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/teachers`)
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [teachers, loading];
};

export default useTeachers;
