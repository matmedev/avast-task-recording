import {useInteractions} from '../../context/interactions-context';
import {saveInteractions} from '../../utils/files';

const SaveButton = () => {
  const [interactions] = useInteractions();

  const save = () => {
    saveInteractions(interactions);
  };

  return (
    <button type="button" onClick={save}>
      Save
    </button>
  );
};

export default SaveButton;
