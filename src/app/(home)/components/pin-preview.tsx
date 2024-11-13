"use client";
import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";
import { image_url_jotai } from "@/data/app";
import { useAtomValue } from "jotai";
import Image from "next/image";

export default function PinPreview() {
	const image_url = useAtomValue(image_url_jotai);
	return (
		<FlexColumn className='h-full w-full p-3 gap-3'>
			{/* Header */}
			<FlexRow className='shrink-0 p-3'>
				<h3 className='text-xl font-semibold'>Pin Preview</h3>
			</FlexRow>
			{/* Preview */}
			<FlexColumn className='h-full rounded-none'>
				{/* Pin */}
				<FlexColumn className='outline h-full rounded-none'>
					<FlexRow className='h-full rounded-none border-b-4 border-white bg-light-surface'>
						<Image
							alt=''
							src={image_url.top! || "/file.svg"}
							width={750}
							height={1000}
						/>
					</FlexRow>
					<FlexRow className='h-full rounded-none bg-light-surface'>
						<Image
							alt=''
							src={image_url.bottom! || "/file.svg"}
							width={750}
							height={1000}
						/>
					</FlexRow>
				</FlexColumn>
			</FlexColumn>
		</FlexColumn>
	);
}
