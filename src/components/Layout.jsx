import { useScrollPosition } from '../hooks/useScrollPosition';

import Menu from './Menu';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const { activeSection, sectionColor } = useScrollPosition();

  return (
    <div className="layout">
      <Menu activeSection={activeSection} sectionColor={sectionColor} />
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
