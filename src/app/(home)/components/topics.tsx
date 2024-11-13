"use client";
import FlexColumn from "@/components/layouts/flex_col";
import { topics_jotai } from "@/data/app";
import { useAtomValue } from "jotai";
import Topic from "./topic";

export default function Topics() {
	const topics = useAtomValue(topics_jotai);
	return (
		<FlexColumn className='gap-3'>
			{topics.map((topic, i) => (
				<Topic key={i} topic={topic} />
			))}
		</FlexColumn>
	);
}
