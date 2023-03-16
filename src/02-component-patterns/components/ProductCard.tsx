import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement, CSSProperties } from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {

	const { increaseBy, counter } = useProduct({ onChange, product, value });

	return (
		<Provider value={{
			counter, increaseBy, product,
		}}>
			<div
				className={`${styles.productCard} ${className}`}
				style={style}
			>
				{children}
			</div>
		</Provider>
	)
}


