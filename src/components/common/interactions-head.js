import Head from 'next/head';
import PropTypes from 'prop-types';

const InteractionsHead = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
  );
};

InteractionsHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InteractionsHead;
