"use client";
import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";
import { image_url_jotai } from "@/data/app";
import { useAtomValue } from "jotai";
import TopPreview from "./top-preview";
import BottomPreview from "./bottom-preview";

export default function PinPreview() {
	const image_url = useAtomValue(image_url_jotai);
	return (
		<FlexColumn className='h-full w-[750px] p-3 gap-3'>
			{/* Header */}
			<FlexRow className='shrink-0 p-3'>
				<h3 className='text-xl font-semibold'>Pin Preview</h3>
			</FlexRow>
			{/* Preview */}
			<FlexColumn className='h-full rounded-none'>
				{/* Pin */}
				<FlexColumn className='outline h-full rounded-none'>
					<TopPreview url={image_url.top!} />
					<BottomPreview url={image_url.bottom!} />
				</FlexColumn>
			</FlexColumn>
		</FlexColumn>
	);
}
