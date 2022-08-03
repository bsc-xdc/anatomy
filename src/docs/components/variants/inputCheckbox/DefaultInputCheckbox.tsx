import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const DefaultInputCheckbox = (): JSX.Element => {
  return (
    <Example>
      <div className="lib-form-control">
        <InputCheckbox label="Checkbox" />
      </div>
    </Example>
  );
}

export default DefaultInputCheckbox;