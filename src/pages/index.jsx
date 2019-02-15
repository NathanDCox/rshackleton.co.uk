import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';

import HomeBanner from '@components/home/HomeBanner';
import Layout from '@components/layouts/Default';
import SEO from '@components/shared/SEO';

const Index = ({
  data: {
    allKenticoCloudItemHomePage: {
      edges: [{ node: data }],
    },
  },
}) => {
  const seo = {
    title: get(data, 'elements.metadata__page_title.value'),
    description: get(data, 'elements.metadata__page_description.value'),
    keywords: get(data, 'elements.metadata__page_keywords.value'),
  };

  const image = get(data, 'elements.background_image.value[0].url');
  const imageDescription = get(
    data,
    'elements.background_image.value[0].description',
  );

  return (
    <Layout>
      <SEO {...seo} />
      <HomeBanner image={image} imageDescription={imageDescription} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object,
};

export default Index;

export const query = graphql`
  {
    allKenticoCloudItemHomePage {
      edges {
        node {
          id
          elements {
            background_image {
              value {
                description
                url
              }
            }
            metadata__page_title {
              value
            }
            metadata__page_description {
              value
            }
            metadata__page_keywords {
              value
            }
          }
        }
      }
    }
  }
`;
