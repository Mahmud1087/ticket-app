import { Link } from 'react-router-dom';
import { LANDING_PAGE } from '../../config/routes';

const Logo = () => {
  return (
    <Link to={LANDING_PAGE} className='text-xl md:text-2xl font-medium'>
      Tickety
    </Link>
  );
};
export default Logo;
