import StatsFrame from './stats-frame';
import {useInteractions} from '../../context/interactions-context';

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

  const value = Math.max(...(groups ?? []));

  return (
    <>
      <StatsFrame title="Longest sequence of input events">
        <div className="container">
          <div className="value">{value}</div>
        </div>
      </StatsFrame>
      <style jsx>{`
        .container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .value {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default InputSequence;
