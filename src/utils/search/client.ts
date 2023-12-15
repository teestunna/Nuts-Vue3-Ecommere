import algoliasearch from 'algoliasearch/lite';

// eslint-disable-next-line import/prefer-default-export
export const client = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_APP_KEY,
);
