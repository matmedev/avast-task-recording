import {useInteractions} from '../../context/interactions-context';
import StatsFrame from './stats-frame';

const TimeBetweenInteractions = () => {
  const [interactions] = useInteractions();

  const times = interactions?.map(({metadata: {time}}, index, arr) => {
    if (arr[index + 1]) {
      return arr[index + 1].metadata.time - time;
    }
  });
  times?.splice(times.length - 1, 1);

  const min = Math.min(...(times ?? []));
  const max = Math.max(...(times ?? []));
  const mean = times?.reduce((acc, t) => acc + t, 0) / times?.length;

  return (
    <>
      <StatsFrame title="Times between interactions">
        <div className="container">
          <div className="entry-key">MIN</div>
          <div className="entry-value">{min} ms</div>
          <div className="entry-key">MAX</div>
          <div className="entry-value">{max} ms</div>
          <div className="entry-key">MEAN</div>
          <div className="entry-value">{mean.toFixed(4)} ms</div>
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

export default TimeBetweenInteractions;
