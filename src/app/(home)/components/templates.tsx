"use client";
import FlexColumn from "@/components/layouts/flex_col";
import { useAtomValue } from "jotai";
import { selected_topic_jotai } from "@/data/app";
import Template from "./template";
import GreenHighlight from "./green-highlight";
import Highlight from "./highlight";
import { templates } from "@/data/constants";
import { processTemplate } from "@/utils/process-template";
import { v4 as uuidv4 } from "uuid";
export default function Templates() {
	const selected_topic = useAtomValue(selected_topic_jotai);

	const processedTemplates = templates.map((template) =>
		processTemplate(template, selected_topic),
	);

	return (
		<FlexColumn className='p-3 gap-3 h-full no-scrollbar'>
			{processedTemplates.map((template, i) => (
				<Template template={template} key={uuidv4()}>
					{template.map((bits) => {
						if (bits.white) return <span key={uuidv4()}>{bits.white}</span>;
						else if (bits.green)
							return (
								<GreenHighlight key={uuidv4()}>
									{" " + bits.green + " "}
								</GreenHighlight>
							);
						else if (bits.highlight)
							return (
								<Highlight key={uuidv4()}>
									{" " + bits.highlight + " "}
								</Highlight>
							);
					})}
				</Template>
			))}
		</FlexColumn>
	);
}
