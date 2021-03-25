import {useInteractions} from '../../context/interactions-context';
import ListStatsFrame from './list-stats-frame';
import {max, min} from '../../utils/math';
import {useMemo} from 'react';

const TimeBetweenInteractions = () => {
  const [interactions] = useInteractions();

  const timesObj = useMemo(() => {
    if (interactions) {
      const times = interactions.map(({metadata: {time}}, index, arr) => {
        if (arr[index + 1]) {
          return arr[index + 1].metadata.time - time;
        }
      });
      times.splice(times.length - 1, 1);

      return {
        // min: Math.min(...times) + ' ms', // Not applicable for array with huge number of items
        min: min(times) + ' ms',
        // max: Math.max(...times) + ' ms', // Not applicable for array with huge number of items
        max: max(times) + ' ms',
        mean:
          (times.reduce((acc, t) => acc + t, 0) / times.length).toFixed(4) +
          ' ms',
      };
    } else {
      return null;
    }
  }, [interactions]);

  return (
    <ListStatsFrame values={timesObj} title="Times between interactions" />
  );
};

export default TimeBetweenInteractions;
