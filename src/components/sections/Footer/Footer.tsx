import { FunctionComponent } from 'react';
import SocialIcon from '@components/ui/SocialIcon';

const Footer: FunctionComponent = () => {
  return (
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <SocialIcon link="https://twitter.com/brianlusina" icon="twitter" name="Twitter" />
          </li>
          <li>
            <SocialIcon link="https://github.com/brianlusina" icon="github" name="Github" />
          </li>
          <li>
            <SocialIcon
              link="https://linkedin.com/in/brianlusina"
              icon="linkedin"
              name="LinkedIn"
            />
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; TheLusina</li>
          <li>
            Design: <a href="https://brianlusina.com">Lusina</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
