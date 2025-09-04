import Menu from './Menu';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Menu />
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
