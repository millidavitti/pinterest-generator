import FlexRow from "@/components/layouts/flex_row";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Plus } from "lucide-react";

export default function AddTopic() {
	return (
		<FlexRow className='w-full justify-between'>
			<p>Topics</p>
			<InteractiveIcon>
				<Plus />
			</InteractiveIcon>
		</FlexRow>
	);
}
