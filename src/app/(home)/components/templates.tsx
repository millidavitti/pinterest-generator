"use client";
import FlexColumn from "@/components/layouts/flex_col";
import GreenHighlight from "./green-highlight";
import Highlight from "./highlight";
import { useAtomValue } from "jotai";
import { selected_topic_jotai } from "@/data/app";
import Template from "./template";

export default function Templates() {
	const selected_topic = useAtomValue(selected_topic_jotai);
	return (
		<FlexColumn className='p-3 gap-3'>
			<Template>
				CAN YOU SCORE <GreenHighlight>19/20</GreenHighlight> ON THIS{" "}
				<Highlight>{selected_topic}</Highlight> QUIZ
			</Template>{" "}
			<Template>
				CAN YOU SCORE <GreenHighlight>19/20</GreenHighlight> ON THIS{" "}
				<Highlight>{selected_topic}</Highlight> QUIZ
			</Template>{" "}
			<Template>
				CAN YOU SCORE <GreenHighlight>19/20</GreenHighlight> ON THIS{" "}
				<Highlight>{selected_topic}</Highlight> QUIZ
			</Template>{" "}
			<Template>
				CAN YOU SCORE <GreenHighlight>19/20</GreenHighlight> ON THIS{" "}
				<Highlight>{selected_topic}</Highlight> QUIZ
			</Template>
		</FlexColumn>
	);
}
