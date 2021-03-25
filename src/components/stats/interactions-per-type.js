import {useInteractions} from '../../context/interactions-context';
import StatsFrame from './stats-frame';

const InteractionsPerType = () => {
  const [interactions] = useInteractions();

  const values = interactions?.reduce((acc, {metadata: {type}}) => {
    return {
      ...acc,
      [type]: (acc[type] ?? 0) + 1,
    };
  }, {});

  return (
    <>
      <StatsFrame title="Interactions Per Type">
        <div className="container">
          {values &&
            Object.entries(values).map(([key, value]) => (
              <>
                <div key={`key-${key}`} className="entry-key">
                  {key}
                </div>
                <div key={`val-${key}`} className="entry-value">
                  {value}
                </div>
              </>
            ))}
        </div>
      </StatsFrame>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(2, auto);
          row-gap: 0.3rem;
        }

        .entry-key {
          font-weight: bold;
        }

        .entry-value {
          text-align: right;
        }
      `}</style>
    </>
  );
};

export default InteractionsPerType;
