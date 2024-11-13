import FlexColumn from "@/components/layouts/flex_col";
import CaptureImage from "./capture-image";

export default function BottomImage() {
	return (
		<FlexColumn className='p-3 h-full gap-3'>
			<h2 className='text-lg'>Bottom Image</h2>
			<CaptureImage position='bottom' />
		</FlexColumn>
	);
}
