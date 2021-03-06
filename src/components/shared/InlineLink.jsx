import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const InlineLink = ({ content, linkId, type, urlSlug }) => {
  let url;

  switch (type) {
    case 'article': {
      url = `/articles/${urlSlug}`;
      break;
    }

    case 'article_listing': {
      url = `/articles`;
      break;
    }

    case 'content_page': {
      url = `/${urlSlug}`;
      break;
    }

    case 'home_page': {
      url = `/`;
      break;
    }

    default: {
      url = '/not-found';
    }
  }

  return (
    <Link key={linkId} to={url}>
      {content}
    </Link>
  );
};

InlineLink.propTypes = {
  content: PropTypes.string,
  linkId: PropTypes.string,
  type: PropTypes.string,
  urlSlug: PropTypes.string,
};

export default InlineLink;
