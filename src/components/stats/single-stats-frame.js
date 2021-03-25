import PropTypes from 'prop-types';
import StatsFrame from './stats-frame';

const SingleStatsFrame = ({title, value}) => {
  return (
    <>
      <StatsFrame title={title}>
        {value ? (
          <div className="container">
            <div className="value">{value}</div>
          </div>
        ) : (
          <div className="loading">loading...</div>
        )}
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

SingleStatsFrame.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default SingleStatsFrame;
