import PropTypes from 'prop-types';
import {format} from 'date-fns';
import InteractionModel from '../../models/interaction';

const Interaction = ({interaction, onRemove}) => {
  return (
    <div className="container">
      <div className="text-wrapper">
        <div className="title">{interaction.metadata.name}</div>
        <div className="type">{interaction.metadata.type}</div>
      </div>
      <div>{format(interaction.metadata.time, 'dd/LL/yyyy HH:mm:ss')}</div>
      <i
        className={['material-icons', 'delete-btn'].join(' ')}
        role="button"
        aria-pressed="false"
        onClick={onRemove}>
        delete
      </i>

      <style jsx>{`
        .container {
          display: flex;
          background-color: #fff;
          border: 1px solid #000;
          border-radius: 8px;
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

        .delete-btn {
          cursor: pointer;
          user-select: none;
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
};

Interaction.propTypes = {
  interaction: PropTypes.instanceOf(InteractionModel).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Interaction;
