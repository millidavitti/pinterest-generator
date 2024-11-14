"use client";
import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";
import Pin from "./pin";

export default function PinPreview() {
	return (
		<FlexColumn className='h-full w-[750px] p-3 gap-3'>
			{/* Header */}
			<FlexRow className='shrink-0 p-3'>
				<h3 className='text-xl font-semibold'>Pin Preview</h3>
			</FlexRow>
			{/* Preview */}
			<FlexColumn className='h-full rounded-none'>
				<Pin />
			</FlexColumn>
		</FlexColumn>
	);
}
