
import { useState, useEffect } from 'react';

function useLoading(initialDelay = 1000) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, initialDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [initialDelay]);

  return loading;
}

export default useLoading;
