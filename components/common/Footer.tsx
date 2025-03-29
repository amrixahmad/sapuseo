import { useFetchChangelog } from '../../services/misc';

interface FooterProps {
   currentVersion: string
}

const Footer = ({ currentVersion = '' }: FooterProps) => {
   const { data: changeLogs } = useFetchChangelog();
   const latestVersionNum = changeLogs && Array.isArray(changeLogs) && changeLogs[0] ? changeLogs[0].name : '';

   return (
      <footer className='text-center flex flex-1 justify-center pb-5 items-end'>
         <span className='text-gray-500 text-xs'>
            <span>Sapuseo v{currentVersion || '0.0.0'}</span>
            {currentVersion && latestVersionNum && `v${currentVersion}` !== latestVersionNum && (
               <span className='text-indigo-700 font-semibold'>
                  {' '}| Update available: {latestVersionNum} (latest)
               </span>
            )}
         </span>
      </footer>
   );
};

export default Footer;
