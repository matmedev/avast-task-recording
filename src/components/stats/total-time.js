import {useInteractions} from '../../context/interactions-context';
import StatsFrame from './stats-frame';

const TotalTime = () => {
  const [interactions] = useInteractions();

  const total =
    interactions?.[interactions?.length - 1].metadata.time -
    interactions?.[0].metadata.time;

  return (
    <>
      <StatsFrame title="Total time of interactions">
        <div className="container">
          <div className="value">{total} ms</div>
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

export default TotalTime;
