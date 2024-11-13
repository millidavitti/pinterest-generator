"use client";
import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";
import { topics_jotai } from "@/data/app";
import { useAtom } from "jotai";
import { Trash } from "lucide-react";

export default function Topics() {
	const [topics, topics_setter] = useAtom(topics_jotai);
	return (
		<FlexColumn className='gap-3'>
			{topics.map((topic, i) => (
				<FlexRow
					key={i}
					className='group p-3 bg-light-secondary-secondary-container justify-between cursor-pointer font-semibold'
				>
					<FlexRow className='w-full bg-transparent active:scale-95 transition'>
						<p className=' text-light-secondary-on-secondary-container'>
							{topic}
						</p>
					</FlexRow>
					<Trash
						className='cursor-pointer active:scale-95 group-hover:block stroke-light-error hidden'
						onClick={() =>
							topics_setter((topics) => topics.filter((t) => t !== topic))
						}
					/>
				</FlexRow>
			))}
		</FlexColumn>
	);
}
