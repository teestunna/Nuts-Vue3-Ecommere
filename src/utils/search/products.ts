// eslint-disable-next-line import/no-extraneous-dependencies
import { type SearchOptions } from '@algolia/client-search';

import { type VariantPrice } from '@/utils/product/feeds';
import { client } from '@/utils/search/client';

interface AlgoliaProduct {
  ancestryPairs: string[];
  categoryKeys: string[];
  facets: {
    [facetName: string]: string[];
  };
  key: string;
  listingImageUrl: string;
  merchandisingCategory?: string;
  name: string;
  path: string;
  requiresCustomization: boolean;
  reviews: {
    averageRating?: number;
    count: number;
    totalRatings: number;
    totalReviews: number;
  };
  searchableTags: string[];
  shortDescription: string;
  tags: string[];
}

export interface AlgoliaVariant {
  autoDeliveryEligible: boolean;
  bulk?: boolean;
  cost: string;
  hasSiblings?: boolean;
  outOfStock: boolean;
  path: string;
  popularity: number;
  prices: VariantPrice[];
  Product: AlgoliaProduct;
  Product_activatedAt: number;
  Product_allVariantsOutOfStock: boolean;
  promoteShortVariantName: boolean;
  shortVariantName: string;
  sku: string;
  traits: string[];
  warehouses: string[];
  weight: string;
  wholesale?: boolean;
}

const deprecatedAttributes = [
  'comparisonPrice',
  'discountPercent',
  'displayPriceByChannel',
  'formattedUnitPrice',
  'preferFormattedUnitPrice',
  'singlePiecePrice',
  'singlePiecePriceByChannel',
];

export const facets = [
  'Product.facets.value',
  'Product.facets.roast',
  'Product.facets.salt',
  'Product.facets.chocolate',
  'Product.facets.product type',
  'Product.facets.use case',
  'Product.facets.region',
  'Product.facets.flavor',
  'Product.searchableTags',
];

export const productsIndex = client.initIndex('Products');

export const searchVariants = (query?: string, options?: SearchOptions) =>
  productsIndex.search<AlgoliaVariant>(query ?? '', {
    ...options,
    attributesToRetrieve: ['*'].concat(deprecatedAttributes.map((attr) => `-${attr}`)),
    facets,
  });

export type SearchVariantResult = Awaited<ReturnType<typeof searchVariants>>;
