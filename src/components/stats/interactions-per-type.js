import {useInteractions} from '../../context/interactions-context';
import ListStatsFrame from './list-stats-frame';

const InteractionsPerType = () => {
  const [interactions] = useInteractions();

  const values = interactions?.reduce((acc, {metadata: {type}}) => {
    return {
      ...acc,
      [type]: (acc[type] ?? 0) + 1,
    };
  }, {});

  return <ListStatsFrame values={values} title="Interactions Per Type" />;
};

export default InteractionsPerType;
