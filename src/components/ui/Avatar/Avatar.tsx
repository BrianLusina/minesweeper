import { FunctionComponent } from 'react';
import logo from '@images/logo.png';
import { AvatarProps } from './Avatar.interface';

const Avatar: FunctionComponent<AvatarProps> = ({ url }) => {
  return (
    <span className="image avatar">
      <img src={url || logo} alt="avatar" />
    </span>
  );
};

export default Avatar;
