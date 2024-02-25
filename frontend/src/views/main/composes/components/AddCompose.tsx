export const AddCompose = () => {
  return (
    <div>
      <button className="flex flex-col justify-center items-center my-8">
        <div>
          <svg
            className='w-28 h-28 text-gray-800  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M18 9V4c0-.6-.4-1-1-1H9a1 1 0 0 0-.8.3l-4 4a1 1 0 0 0-.2.6V20c0 .6.4 1 1 1h4M9 3v4c0 .6-.4 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z'
            />
          </svg>
        </div>
        <p className="text-sm">Add new compose</p>
      </button>
    </div>
  );
};
