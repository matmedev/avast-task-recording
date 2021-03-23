import {useInteractions} from '../context/interactions-context';
import Interaction from './interaction';

const InteractionList = () => {
  const [interactions, setInteractions] = useInteractions();

  const removeInteraction = (interaction) => {
    setInteractions(interactions.filter((i) => i !== interaction));
  };

  return (
    <div className="interactions-container">
      {interactions ? (
        interactions.map((interaction) => (
          <div className="interaction-item" key={interaction.time}>
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
          margin-top: 2rem;
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

export default InteractionList;
