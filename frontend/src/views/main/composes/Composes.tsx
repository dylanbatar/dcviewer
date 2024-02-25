import { useEffect, useState } from 'react';
import { AddCompose } from './components/AddCompose';
import { ComposeFileList } from './components/ComposeFileList';
import { ICompose } from '../../../interfaces/compose';

export const Composes = () => {
  const [collections, setCollections] = useState<ICompose[]>([]);

  useEffect(() => {
    setCollections([
      {
        name: 'Mysql + Redis',
        createAt: Date(),
        updateAt: Date(),
      },
    ]);
  }, []);

  return (
    <>
      <h1 className='text-2xl font-medium'>My Compose</h1>
      <ComposeFileList composes={collections} />
    </>
  );
};
