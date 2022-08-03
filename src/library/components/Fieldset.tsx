// TODO:
// - Revisit what to relate help and error text to

import { FieldsetHTMLAttributes, useEffect, useState } from 'react';

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  errorText?: string;
  helpText?: string;
}

let fieldsetId = 0;

const Fieldset = ({ legend, errorText, helpText, children, ...fieldsetAttrs }: Props): JSX.Element => {
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');

  useEffect(() => {
    const idNum = ++fieldsetId;
    setHelpTextId('fieldsetHelpText' + idNum);
    setErrorTextId('fieldsetErrorText' + idNum);
  }, []);

  return (
    <fieldset className="lib-fieldset" aria-describedby={helpTextId ? helpTextId : ''} {...fieldsetAttrs} >
      <legend className="lib-legend">{ legend }</legend>
      { errorText && <p id={errorTextId} className="lib-input-error">{ errorText }</p> }
      { helpText && <p id={helpTextId} className="lib-input-help-text">{ helpText }</p> }
      { children }
    </fieldset>
  );
}

export default Fieldset;