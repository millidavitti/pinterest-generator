import FlexColumn from "@/components/layouts/flex_col";
import PinGeneratorHeader from "./pin-generator-header";
import FlexRow from "@/components/layouts/flex_row";
import UploadedImages from "./uploaded-images";
import PinPreview from "./pin-preview";
import TemplateHeader from "./template-header";
import Templates from "./templates";

export default function PinGenerator() {
	return (
		<FlexColumn className='w-full p-3 bg-transparent gap-3'>
			<PinGeneratorHeader />
			<FlexRow className='gap-3 bg-transparent h-full'>
				<FlexColumn className='w-full h-full'>
					<UploadedImages />
					<FlexColumn className='shrink-0'>
						<TemplateHeader />
						{/* Templates */}
						<Templates />
					</FlexColumn>
				</FlexColumn>
				<PinPreview />
			</FlexRow>
		</FlexColumn>
	);
}
