export type IconSize = 16 | 20 | 24 | 32;

export const IconDetails: Record<IconSize, { dimensions: Record<'default' | 'md', string> }> = {
  16: { dimensions: { default: 'w-4 h-4', md: 'md:w-4 md:h-4' } },
  20: { dimensions: { default: 'w-5 h-5', md: 'md:w-5 md:h-5' } },
  24: { dimensions: { default: 'w-6 h-6', md: 'md:w-6 md:h-6' } },
  32: { dimensions: { default: 'w-8 h-8', md: 'md:w-8 md:h-8' } },
} as const;
