import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement, CSSProperties } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlrers } from '../interfaces/interfaces';

export interface Props {
	product: Product;
	// children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlrers) => JSX.Element,
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

	const { increaseBy, counter, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

	return (
		<Provider value={{
			counter, increaseBy, product, maxCount
		}}>
			<div
				className={`${styles.productCard} ${className}`}
				style={style}
			>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,
					increaseBy,
					reset
				})}
			</div>
		</Provider>
	)
}


