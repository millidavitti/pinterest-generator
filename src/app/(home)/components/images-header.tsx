import Button from "@/components/button";
import FlexRow from "@/components/layouts/flex_row";
import { Wand } from "lucide-react";

export default function ImagesHeader() {
	return (
		<FlexRow className='justify-between items-center shrink-0'>
			<h2 className='text-xl font-semibold'>Images</h2>
			<Button>
				<Wand />
				<span>Auto Fill</span>
			</Button>
		</FlexRow>
	);
}
