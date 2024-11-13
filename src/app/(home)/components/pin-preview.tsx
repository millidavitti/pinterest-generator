import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";

export default function PinPreview() {
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
					<FlexRow className='h-full rounded-none border-b-4 border-white bg-light-surface'></FlexRow>
					<FlexRow className='h-full rounded-none bg-light-surface'></FlexRow>
				</FlexColumn>
			</FlexColumn>
		</FlexColumn>
	);
}
