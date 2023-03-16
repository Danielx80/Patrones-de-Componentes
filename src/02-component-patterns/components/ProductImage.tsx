import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';
import noImge from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
	img?: string;
	className?: string;
	style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {

	const { product } = useContext(ProductContext);
	let imgToShow: string
	if (img) {
		imgToShow = img
	} else if (product.img) {
		imgToShow = product.img
	} else {
		imgToShow = noImge
	}

	return (
		<img
			style={style}
			className={`${className} ${styles.productImg}`}
			src={imgToShow}
			alt="Product"
		/>
	)
}