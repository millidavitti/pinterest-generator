import Button from "@/components/button";
import { Calendar } from "lucide-react";

export default function SchedulePost() {
	return (
		<Button>
			<Calendar size={20} className='stroke-light-primary-on-primary' />
			<span>Schedule Posts</span>
		</Button>
	);
}
