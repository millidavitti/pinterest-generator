import Button from "@/components/button";
import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";
import { Wand } from "lucide-react";

export default function PinPreview() {
	return (
		<FlexColumn className='h-full w-full'>
			<FlexRow className='outline'>
				<h3 className='text-xl font-semibold'>Pin Preview</h3>
				<Button>
					<Wand />
					<span>Auto Fill</span>
				</Button>
			</FlexRow>
		</FlexColumn>
	);
}
