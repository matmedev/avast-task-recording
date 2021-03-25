import {useInteractions} from '../../context/interactions-context';
import ListStatsFrame from './list-stats-frame';

const TimeBetweenInteractions = () => {
  const [interactions] = useInteractions();

  const times = interactions?.map(({metadata: {time}}, index, arr) => {
    if (arr[index + 1]) {
      return arr[index + 1].metadata.time - time;
    }
  });
  times?.splice(times.length - 1, 1);

  const timesObj = times
    ? {
        min: Math.min(...times) + ' ms',
        max: Math.max(...times) + ' ms',
        mean:
          (times.reduce((acc, t) => acc + t, 0) / times.length).toFixed(4) +
          ' ms',
      }
    : null;

  return (
    <ListStatsFrame values={timesObj} title="Times between interactions" />
  );
};

export default TimeBetweenInteractions;
