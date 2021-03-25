import {useInteractions} from '../../context/interactions-context';
import SingleStatsFrame from './single-stats-frame';

const InputSequence = () => {
  const [interactions] = useInteractions();

  const groups = interactions
    ?.filter((i) => i.metadata.type !== 'focus')
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

  const value = groups ? Math.max(...groups) : null;

  return (
    <SingleStatsFrame
      title="Longest sequence of input events"
      value={value && value + ''}
    />
  );
};

export default InputSequence;
