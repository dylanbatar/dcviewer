import { Sidebar } from '../../components/sidebar/Sidebar';
import { Composes } from './composes/Composes';

export const Main = () => {
  return (
    <main className='bg-[#e7edf3] h-screen'>
      <Sidebar>
         <Composes></Composes>
      </Sidebar>
    </main>
  );
};
