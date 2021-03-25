import PropTypes from 'prop-types';
import StatsFrame from './stats-frame';

const ListStatsFrame = ({title, values}) => {
  return (
    <>
      <StatsFrame title={title}>
        {values ? (
          <div className="container">
            {Object.entries(values).map(([key, value]) => (
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
        ) : (
          <div className="loading">loading...</div>
        )}
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

        .loading {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-style: italic;
        }
      `}</style>
    </>
  );
};

ListStatsFrame.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.object,
};

export default ListStatsFrame;
