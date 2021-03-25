import {useInteractions} from '../../context/interactions-context';
import SingleStatsFrame from './single-stats-frame';

const TotalTime = () => {
  const [interactions] = useInteractions();

  const total =
    interactions?.[interactions?.length - 1].metadata.time -
    interactions?.[0].metadata.time;

  return (
    <SingleStatsFrame
      title="Total time of interactions"
      value={total && `${total} ms`}
    />
  );
};

export default TotalTime;
