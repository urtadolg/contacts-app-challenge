import { Text } from "~/components";
import { formatAddressText } from "~/utils";
import {
	DetailsContainer,
	ListContainer,
	ListItem,
	SectionContainer,
	SectionTitle,
} from "./styles";
import { DetailsProps } from "./types";

const Details = ({ contactDetails }: DetailsProps) => {
	return (
		<DetailsContainer>
			<SectionContainer>
				<SectionTitle>Nome Completo</SectionTitle>
				<Text>{contactDetails.name}</Text>
			</SectionContainer>
			<SectionContainer>
				<SectionTitle>E-mail</SectionTitle>
				<Text>{contactDetails.email}</Text>
			</SectionContainer>
			<SectionContainer>
				<SectionTitle>Telefone(s)</SectionTitle>
				<ListContainer>
					{contactDetails.phone.map((item, index) => (
						<ListItem key={`${item.number}-${index}`}>
							<Text>{item.number}</Text>
						</ListItem>
					))}
				</ListContainer>
			</SectionContainer>
			<SectionContainer>
				<SectionTitle>Endereço(s)</SectionTitle>
				<ListContainer>
					{contactDetails.address.map((item, index) => (
						<ListItem key={`${item.number}-${index}`}>
							<Text>{formatAddressText(item)}</Text>
						</ListItem>
					))}
				</ListContainer>
			</SectionContainer>
		</DetailsContainer>
	);
};

export default Details;
