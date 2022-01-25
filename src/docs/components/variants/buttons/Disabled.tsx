import Button from '../../../../library/components/Button';
import Example from '../../../shared/components/Example';

const Disabled = (): JSX.Element => {
  return <>
    <Example>
      <Button type="button" disabled>Default</Button>
      <Button variant="assertive" type="button" disabled>Assertive</Button>
      <Button variant="subtle" type="button" disabled>Subtle</Button>
    </Example>
    <Example isDarkTheme={true}>
      <Button variant="ghost" type="button" disabled>Ghost</Button>
    </Example>
  </>;
}

export default Disabled;