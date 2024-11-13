import FlexRow from "@/components/layouts/flex_row";
import { Wand } from "lucide-react";

export default function Header() {
	return (
		<FlexRow className='justify-between p-6 shrink-0'>
			<FlexRow className='items-center gap-2'>
				<Wand />
				<h1 className='text-2xl font-bold'>PinWizard</h1>
			</FlexRow>
			<p>Privacy Policy</p>
		</FlexRow>
	);
}
