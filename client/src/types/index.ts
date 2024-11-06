export interface ProductType {
  title: string;
  slug: string;
  category: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  description: string;
  additionalInfo: string[];
  images: string[];
  quantity?: number;
}
