import {useInteractions} from '../../context/interactions-context';
import Interaction from './interaction';
import {useState} from 'react';

const InteractionList = () => {
  const [draggedInteractionId, setDraggedInteractionId] = useState(null);

  const [interactions, setInteractions] = useInteractions();

  const removeInteraction = (interaction) => {
    setInteractions(interactions.filter((i) => i !== interaction));
  };

  const drag = (e) => {
    setDraggedInteractionId(e.currentTarget.id);
  };

  const drop = (e) => {
    const dragIndex = interactions.findIndex(
      (i) => i.metadata.id === draggedInteractionId,
    );
    const dropIndex = interactions.findIndex(
      (i) => i.metadata.id === e.currentTarget.id,
    );

    const draggedInteraction = interactions[dragIndex];

    const newInteractions = [...interactions];
    newInteractions.splice(dragIndex, 1);
    newInteractions.splice(dropIndex, 0, draggedInteraction);
    setInteractions(newInteractions);
  };

  return (
    <div className="interactions-container">
      {interactions ? (
        interactions.map((interaction) => (
          <div
            className="interaction-item"
            key={interaction.metadata.id}
            id={interaction.metadata.id}
            onDragOver={(e) => e.preventDefault()}
            onDragStart={drag}
            onDrop={drop}
            draggable>
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
          cursor: move;
        }
      `}</style>
    </div>
  );
};

export default InteractionList;
