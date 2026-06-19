export interface Product {
  id: string; name: string; slug: string; description: string; shortDescription: string;
  price: number; compareAtPrice?: number; images: string[]; category: string; collection: string;
  tags: string[]; variants?: ProductVariant[]; inStock: boolean; isNew?: boolean; isBestSeller?: boolean;
  rating?: number; reviewCount?: number; materials?: string[]; colors?: string[]; customizationOptions?: string[];
}
export interface ProductVariant { id: string; name: string; price: number; compareAtPrice?: number; inStock: boolean; }
export interface Collection { id: string; name: string; slug: string; description: string; image: string; productCount: number; featured?: boolean; }
export interface CartItem { productId: string; variantId?: string; name: string; image: string; price: number; quantity: number; variant?: string; }
export interface Testimonial { id: string; name: string; role: string; company: string; content: string; rating?: number; }
export interface FAQItem { id: string; question: string; answer: string; }
export interface ServiceCard { id: string; title: string; description: string; icon: string; features: string[]; }
