import { ICompose } from '../../../../interfaces/compose';
import { AddCompose } from './AddCompose';
import { ComposeFile } from './ComposeFile';

export const ComposeFileList: React.FC<{ composes: ICompose[] }> = ({
  composes,
}) => {
  return (
    <>
      {!composes.length && (
        <div className='flex justify-center items-center h-full'>
          <AddCompose />
        </div>
      )}

      <div className='flex'>
        {composes.map((file, index) => (
          <>
            <div key={index}>
              <ComposeFile {...file} />
            </div>
          </>
        ))}
        <AddCompose />
      </div>
    </>
  );
};
