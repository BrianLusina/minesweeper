import { FunctionComponent } from 'react';
import { AvatarProps } from './Avatar.interface';

const Avatar: FunctionComponent<AvatarProps> = ({ url }) => {
  return (
    <span className="image avatar">
      <img src={url} alt="avatar" />
    </span>
  );
};

export default Avatar;
