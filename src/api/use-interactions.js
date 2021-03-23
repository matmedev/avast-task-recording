import useSWR from 'swr';
import fetcher from '../fetcher';
import Interaction from '../models/interaction';

const useInteractions = () => {
  const {data} = useSWR('/api/interactions', fetcher);

  return data?.records.map(Interaction.fromResponse);
};

export default useInteractions;
