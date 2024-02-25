import { ICompose } from '../../../../interfaces/compose';

export const ComposeFile = ({ name }: ICompose) => {

  const openComposeDetail = () => {
    console.log(`open compose detail ${name}`);
  };

  return (
    <div
      className='mx-4 my-8 flex flex-col justify-center items-center cursor-pointer'
      onClick={openComposeDetail}
    >
      <svg
        className='w-28 h-28 text-gray-800  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          fillRule='evenodd'
          d='M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16c0-.6.4-1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z'
          clipRule='evenodd'
        />
      </svg>
      <p className='text-sm truncate hover:overflow-visible hover:whitespace-normal text-center w-32'>
        {name}
      </p>
    </div>
  );
};
