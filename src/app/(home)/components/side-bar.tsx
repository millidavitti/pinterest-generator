import FlexColumn from "@/components/layouts/flex_col";
import SchedulePost from "./schedule-post";
import AddTopic from "./add-topic";
import SearchTopic from "./search-topic";
import Topics from "./topics";

export default function SideBar() {
	return (
		<FlexColumn className='w-[500px] gap-3 bg-light-surface-surface-container-lowest'>
			<FlexColumn className='gap-3 p-3'>
				<SchedulePost />
				<SearchTopic />
				<AddTopic />
				<Topics />
			</FlexColumn>
		</FlexColumn>
	);
}
