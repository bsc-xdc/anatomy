import { useState, useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NavItemSecondary } from 'library/components/navigation/navSecondary/NavSecondary';
import { NavItemTertiary } from 'library/components/navigation/NavTertiary';
import { IdLookupContext } from 'docs/App';
import Markdown from 'docs/shared/components/Markdown';
import { IdLookup } from 'docs/shared/types/docs';
import { GetFoundationQuery, useGetFoundationQuery } from 'docs/shared/types/contentful';
import useTitle from 'docs/shared/hooks/useTitle';
import useHashScroll from 'docs/shared/hooks/useHashScroll';
import useHeadings from 'docs/shared/hooks/useHeadings';
import PageTemplate from 'docs/shared/components/PageTemplate';
import Layout from 'docs/shared/components/Layout';

const Foundations = (): JSX.Element => {
  const params = useParams();
  const location = useLocation();
  const idLookup: IdLookup = useContext(IdLookupContext);
  const [navItems, setNavItems] = useState<NavItemSecondary[]>([] as NavItemSecondary[]);
  const [foundationData, setFoundationData] = useState<GetFoundationQuery['foundation']>(
    {} as GetFoundationQuery['foundation']
  );
  const [headings, setHeadings] = useState<NavItemTertiary[]>([]);

  const { data, error } = useGetFoundationQuery({
    variables: {
      id: idLookup.foundations[params?.foundationName ?? ''].id,
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (data?.foundation) {
      setFoundationData(data.foundation);
    }
  }, [data]);

  useEffect(() => {
    // TODO: ADS-380 get rid of .replace()
    const basePath = location.pathname.slice(0, location.pathname.lastIndexOf('/')).replace('/iconography', '');
    setNavItems([
      {
        text: 'Accessibility',
        to: basePath + '/accessibility'
      },
      {
        text: 'Anti-patterns',
        to: basePath + '/anti-patterns'
      },
      {
        text: 'Color',
        to: basePath + '/color'
      },
      {
        text: 'Icons',
        children: [
          {
            text: 'Decorative icons',
            to: basePath + '/iconography/decorative-icons'
          },
          {
            text: 'System icons',
            to: basePath + '/iconography/system-icons'
          }
        ]
      },
      {
        text: 'Spacing',
        to: basePath + '/spacing'
      },
      {
        text: 'Tokens',
        to: basePath + '/tokens'
      },
      {
        text: 'Typography',
        to: basePath + '/typography'
      },
      {
        text: 'Web sustainability',
        to: basePath + '/web-sustainability'
      }
    ]);
  }, [location]);

  useTitle({ titlePrefix: `${foundationData?.name} - Foundations` });
  useHashScroll(!!foundationData?.content);

  const pageHeadings = useHeadings();
  useEffect(() => {
    if (pageHeadings.length > 0) {
      setHeadings(pageHeadings);
    }
  }, [pageHeadings]);

  if (foundationData) {
    return (
      <Layout>
        <PageTemplate
          name={foundationData?.name || ''}
          lastUpdated={foundationData?.sys?.publishedAt || ''}
          leadParagraph={foundationData?.leadParagraph || ''}
          seoMetaDescription={foundationData?.pageProperties?.seoMetaDescription || ''}
          navSecondaryMenuTrigger="Foundations"
          navSecondaryItems={navItems}
          navTertiaryItems={headings}
        >
          <Markdown markdown={foundationData?.content || ''} headingOffset={1} />
        </PageTemplate>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <main id="mainContent">Loading...</main>
      </Layout>
    );
  }
};

export default Foundations;
