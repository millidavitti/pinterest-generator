import FlexRow from "@/components/layouts/flex_row";
import ColorPallet from "./color-pallet";

export default function TemplateHeader() {
	return (
		<FlexRow className='items-center justify-between p-3 sticky top-0 shrink-0'>
			<h2 className='text-xl font-semibold'>Template</h2>
			<ColorPallet />
		</FlexRow>
	);
}
