import { Fragment, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ContentCard } from '@boston-scientific/anatomy-react';
import { CardGroup } from '@boston-scientific/anatomy-react';
import { IdLookupContext } from 'App';
import Layout from 'shared/components/Layout';
import { IdLookup, IdLookupProperties } from 'shared/types/docs';
import { slugify } from 'shared/helpers';
import useTitle from 'shared/hooks/useTitle';

interface Props {
  heading: string;
  collection: string;
}

const LandingPage = (props: Props): JSX.Element => {
  const location = useLocation();
  const idLookup: IdLookup = useContext(IdLookupContext);
  const listItems = idLookup[props.collection as keyof IdLookup];

  const [groupedItems, setGroupedItems] = useState<IdLookupProperties[][]>([]);

  const getUrl = (item: IdLookupProperties) => {
    return '.' + location.pathname + (item.group ? '/' + item.group : '') + '/' + slugify(item.name);
  };

  useTitle({ titlePrefix: props.heading });

  useEffect(() => {
    const groups = new Set(Array.from(Object.keys(listItems), (key) => listItems[key].group));
    const byGroup = Array.from(groups).map((group) => {
      const entries: IdLookupProperties[] = [];
      Object.keys(listItems).forEach((key) => {
        if (listItems[key].group === group) {
          entries.push(listItems[key]);
        }
      });
      return entries;
    });
    setGroupedItems(byGroup);
  }, [listItems]);

  return (
    <Layout>
      <div className="docs-body-minimal">
        <main id="mainContent">
          <h1>{props.heading}</h1>
          <CardGroup cardLayout="twoUp" className="bsds-mt-4x">
            {groupedItems.map((group) => (
              <Fragment key={`group${group[0].id}`}>
                {group
                  .sort((first, last) => first.name.localeCompare(last.name))
                  .map((entry) => (
                    <ContentCard
                      key={entry.id}
                      texts={{
                        cardTitle: entry.name,
                        cardDescription: entry.leadParagraph as string
                      }}
                      headingLevel="h2"
                      variant="border"
                      linkHref={getUrl(entry)}
                      linkTitle
                    />
                  ))}
              </Fragment>
            ))}
          </CardGroup>
        </main>
      </div>
    </Layout>
  );
};

export default LandingPage;
