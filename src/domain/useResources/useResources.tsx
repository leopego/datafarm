import {useEffect, useState} from 'react';
import {api} from '../api';

import {useResourceStore} from '../../store/resourceStore';
import {useUserStore} from '../../store/userStore';

export const useResources = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<unknown>(null);

  const data = useResourceStore(state => state.resources);
  const updateResources = useResourceStore(state => state.updateResources);

  const tokenAuthorization = useUserStore(state => state.tokenAuthorization);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('mobile/machine/resources', {
          headers: {
            'Content-Type': 'application/json',
            TokenAuthorization: tokenAuthorization,
          },
        });

        updateResources(response.data.data.resources);
      } catch (error) {
        setIsError(error);
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [updateResources, tokenAuthorization]);

  return {
    isLoading,
    isError,
    data,
  };
};
