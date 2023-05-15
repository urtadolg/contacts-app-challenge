import { Text } from "~/components";
import { formatAddressText } from "~/utils";
import {
	DataContainer,
	DetailsContainer,
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
				<DataContainer>
					<Text>{contactDetails.name}</Text>
				</DataContainer>
			</SectionContainer>
			<SectionContainer>
				<SectionTitle>E-mail</SectionTitle>
				<DataContainer>
					<Text>{contactDetails.email}</Text>
				</DataContainer>
			</SectionContainer>
			<SectionContainer>
				<SectionTitle>Telefone(s)</SectionTitle>
				<ul>
					{contactDetails.phone.map((item, index) => (
						<ListItem key={`${item.number}-${index}`}>
							<Text>{item.number}</Text>
						</ListItem>
					))}
				</ul>
			</SectionContainer>
			<SectionContainer>
				<SectionTitle>Endereço(s)</SectionTitle>
				<ul>
					{contactDetails.address.map((item, index) => (
						<ListItem key={`${item.number}-${index}`}>
							<Text>{formatAddressText(item)}</Text>
						</ListItem>
					))}
				</ul>
			</SectionContainer>
		</DetailsContainer>
	);
};

export default Details;
