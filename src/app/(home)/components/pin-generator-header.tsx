"use client";
import Button from "@/components/button";
import FlexColumn from "@/components/layouts/flex_col";
import FlexRow from "@/components/layouts/flex_row";
import { Download } from "lucide-react";
import domtoimage from "dom-to-image-more";
import { useAtomValue } from "jotai";
import { selected_topic_jotai } from "@/data/app";
let id = 1;
export default function PinGeneratorHeader() {
	const selected_topic = useAtomValue(selected_topic_jotai);
	return (
		<FlexRow className='justify-between items-center bg-transparent h-fit shrink-0'>
			<FlexColumn className='bg-transparent'>
				<h2 className='text-2xl font-bold'>Pinterest Generator</h2>
				<p className='text-light-surface-on-surface'>
					Create beautiful Pins in seconds
				</p>
			</FlexColumn>
			<a id='download'>
				<Button
					onClick={() => {
						const node = document.getElementById("pin")!;
						const download = document.getElementById(
							"download",
						)! as HTMLAnchorElement;
						node.style.display = "flex";

						domtoimage
							.toPng(node, { adjustClonedNode: adjustClone })
							.then(function (dataUrl: string) {
								download.href = dataUrl;
								download.download =
									selected_topic.replaceAll(" ", "_").toLowerCase() +
									id +
									".png";
								id++;
							});
					}}
				>
					<Download />
					<span>Download Pin</span>
				</Button>
			</a>
		</FlexRow>
	);
}
function adjustClone(node: HTMLElement, clone: HTMLElement, after: boolean) {
	if (after && clone.id === "text-box-container") {
		clone.style.transform = "scale(2.3)";
	}
	if (!after && clone.id === "cta") {
		clone.style.transform = "scale(2)";
	}
	return clone;
}
