import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import useInteractionsApi from '../api/use-interactions';

const InteractionsContext = createContext();

export const useInteractions = () => {
  const context = useContext(InteractionsContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
};

export const InteractionsProvider = (props) => {
  const [interactions, setInteractions] = useState(null);
  const fetchedInteractions = useInteractionsApi();

  useEffect(() => {
    if (!interactions) {
      setInteractions(fetchedInteractions);
    }
  }, [fetchedInteractions]);

  const value = useMemo(() => [interactions, setInteractions], [interactions]);

  return <InteractionsContext.Provider value={value} {...props} />;
};
