import data from '../../assets/task.recording.json';

const handler = (req, res) => {
  res.status(200).json(data);
};

export default handler;
