import FlexColumn from "@/components/layouts/flex_col";
import TopPreview from "./top-preview";
import BottomPreview from "./bottom-preview";
import { image_url_jotai } from "@/data/app";
import { useAtomValue } from "jotai";
export default function Pin() {
	const image_url = useAtomValue(image_url_jotai);

	return (
		<>
			<FlexColumn className='outline rounded-none no-scrollbar h-[1500px]'>
				<TopPreview url={image_url.top!} />
				<div className='w-full h-2 shrink-0 bg-white'></div>
				<BottomPreview url={image_url.bottom!} />
			</FlexColumn>
			{/* To Print */}
			<FlexColumn
				className='outline rounded-none -z-40 absolute shrink-0 no-scrollbar w-[1000px] h-[1500px] hidden'
				htmlProps={{ id: "pin" }}
			>
				<TopPreview url={image_url.top!} />
				<div className='w-full h-1 shrink-0 bg-white'></div>
				<BottomPreview url={image_url.bottom!} />
			</FlexColumn>
		</>
	);
}
