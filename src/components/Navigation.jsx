import { Link, NavLink } from 'react-router-dom';

const navData = [
  {
    id: 1,
    link: '/',
    title: 'Home',
  },
  {
    id: 2,
    link: '/add',
    title: 'Add',
  },
  {
    id: 3,
    link: '/property',
    title: 'Property',
  },
  {
    id: 4,
    link: '/add-property',
    title: 'Add Property',
  },
];

function Navigation() {
  return (
    <nav>
      {navData.map((navObj) => (
        <NavLink exact key={navObj.id} className='nav-link' to={navObj.link}>
          {navObj.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
