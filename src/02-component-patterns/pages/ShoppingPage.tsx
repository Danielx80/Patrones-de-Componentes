import { ProductCard } from '../components';
import { products } from '../data/productos';

const product = products[0]

export const ShoppingPage = () => {

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}>
				<ProductCard
					key={product.id}
					product={product}
					initialValues={{
						count: 4,
						// maxCount: 10
					}}
				>
					{
						({ reset, count, maxCount, isMaxCountReached, increaseBy }) => (
							<>
								<ProductCard.Image />
								<ProductCard.Title />
								<ProductCard.Buttons />
							</>
						)
					}
				</ProductCard >

			</div>
		</div>
	)
}
