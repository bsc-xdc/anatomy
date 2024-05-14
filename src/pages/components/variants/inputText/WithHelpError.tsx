import { ChangeEvent, useState } from 'react';
import { InputText } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithHelpAndError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  };

  return (
    <>
      <Example>
        <InputText
          label="Text input"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          errorText={errorText}
          defaultValue="Invalid value"
          forceValidation
          onChange={handleChange}
        />
      </Example>
      <iframe
        title="Text input with help Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-text-input--with-help-and-error&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default WithHelpAndError;
