import FlexRow from "@/components/layouts/flex_row";
import { selected_topic_jotai, topics_jotai } from "@/data/app";
import { useSetAtom } from "jotai";
import { Trash } from "lucide-react";

interface Topic {
	topic: string;
}
export default function Topic({ topic }: Topic) {
	const topics_setter = useSetAtom(topics_jotai);
	const selected_topic_setter = useSetAtom(selected_topic_jotai);

	return (
		<FlexRow className='group p-3 bg-light-secondary-secondary-container justify-between cursor-pointer font-semibold shrink-0'>
			<FlexRow
				className='w-full bg-transparent active:scale-95 transition'
				htmlProps={{
					onClick() {
						selected_topic_setter(topic);
					},
				}}
			>
				<p className=' text-light-secondary-on-secondary-container'>{topic}</p>
			</FlexRow>
			<Trash
				className='cursor-pointer active:scale-95 group-hover:block stroke-light-error hidden'
				onClick={() =>
					topics_setter((topics) => topics.filter((t) => t !== topic))
				}
			/>
		</FlexRow>
	);
}
