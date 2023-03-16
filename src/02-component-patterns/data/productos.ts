import { Product } from '../interfaces/interfaces';

const product1 = {
	id: '1',
	title: 'Coffe Mug - Card',
	img: '../coffee-mug.png'
}
const product2 = {
	id: '2',
	title: 'Coffe Mug - meme',
	img: '../coffee-mug2.png'
}
const product3 = {
	id: '2',
	title: 'Coffe Mug - extra',
	img: '../coffee-mug.png'
}

export const products: Product[] = [product1, product2, product3];