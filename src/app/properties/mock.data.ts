export const MockProperties = [
	'assets/images/properties-1.jpg',
	'assets/images/properties-2.jpg',
	'assets/images/properties-3.jpg',
	'assets/images/properties-4.jpg',
	'assets/images/properties-5.jpg',
	'assets/images/properties-6.jpg',
	'assets/images/properties-7.jpg',
	'assets/images/properties-8.jpg',
].map((url, idx) => {
	return {
		id: idx,
		imgURL: url,
		videoURL: 'https://vimeo.com/45830194',
		status: 'rent',
		address: {
			street: 'North Parchmore Street',
		},
		type: 'apartment',
		price: '$30,000',
		details: {
			size: '250sqft',
			bathrooms: 3,
			bedrooms: 4,
			images: [
				'assets/images/properties-2.jpg',
				'assets/images/properties-3.jpg',
				'assets/images/properties-4.jpg',
			]
		}
	}
})
