import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <h1></h1>
      <div>
        <nav></nav>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
