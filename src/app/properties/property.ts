export declare interface PropertyAddress {
	street?: string;
	location?: string;
}

export declare interface PropertyDetails {
	size?: string;
	bathrooms?: number;
	bedrooms?: number;
	images?: any[];
}

export declare class Property {
	id?: number;
	imgURL?: string;
	videoURL?: string;
	status?: string;
	address?: string | PropertyAddress;
	type?: string;
	price?: string;
	details?: PropertyDetails;
}
