import {useEffect, useState} from 'react';
import {api} from '../api';

import {useResourceStore} from '../../store/resourceStore';

export const useResources = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<unknown>(null);

  const data = useResourceStore(state => state.resources);
  const updateResources = useResourceStore(state => state.updateResources);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('mobile/machine/resources');

        updateResources(response.data.data.resources);
      } catch (error) {
        setIsError(error);
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [updateResources]);

  return {
    isLoading,
    isError,
    data,
  };
};
