"use client";
import FlexColumn from "@/components/layouts/flex_col";
import { topics_jotai } from "@/data/app";
import { useAtomValue } from "jotai";
import Topic from "./topic";
import { v4 as uuidv4 } from "uuid";
export default function Topics() {
	const topics = useAtomValue(topics_jotai);
	return (
		<FlexColumn className='gap-3'>
			{topics.map((topic) => (
				<Topic key={uuidv4()} topic={topic} />
			))}
		</FlexColumn>
	);
}
