import dayjs from 'dayjs';
import {
  IComposeDetails,
  NetworkConfig,
  ServiceConfig,
  VolumeConfig,
} from '../../../../interfaces/compose';
import { useComposeStore } from '../../../../store/compose.store';
import React, { useEffect, useState } from 'react';

export const ComposeDetail: React.FC<{ compose: IComposeDetails }> = ({
  compose,
}) => {
  const { clearCompose, compose: ComposeDetail } = useComposeStore();
  const [servicesNumber, setServicesNumber] = useState(0);

  const closeComposeDetail = () => {
    clearCompose();
  };

  const getServicesLength = () => {
    if (ComposeDetail == null) {
      return;
    }

    const servicesLength = Object.keys(ComposeDetail.Services).length;
    setServicesNumber(servicesLength);
  };

  useEffect(() => {
    getServicesLength();
  }, [compose]);

  return (
    <>
      {/* TODO: If doesn't have compose details show other layout */}
      {!ComposeDetail ? null : (
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
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
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
                <h5 className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400 mb-2'>
                  Information
                </h5>
                <ul className='mb-4'>
                  <li className='flex items-center'>
                    <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>
                      Name
                    </p>
                    <p className='text-sm truncate text-center text-gray-500 dark:text-gray-400'>
                      {compose.name}
                    </p>
                  </li>
                  <li className='flex'>
                    <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>
                      Create At
                    </p>
                    <p className='text-sm truncate text-center text-gray-500 dark:text-gray-400'>
                      {dayjs(compose.createAt).format('YYYY-MM-DD')}
                    </p>
                  </li>
                  <li className='flex'>
                    <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>
                      Update At
                    </p>
                    <p className='text-sm truncate text-center text-gray-500 dark:text-gray-400'>
                      {dayjs(compose.updateAt).format('YYYY-MM-DD')}
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400 mb-2'>
                  Content file
                </h5>
                <ul className='mb-4'>
                  <li className='mb-2'>
                    <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>
                      Version
                    </p>
                    <p className='text-sm truncate text-gray-500 dark:text-gray-400'>
                      {ComposeDetail?.Version}
                    </p>
                  </li>
                  <li className='mb-2'>
                    <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>
                      Services
                      <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                        {servicesNumber}
                      </span>
                    </p>
                    <div className='text-sm truncate text-gray-500 dark:text-gray-400 mt-2'>
                      <Services serviceObject={ComposeDetail.Services} />
                    </div>
                  </li>
                  <li className='mb-2'>
                    <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>
                      Volumns
                    </p>
                    <div className='text-sm truncate text-gray-500 dark:text-gray-400'>
                      <Volumen volumenObject={ComposeDetail.Volumes} />
                    </div>
                  </li>
                  {ComposeDetail.Networks && (
                    <li>
                      <p className='text-gray-900 mr-2 rounded-lg dark:text-white group'>
                        Networks
                      </p>
                      <div className='text-sm truncate text-gray-500 dark:text-gray-400'>
                        <Network networkObject={ComposeDetail.Networks} />
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// TODO show all propertis for volumens
// TODO: convert this function into a helper or util
const Services: React.FC<{
  serviceObject: { [key: string]: ServiceConfig };
}> = ({ serviceObject }) => {
  const [serviceEntry, setServiceEntry] = useState<any[]>([]);

  const mapServiceEntry = () => {
    const servicesKeys: any = Object.keys(serviceObject).reduce(
      (acc, next) => ({
        ...acc,
        [next]: next,
      }),
      {}
    );

    for (const key in serviceObject) {
      const entry = {
        ...serviceObject[key],
        name: servicesKeys[key],
        ports: serviceObject[key].Ports,
      };
      Object.assign(
        entry,
        serviceObject[key].Build === '' && { image: serviceObject[key].Image }
      );

      setServiceEntry((state) => [...state, entry]);
    }
  };

  useEffect(() => {
    mapServiceEntry();
    return () => {
      setServiceEntry([]);
    };
  }, [serviceObject]);

  return (
    <div>
      {serviceEntry.map((service, index) => (
        <ul key={index}>
          <li className='mb-2'>
            <details>
              <summary className='service-with-link cursor-pointer flex justify-between items-center text-gray-500 dark:text-gray-400 hover:text-white'>
                <a
                  className='hover:underline underline-offset-4 w-full'
                  target='_blank'
                  href={
                    service.image && `https://hub.docker.com/r/${service.name}`
                  }
                >
                  {service.name}
                </a>
                {service.image && (
                  <svg
                    width='20px'
                    height='20px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Interface / External_Link'>
                      <path
                        id='Vector'
                        d='M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11'
                        stroke='#FFF'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                  </svg>
                )}
              </summary>
              <p>Ports {service.ports}</p>
              {service.Environment && (
                <div>
                  <h3>Environments</h3>
                  {service.Environment.map((secret: string, index: number) => {
                    return <span key={index}>- {secret}</span>;
                  })}
                </div>
              )}
              {service.Volumes && (
                <div>
                  <h3>Volumes</h3>
                  {service.Volumes.map((vol: string, index: number) => {
                    return <span key={index}>- {vol}</span>;
                  })}
                </div>
              )}
            </details>
          </li>
        </ul>
      ))}
    </div>
  );
};

// TODO show all propertis for volumens
// TODO: convert this function into a helper or util
const Volumen: React.FC<{
  volumenObject: { [key: string]: VolumeConfig };
}> = ({ volumenObject }) => {
  const [volumen, setVolumen] = useState<any[]>([]);

  const mapVolumEntry = () => {
    const volumenKeys: any = Object.keys(volumenObject).reduce(
      (acc, next) => ({
        ...acc,
        [next]: next,
      }),
      {}
    );

    for (const key in volumenObject) {
      const entry = {
        ...volumenObject[key],
        name: volumenKeys[key],
      };

      setVolumen((state) => [...state, entry]);
    }
  };

  useEffect(() => {
    mapVolumEntry();
    return () => {
      setVolumen([]);
    };
  }, [volumenObject]);

  return (
    <div>
      <ul>
        {volumen.map((vol) => {
          return <p>- {vol.name}</p>;
        })}
      </ul>
    </div>
  );
};

// TODO show all propertis for volumens
// TODO: convert this function into a helper or util
const Network: React.FC<{
  networkObject: { [key: string]: NetworkConfig };
}> = ({ networkObject }) => {
  const [network, setNetwork] = useState<any[]>([]);

  const mapnetworktry = () => {
    const networkKeys: any = Object.keys(networkObject).reduce(
      (acc, next) => ({
        ...acc,
        [next]: next,
      }),
      {}
    );

    for (const key in networkObject) {
      const entry = {
        ...networkObject[key],
        name: networkKeys[key],
      };

      setNetwork((state) => [...state, entry]);
    }
  };

  useEffect(() => {
    mapnetworktry();
    return () => {
      setNetwork([]);
    };
  }, [networkObject]);

  return (
    <div>
      <ul>
        {network.map((network) => {
          return <p>- {network.name}</p>;
        })}
      </ul>
    </div>
  );
};
