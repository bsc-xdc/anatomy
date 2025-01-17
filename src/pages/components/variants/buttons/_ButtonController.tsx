import { VariantProps } from '../Preview';
import DefaultButton from './DefaultButton';
import IconLeft from './IconLeft';
import IconRight from './IconRight';
import Icon from './Icon';
import DefaultStyle from './DefaultStyle';
import AssertiveStyle from './AssertiveStyle';
import SubtleStyle from './SubtleStyle';
import TextStyle from './TextStyle';
import Disabled from './Disabled';
import ActiveFilterStyle from './ActiveFilterStyle';

const ButtonController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Modifiers
    case 'buttonIconLeft':
      return <IconLeft />;
    case 'buttonIconRight':
      return <IconRight />;
    case 'buttonIcon':
      return <Icon />;

    // Styles
    case 'buttonDefault':
      return <DefaultStyle />;
    case 'buttonAssertive':
      return <AssertiveStyle />;
    case 'buttonSubtle':
      return <SubtleStyle />;
    case 'buttonText':
      return <TextStyle />;
    case 'buttonActiveFilter':
      return <ActiveFilterStyle />;

    // States
    case 'buttonDisabled':
      return <Disabled />;

    default:
      return <DefaultButton />;
  }
};

export default ButtonController;
