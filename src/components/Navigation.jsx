import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link className='link' to='/home'>
        Home
      </Link>
      <Link className='link' to='/add'>
        Add
      </Link>
    </nav>
  );
}

export default Navigation;
