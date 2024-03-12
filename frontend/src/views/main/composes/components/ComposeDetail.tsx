import { ICompose } from '../../../../interfaces/compose';
import { useComposeStore } from '../../../../store/compose.store';

export const ComposeDetail: React.FC<{ compose: ICompose }> = ({ compose }) => {
  const closeComposeDetail = useComposeStore((state) => state.clearCompose);

  return (
    <>
      <div
        id='drawer-navigation'
        className='fixed top-0 right-[-320px] z-40 w-80 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800'
        tabIndex={0}
        aria-labelledby='drawer-navigation-label'
      >
        <h5
          id='drawer-navigation-label'
          className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'
        >
          {compose.name}
        </h5>
        <button
          onClick={closeComposeDetail}
          type='button'
          data-drawer-hide='drawer-navigation'
          aria-controls='drawer-navigation'
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <div className='py-4'>
          <div className='mx-4 my-8'>
            <svg
              className='w-28 h-28 text-gray-800 transition duration-75 dark:text-gray-400'
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
            <div>
              <h5
                className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'
              >
                Information
              </h5>
              <ul>
                <li className='flex items-center'>
                  <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>Name</p>
                  <p className='text-sm truncate text-center text-gray-500 dark:text-gray-400'>
                    {compose.name}
                  </p>
                </li>
                <li className='flex'>
                  <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>Create At</p>
                  <p className='text-sm truncate text-center text-gray-500 dark:text-gray-400'>
                    {compose.createAt}
                  </p>
                </li>
                <li className='flex'>
                  <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>Update At</p>
                  <p className='text-sm truncate text-center text-gray-500 dark:text-gray-400'>
                    {compose.updateAt}
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h5
                className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'
              >
                Content file
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
