import { KeyboardEvent } from "react";

export const zipCodeMask = (value: string) => {
	if (!value) return "";
	value = value.replace(/\D/g, "");
	value = value.replace(/(\d{5})(\d)/, "$1-$2");
	return value;
};

export const cellphoneMask = (value: string) => {
	if (!value) return "";
	value = value.replace(/\D/g, "");
	value = value.replace(/(\d{2})(\d)/, "($1) $2");
	value = value.replace(/(\d)(\d{4})$/, "$1-$2");
	return value;
};

export const addZipCodeMask = (e: KeyboardEvent<HTMLInputElement>) => {
	e.currentTarget.value = zipCodeMask(e.currentTarget.value);
};

export const addCellphoneMask = (e: KeyboardEvent<HTMLInputElement>) => {
	e.currentTarget.value = cellphoneMask(e.currentTarget.value);
};
