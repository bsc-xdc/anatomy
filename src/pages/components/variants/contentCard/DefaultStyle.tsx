import Example from 'shared/components/Example';
import { ContentCard } from '@boston-scientific/anatomy-react';

const DefaultStyle = (): JSX.Element => {
  return (
    <Example>
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        linkTitle={false}
        headingLevel="h4"
      />
    </Example>
  );
};

export default DefaultStyle;
