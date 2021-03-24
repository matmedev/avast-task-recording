import {saveAs} from 'file-saver';

export const saveInteractions = (interactions) => {
  const content = JSON.stringify(
    interactions.map((interaction) => ({...interaction, _metadata: undefined})),
  );
  const blob = new Blob([content], {
    type: 'text/json;charset=utf-8',
  });
  saveAs(blob, 'interactions.json');
};
