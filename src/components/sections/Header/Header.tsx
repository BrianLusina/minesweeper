import { FunctionComponent } from 'react';
import Avatar from '@components/ui/Avatar';
// import avatar from '@images/avatar.jpg'

const Header: FunctionComponent = () => {
  return (
    <div className="inner">
      <Avatar url="../../assets/images/avatar.jpg" />
      <h1>
        <strong>Gamez</strong>, a simple
        <br />
        site showcasing mini games on the web
        <br />
        built by <a href="http://linkedin.com/in/brianlusina">Lusina</a>.
      </h1>
    </div>
  );
};

export default Header;
