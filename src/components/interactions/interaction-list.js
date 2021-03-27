import {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useInteractions} from '../../context/interactions-context';
import Interaction from './interaction';
import {ascending, descending} from '../../utils/sort';

const InteractionList = ({ordering}) => {
  const [interactions, setInteractions] = useInteractions();

  const orderedInteractions = useMemo(() => {
    if (interactions) {
      const ordered = [...interactions];
      if (ordering === 'asc') {
        ordered.sort(ascending);
      } else {
        ordered.sort(descending);
      }
      return ordered;
    } else {
      return null;
    }
  }, [interactions, ordering]);

  const removeInteraction = (interaction) => {
    if (window.confirm('Do you really want to remove this interaction?')) {
      setInteractions(interactions.filter((i) => i !== interaction));
    }
  };

  return (
    <div className="interactions-container">
      {orderedInteractions ? (
        orderedInteractions.map((interaction) => (
          <div className="interaction-item" key={interaction.metadata.id}>
            <Interaction
              interaction={interaction}
              onRemove={() => removeInteraction(interaction)}
            />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}

      <style jsx>{`
        .interactions-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .interaction-item {
          width: 100%;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

InteractionList.propTypes = {
  ordering: PropTypes.string.isRequired,
};

export default InteractionList;
