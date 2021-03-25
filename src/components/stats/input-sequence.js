import {useInteractions} from '../../context/interactions-context';
import SingleStatsFrame from './single-stats-frame';
import {useMemo} from 'react';
import {max} from '../../utils/math';

const InputSequence = () => {
  const [interactions] = useInteractions();

  const value = useMemo(() => {
    if (interactions) {
      const groups = interactions
        .filter((i) => i.metadata.type !== 'focus')
        .reduce(
          (acc, i) => {
            if (i.metadata.type === 'input') {
              const newAcc = [...acc];
              newAcc[newAcc.length - 1]++;
              return newAcc;
            } else if (acc[acc.length - 1] !== 0) {
              return [...acc, 0];
            } else {
              return acc;
            }
          },
          [0],
        );

      return max(groups);
    } else {
      return null;
    }
  }, [interactions]);

  return (
    <SingleStatsFrame
      title="Longest sequence of input events"
      value={value && value + ''}
    />
  );
};

export default InputSequence;
