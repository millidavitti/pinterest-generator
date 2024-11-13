import FlexRow from "@/components/layouts/flex_row";
import { Search } from "lucide-react";

export default function SearchTopic() {
	return (
		<FlexRow className='outline p-3 gap-3'>
			<Search className='stroke-light-surface-on-surface' />
			<input type='text' placeholder='Search Topics' className='outline-none' />
		</FlexRow>
	);
}
