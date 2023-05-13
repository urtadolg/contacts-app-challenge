type Address = {
	city: string;
	neighborhood: string;
	number: number;
	state: string;
	street: string;
	zipCode: string;
};

type Phone = {
	number: string;
};

export interface ContactFormData {
	name: string;
	email: string;
	phone: Phone[];
	address: Address[];
}

export interface IContactData extends ContactFormData {
	id: number;
	category: string;
}

export type SortedContactsList = Record<string, IContactData[]>;
