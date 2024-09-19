import { Header } from "../../components/Header/Header";
import { ScanPageContent } from "./ScanPageContent/ScanPageContent";

export const ScanPage = () => {
	return (
		<>
			<Header headerType="white">Сканировать номер объекта</Header>
			<ScanPageContent />
		</>
	)
}