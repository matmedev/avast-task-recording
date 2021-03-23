import PropTypes from 'prop-types';
import {format} from 'date-fns';

const Interaction = ({interaction}) => {
  return (
    <div className="container">
      <div className="text-wrapper">
        <div className="title">{interaction.name}</div>
        <div className="type">{interaction.type}</div>
      </div>
      <div>{format(interaction.time, 'dd/LL/yyyy HH:mm:ss')}</div>

      <style jsx>{`
        .container {
          border: 1px solid #000;
          border-radius: 8px;
          display: flex;
          padding: 1rem;
          align-items: center;
        }

        .text-wrapper {
          flex: 1;
        }

        .title {
          font-size: 22px;
          font-weight: bold;
        }

        .type {
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

Interaction.propTypes = {
  // TODO instance of Interaction model
  interaction: PropTypes.object.isRequired,
};

export default Interaction;
