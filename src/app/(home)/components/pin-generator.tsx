import FlexColumn from "@/components/layouts/flex_col";
import PinGeneratorHeader from "./pin-generator-header";
import FlexRow from "@/components/layouts/flex_row";
import UploadedImages from "./uploaded-images";
import PinPreview from "./pin-preview";

export default function PinGenerator() {
	return (
		<FlexColumn className='w-full p-3 bg-transparent gap-3'>
			<PinGeneratorHeader />
			<FlexRow className='gap-3 bg-transparent h-full'>
				<UploadedImages />
				<PinPreview />
			</FlexRow>
		</FlexColumn>
	);
}
