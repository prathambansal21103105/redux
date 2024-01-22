import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch=useDispatch();
  const data=useSelector(state=>state.auth.isAuthenticated);
  // const loginHandler=()=>{
  //   dispatch(authActions.login());
  // }
  const logoutHandler=()=>{
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {data && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {data && <button onClick={logoutHandler}>Logout</button>}
            {!data && <button>Login</button>}
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
