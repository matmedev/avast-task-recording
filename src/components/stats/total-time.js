import {useInteractions} from '../../context/interactions-context';
import SingleStatsFrame from './single-stats-frame';
import {useMemo} from 'react';

const TotalTime = () => {
  const [interactions] = useInteractions();

  const total = useMemo(
    () =>
      interactions
        ? interactions[interactions?.length - 1].metadata.time -
          interactions[0].metadata.time
        : null,
    [interactions],
  );

  return (
    <SingleStatsFrame
      title="Total time of interactions"
      value={total && `${total} ms`}
    />
  );
};

export default TotalTime;
