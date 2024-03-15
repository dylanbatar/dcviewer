import { ICompose } from '../../../../interfaces/compose';
import { AddCompose } from './AddCompose';
import { ComposeFile } from './ComposeFile';

export const ComposeFileList: React.FC<{ composes: ICompose[] }> = ({
  composes,
}) => {
  return (
    <>
      {!composes.length && (
        <div className='flex justify-center items-center h-[90%]'>
          <AddCompose />
        </div>
      )}

      {composes.length > 0 && (
        <div className='flex flex-wrap'>
          {composes.map((file, index) => (
            <div key={index}>
              <ComposeFile {...file} />
            </div>
          ))}
          <AddCompose />
        </div>
      )}
    </>
  );
};
