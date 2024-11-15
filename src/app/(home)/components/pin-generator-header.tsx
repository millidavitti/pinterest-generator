"use client";
import Button from "@/components/button";
import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";
import { Download } from "lucide-react";
import domtoimage from "dom-to-image-more";
import { useAtomValue } from "jotai";
import { selected_topic_jotai } from "@/data/app";
import { saveAs } from "file-saver";
let id = 1;
export default function PinGeneratorHeader() {
	const selected_topic = useAtomValue(selected_topic_jotai);
	return (
		<FlexRow className='justify-between items-center bg-transparent h-fit shrink-0'>
			<FlexColumn className='bg-transparent'>
				<h2 className='text-2xl font-bold'>Pin Generator</h2>
				<p className='text-light-surface-on-surface'>
					Create beautiful Pins in seconds
				</p>
			</FlexColumn>

			<Button
				onClick={() => {
					const node = document.getElementById("pin")!;
					domtoimage
						.toBlob(node, {
							adjustClonedNode: adjustClone,
						})
						.then((blob: Blob) => {
							saveAs(
								blob,
								selected_topic.replaceAll(" ", "_").toLowerCase() + id + ".png",
							);
						});

					id++;
				}}
			>
				<Download />
				<span>Download Pin</span>
			</Button>
		</FlexRow>
	);
}
function adjustClone(node: HTMLElement, clone: HTMLElement, after: boolean) {
	if (after && clone.id === "text-box-container") {
		clone.style.transform = "scale(2.3)";
	} else if (!after && node.id === "cta") {
		node.style.bottom = "120px";
	} else if (after && node.id === "cta") {
		node.style.transform = "scale(2.3)";
	}

	return clone;
}
