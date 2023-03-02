import { ProductTitle } from './ProductTitle';
import { ProductCard as ProductCardHoc } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
// export { ProductCard } from './ProductCard';
export { ProductCard as ProductCardHoc } from './ProductCard';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';


export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHoc, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons
}) 

export default ProductCard;