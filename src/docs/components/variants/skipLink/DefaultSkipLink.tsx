import SkipLink from '../../../../library/components/SkipLink';
import Example from '../../../shared/components/Example';
import useTitle from '../../../shared/hooks/useTitle';

const DefaultSkipLink = (): JSX.Element => {
  useTitle({titlePrefix: `Example Skip Link - Components`});
  return (
    <Example isFlush>
      <SkipLink destinationId="mainContent" destination="main content"/>
      <header className="docs-wire-header">
        <p>Header area</p>
        <a href="/">Example header link</a>
      </header>
      <main id="mainContent" className="docs-wire-main">
        <p>Main content area</p>
        <a href="/">Example link</a>
      </main>
    </Example>
  );
}

export default DefaultSkipLink;