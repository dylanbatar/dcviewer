import { useEffect, useState } from 'react';
import { ComposeFileList } from './components/ComposeFileList';
import { ComposeDetail } from './components/ComposeDetail';
import { useComposeStore } from '../../../store/compose.store';
import { ListComposes } from '../../../../wailsjs/go/main/App';
import { ICompose } from '../../../interfaces/compose';

export const Composes = () => {
  const { setCollection, collection, compose } = useComposeStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComposes = () => {
    setLoading(true);
    ListComposes()
      .then((composes: ICompose[]) => setCollection(composes))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchComposes();
  }, []);

  return (
    <>
      <div className='relative h-full'>
        <h1 className='text-2xl font-medium'>My Compose</h1>
        {compose && <ComposeDetail compose={compose} />}

        {loading ? (
          <p>Finding your compose files...</p>
        ) : (
          <ComposeFileList composes={collection} />
        )}

        {error && <p> Error {error}</p>}
      </div>
    </>
  );
};
