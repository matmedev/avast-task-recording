import PropTypes from 'prop-types';

const StatsFrame = ({title, children}) => {
  return (
    <div className="container">
      <div className="title">{title}</div>
      <div className="data-container">{children}</div>

      <style jsx>{`
        .container {
          border: 1px solid #000;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }

        .title {
          line-height: 1.15;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .data-container {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

StatsFrame.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default StatsFrame;
