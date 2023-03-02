import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css'

const product = {
	id: '1',
	title: 'Coffe Mug - Card',
	img: '../coffee-mug.png'
}

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}>
				<ProductCard
					product={product}
					className='bg-dark text-white'
				>
					<ProductImage className='custom-image' />
					<ProductTitle title='Old Coffe' className='text-white text-bold' />
					<ProductButtons className="custom-buttons" />
				</ProductCard >

				<ProductCard
					product={product}
					className='bg-dark text-white'
				>
					<ProductCard.Image className='custom-image' />
					<ProductCard.Title title='Old Coffe' className='text-white text-bold' />
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard >

				<ProductCard
					product={product}
					style={{ backgroundColor: '#70D1F8' }}
				>
					<ProductCard.Image
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
						style={{
							display: 'flex',
							justifyContent: 'end'
						}}
					/>
				</ProductCard >
			</div>
		</div>
	)
}
