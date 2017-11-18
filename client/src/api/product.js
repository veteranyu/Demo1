import {query, mutation, toGqlArg as arg} from '../helpers';

const fields = `
	id
	name
	description
	price
`;


function me() {
	return query(`me {
		id
		name
		description
		price
	}`).then(data => data.me);
}

function getProduct(id) {
	return query(`products(id: ${id}) { ${fields}}`)
		.then(data => data.Product);
}

function getProducts(search) {
	return query(`products(${arg(search)}) {
		nodes {
			id
			name
			description
			price
		}
		totalCount
		pageInfo {
			startCursor
			endCursor
			hasNextPage
			hasPreviousPage
			edgeCount
		}
	}`)
		.then(data => data.Products);
}

function saveProduct(Product) {
	return mutation(`saveProduct(${arg(product)}) { ${fields} }`)
		.then(data => data.saveProduct);
}

function deleteProduct(id) {
	return mutation(`deleteProduct(id: ${id}) {
		id
	}`);
}


export {
	me,
	getProduct,
	getProducts,
	saveProduct,
	deleteProduct
};
