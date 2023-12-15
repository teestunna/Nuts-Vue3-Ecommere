import type { LocalizedString, Money, Price } from '@commercetools/platform-sdk';

/**
 * VariantPrice parallels the CT {@link Price} interface except with
 * certain fields omitted and `obj` always populated. Don't add anything here
 * which isn't present in CT's {@link Price}.
 *
 * This is produced by webstore's
 * `Nuts\Commercetools\Helpers\ProductVariantSimplifier`.
 */
export interface VariantPrice {
  value: Money;
  channel?: {
    obj: {
      key: string;
      name?: LocalizedString;
    };
  };
  discounted?: {
    value: Money;
    discount: {
      obj?: {
        name: LocalizedString;
        description?: LocalizedString;
      };
    };
  };
  tiers?: {
    minimumQuantity: number;
    value: Money;
  }[];
}
