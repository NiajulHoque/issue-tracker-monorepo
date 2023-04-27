import { useEffect, useState } from 'react';

import axios from 'axios';
import { z } from 'zod';

const apiStatusSchema = z.enum(['online', 'offline']);
type ApiStatus = z.infer<typeof apiStatusSchema>;

const ApiStatusAlert = () => {
  const [status, setStatus] = useState<ApiStatus>('offline');

  useEffect(() => {
    const fetchApiStatus = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/status`);
      setStatus(response.data.status);
    };

    fetchApiStatus();
  }, []);

  return (
    <div className='alert rounded-md bg-gray-800 shadow-lg'>
      <h1
        className={`block w-full text-center text-lg ${
          status === 'online' ? 'text-green-500' : 'text-red-500'
        }`}>
        Status: {status}
      </h1>
    </div>
  );
};

export default ApiStatusAlert;
