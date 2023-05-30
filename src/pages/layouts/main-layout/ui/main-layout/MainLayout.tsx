import { NavLink, Outlet } from 'react-router-dom';
import { sessionApi, sessionModel } from '~entities/session';

function CurrentUserPreview() {
  const { data: userData, isLoading, isError } = sessionApi.useCurrentUser();

  // TODO: Add error handle
  if (isError) return <div>error</div>;
  // TODO: Add fallback
  if (isLoading) return <div>loading</div>;

  const { image, username } = userData.user;

  return (
    <>
      <img className="user-pic" src={image} alt={username} />
      {username}
    </>
  );
}

export function MainLayout() {
  const isAuth = sessionModel.useAuth();

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            conduit
          </NavLink>
          {!isAuth && (
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Sign up
                </NavLink>
              </li>
            </ul>
          )}
          {isAuth && (
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/qwerty">
                  <i className="ion-compose" />
                  &nbsp;New Article
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/qwerty">
                  <i className="ion-gear-a" />
                  &nbsp;Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/qwerty">
                  <CurrentUserPreview />
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <Outlet />;
      <footer>
        <div className="container">
          <NavLink className="logo-font" to="/">
            conduit
          </NavLink>
          <span className="attribution">
            An interactive learning project from{' '}
            <a href="https://thinkster.io" target="_blank" rel="noreferrer">
              Thinkster
            </a>
            . Code &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  );
}
