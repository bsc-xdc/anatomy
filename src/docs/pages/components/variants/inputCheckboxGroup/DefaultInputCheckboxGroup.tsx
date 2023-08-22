import Fieldset from 'library/components/Fieldset';
import InputCheckbox from 'library/components/InputCheckbox';
import Example from 'docs/shared/components/Example';

const DefaultInputCheckboxGroup = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <Fieldset legend="Legend">
          <InputCheckbox label="Checkbox 1" />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
      </div>
    </Example>
  );
};

export default DefaultInputCheckboxGroup;