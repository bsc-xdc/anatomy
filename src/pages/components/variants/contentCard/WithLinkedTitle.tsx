import Example from 'shared/components/Example';
import { ContentCard } from '@boston-scientific/anatomy-react';

const WithLinkedTitle = (): JSX.Element => {
  return (
    <>
      <Example>
        <ContentCard
          texts={{
            cardTitle: 'Card title',
            cardDescription:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          headingLevel="h4"
          linkHref="docs-demo-link"
          linkTitle
        />
      </Example>
      <iframe
        title="Content card with linked title Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-content-card--with-linked-title&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default WithLinkedTitle;
