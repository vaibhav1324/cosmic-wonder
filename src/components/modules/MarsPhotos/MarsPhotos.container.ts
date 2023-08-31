import { getMarsPhotos } from 'api/mars';
import { useQuery } from 'react-query';

import { MarsPhotosProps } from './MarsPhotos.props';
import View from './MarsPhotos.view';

const Container: React.FC<MarsPhotosProps> = () => {
  const { data: photos, isLoading } = useQuery(
    'fetch-mars-photos',
    getMarsPhotos,
  );

  return View({ photos, isLoading });
};

export default Container;
