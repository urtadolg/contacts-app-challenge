export interface ContactFormData {
	name: string;
	email: string;
	phone: Phone[];
	address: Address[];
}

export interface IContactData extends ContactFormData {
	id: string;
	category: string;
}

export type SortedContactsList = Record<string, IContactData[]>;

export type Address = {
	city: string;
	neighborhood: string;
	number: number;
	state: string;
	street: string;
	zipCode: string;
};

export type Phone = {
	number: string;
};
