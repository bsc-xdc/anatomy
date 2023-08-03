import { Fragment, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContentCard from 'library/components/ContentCard';
import CardGroup from 'library/components/CardGroup';
import { IdLookupContext } from 'docs/App';
import Layout from 'docs/shared/components/Layout';
import { IdLookup, IdLookupProperties } from 'docs/shared/types/docs';
import { slugify } from 'docs/shared/helpers';
import useTitle from 'docs/shared/hooks/useTitle';

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
          <CardGroup cardLayout="threeUp" className="bsds-mt-6x">
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
                      variant="border-light"
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