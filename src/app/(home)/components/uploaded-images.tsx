import FlexColumn from "@/components/layouts/flex_col";
import ImagesHeader from "./images-header";
import TopImage from "./top-image";
import BottomImage from "./bottom-image";

export default function UploadedImages() {
	return (
		<FlexColumn className='h-full w-full p-3 gap-3'>
			<ImagesHeader />
			<TopImage />
			<BottomImage />
		</FlexColumn>
	);
}
