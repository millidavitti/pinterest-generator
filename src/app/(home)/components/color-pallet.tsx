import FlexRow from "@/components/layouts/flex_row";

export default function ColorPallet() {
	return (
		<FlexRow className='gap-3'>
			<div className='cursor-pointer active:scale-95 w-5 h-5 rounded-full bg-[#5e17eb]'></div>
			<div className='cursor-pointer active:scale-95 w-5 h-5 rounded-full bg-[#004aad]'></div>
			<div className='cursor-pointer active:scale-95 w-5 h-5 rounded-full bg-[#ff3131]'></div>
		</FlexRow>
	);
}
