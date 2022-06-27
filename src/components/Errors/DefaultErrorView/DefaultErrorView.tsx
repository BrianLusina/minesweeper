import { FunctionComponent } from 'react';
import {
  DefaultErrorAlertContainer,
  DefaultErrorAlertTitle,
  DefaultErrorAlertText,
} from './styles';
import { DefaultErrorViewProps } from './DefaultErrorView.types';

const DefaultErrorAlert: FunctionComponent<DefaultErrorViewProps> = ({
  title = 'Oops! Well, this is embarassing...',
  message = 'Something terrible went wrong and we regret that you had to experience this! \n We are working to fix this.',
}) => {
  return (
    <DefaultErrorAlertContainer>
      <DefaultErrorAlertTitle>{title}</DefaultErrorAlertTitle>
      <DefaultErrorAlertText>{message}</DefaultErrorAlertText>
    </DefaultErrorAlertContainer>
  );
};

export default DefaultErrorAlert;
