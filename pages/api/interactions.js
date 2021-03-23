import data from '../../assets/task.recording.json';

export default function handler(req, res) {
  res.status(200).json(data);
}
