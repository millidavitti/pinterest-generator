import FlexColumn from "@/components/layouts/flex_col";
import CaptureImage from "./capture-image";

export default function TopImage() {
	return (
		<FlexColumn className='p-3 h-full gap-3'>
			<h2 className='text-lg'>Top Image</h2>
			<CaptureImage position='top' />
		</FlexColumn>
	);
}
