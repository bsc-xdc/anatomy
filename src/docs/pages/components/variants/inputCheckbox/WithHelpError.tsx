import InputCheckbox from 'library/components/InputCheckbox';
import Example from 'docs/shared/components/Example';

const WithHelpError = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <InputCheckbox
          label="Checkbox"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          forceValidation
          required
        />
      </div>
    </Example>
  );
};

export default WithHelpError;