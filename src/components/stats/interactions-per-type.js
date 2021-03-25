import {useInteractions} from '../../context/interactions-context';
import ListStatsFrame from './list-stats-frame';
import {useMemo} from 'react';

const InteractionsPerType = () => {
  const [interactions] = useInteractions();

  const values = useMemo(
    () =>
      interactions?.reduce((acc, {metadata: {type}}) => {
        return {
          ...acc,
          [type]: (acc[type] ?? 0) + 1,
        };
      }, {}),
    [interactions],
  );

  return <ListStatsFrame values={values} title="Interactions Per Type" />;
};

export default InteractionsPerType;
