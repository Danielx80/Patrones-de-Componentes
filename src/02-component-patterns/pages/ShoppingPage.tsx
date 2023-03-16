import { ProductCard } from '../components';
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/productos';

export const ShoppingPage = () => {

	const { onPorductCountChange, shoppingCart } = useShoppingCart()

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}>
				{
					products.map(product => (
						<ProductCard
							key={product.id}
							product={product}
							className='bg-dark text-white'
							value={shoppingCart[product.id]?.count || 0}
							onChange={onPorductCountChange}
						>
							<ProductCard.Image
								className='custom-image'
								style={{
									boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
								}}
							/>
							<ProductCard.Title
								style={{
									fontWeight: 'bold'
								}}
							/>
							<ProductCard.Buttons
								className='custom-buttons'
							/>
						</ProductCard >
					))
				}
			</div>

			<div className='shopping-cart'>
				{
					Object.entries(shoppingCart).map(([key, product]) => (

						<ProductCard
							key={key}
							product={product}
							className='bg-dark text-white'
							style={{ width: '100px' }}
							onChange={onPorductCountChange}
							value={product.count}
						>
							<ProductCard.Image
								style={{
									boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
								}}
							/>
							<ProductCard.Buttons

								className='custom-buttons'
								style={{
									display: 'flex',
									justifyContent: 'center',
								}}
							/>
						</ProductCard >

					))
				}
			</div>
		</div>
	)
}
