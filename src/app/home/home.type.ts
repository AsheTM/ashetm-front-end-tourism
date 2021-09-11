
export type THome = {
  background:   THomeBackgroundItem;
  country:      string;
  image:        THomeBackgroundItem;
  description:  string;
  rating:       number;
};

export type THomeBackgroundItem = {
  src:  string;
  alt?: string;
};

export type THomeCarouselItem = Pick<THome, 'country' | 'image' | 'rating'>;
