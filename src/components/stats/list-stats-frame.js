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
                <div className="entry entry-key" title={key} key={`key-${key}`}>
                  {key}
                </div>
                <div className="entry entry-value" key={`val-${key}`}>
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
          gap: 0.3rem;
        }

        .entry {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
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
