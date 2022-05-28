import Head from "next/head";
import PropTypes from "prop-types";

const Seo = (props) => {
  return (
    <>
      <Head>
        {/* Title */}
        <title>{props.title} | Student SIS</title>
        <meta name="og:title" content={props.title} />
        <meta name="twitter:title" content={props.title} />

        {/* Description */}
        <meta name="description" content={props.description} />
        <meta name="og:description" content={props.description} />
        <meta name="twitter:description" content={props.description} />

        {/* Other Important Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Raheem McDonald" />
        <meta name="og:locale" content="en_US" />
        <meta
          name="robots"
          content={props.index ? "index,follow" : "noindex,nofollow"}
        />
        <meta name="googlebot" content="notranslate" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="csglearn" />
      </Head>
    </>
  );
};

Seo.propTypes = {
  // Page title must be passed
  title: PropTypes.string.isRequired,

  // Description is optional, especially since most of the pages will be
  // protected by authentication and won't be displayed by search engines
  description: PropTypes.string,

  // The index prop is used to determine whether the webpage should be
  // indexed on search engine or not. Most pages will be set to 'false',
  // so the default value is 'false'
  index: PropTypes.bool,
};

export default Seo;
