import styles from '../styles/styles.module.css'
import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';

export interface Props {
	className?: string
	style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

	const { increaseBy, counter } = useContext(ProductContext)

	return (
		<div
			style={style}
			className={`${className} ${styles.buttonsContainer}`}
		>
			<button
				className={styles.buttonMinus}
				onClick={() => increaseBy(-1)}
			>
				-
			</button>

			<div className={styles.countLabel}>
				{counter}
			</div>

			<button
				className={styles.buttonAdd}
				onClick={() => increaseBy(+1)}
			>
				+
			</button>
		</div>
	)
}