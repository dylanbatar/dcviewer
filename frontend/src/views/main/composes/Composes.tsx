import { useEffect, useState } from 'react';
import { ComposeFileList } from './components/ComposeFileList';
import { ICompose } from '../../../interfaces/compose';
import { ComposeDetail } from './components/ComposeDetail';
import { useComposeStore } from '../../../store/compose.store';
import { ListComposes } from '../../../../wailsjs/go/main/App';

export const Composes = () => {
  const [collections, setCollections] = useState<ICompose[]>([]);
  const compose = useComposeStore((state) => state.compose);

  const fetchComposes = async () => {
    const composes = (await ListComposes()) as ICompose[];
    setCollections(composes);
  };

  useEffect(() => {
    fetchComposes();
  }, []);

  return (
    <div className='relative'>
      <h1 className='text-2xl font-medium'>My Compose</h1>
      {compose && <ComposeDetail compose={compose} />}
      <ComposeFileList composes={collections} />
    </div>
  );
};
