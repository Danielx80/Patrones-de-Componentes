import { ProductContext } from './ProductCard';
import { useContext, CSSProperties } from 'react';
import styles from '../styles/styles.module.css'

export interface Props {
	title?: string;
	className?: string;
	style?: CSSProperties;
}

export const ProductTitle = ({ className, title, style }: Props) => {

	const { product } = useContext(ProductContext);

	return (
		<span
			style={style}
			className={`${className} ${styles.productDescription} `}>
			{title ? title : product.title}
		</span>
	)
}