import {useInteractions} from '../../context/interactions-context';
import ListStatsFrame from './list-stats-frame';
import {useMemo} from 'react';

const InteractionsPerTargets = () => {
  const [interactions] = useInteractions();

  const values = useMemo(() => {
    if (interactions) {
      return interactions.reduce((acc, {metadata: {name}}) => {
        return {
          ...acc,
          [name]: (acc[name] ?? 0) + 1,
        };
      }, {});
    } else {
      return null;
    }
  }, [interactions]);

  return <ListStatsFrame title="Interactions per targets" values={values} />;
};

export default InteractionsPerTargets;
