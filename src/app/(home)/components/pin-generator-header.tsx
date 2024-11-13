import Button from "@/components/button";
import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";
import { Download } from "lucide-react";

export default function PinGeneratorHeader() {
	return (
		<FlexRow className='justify-between items-center bg-transparent h-fit shrink-0'>
			<FlexColumn className='bg-transparent'>
				<h2 className='text-2xl font-bold'>Pinterest Generator</h2>
				<p className='text-light-surface-on-surface'>
					Create beautiful Pins in seconds
				</p>
			</FlexColumn>
			<Button>
				<Download />
				<span>Download Pin</span>
			</Button>
		</FlexRow>
	);
}
