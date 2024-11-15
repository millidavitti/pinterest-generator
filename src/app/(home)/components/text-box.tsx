import { Barlow_Condensed } from "next/font/google";

import FlexRow from "@/components/layouts/flex_row";
import { checkOverflow } from "@/utils/check-overflow";
import { cn } from "@/utils/cn";
import { RefObject } from "react";
import GreenHighlight from "./green-highlight";
import Highlight from "./highlight";
import { useAtom, useAtomValue } from "jotai";
import {
	selected_template_jotai,
	template_color_jotai,
	text_box_default_font_jotai,
} from "@/data/app";
import { v4 as uuidv4 } from "uuid";
interface TextBox {
	textBoxRef: RefObject<HTMLDivElement>;
}
export default function TextBox({ textBoxRef }: TextBox) {
	const selected_template = useAtomValue(selected_template_jotai);
	const template_color = useAtomValue(template_color_jotai);
	const [text_box_default_font, text_box_default_font_setter] = useAtom(
		text_box_default_font_jotai,
	);

	return (
		<FlexRow
			className={cn(
				"p-1 absolute inset-x-0 mx-auto -bottom-4 outline z-20 outline-4 outline-white min-h-14 w-60 shrink-0 rounded-none text-white font-bold no-scrollbar",
				"bg-[" + template_color + "]",
			)}
			htmlProps={{ id: "text-box-container" }}
		>
			<div
				className='h-full flex'
				ref={textBoxRef}
				onClick={(e) => {
					checkOverflow(
						e.currentTarget,
						text_box_default_font_setter,
						text_box_default_font,
						e.ctrlKey,
					);
				}}
			>
				<p
					id='text-box'
					className={cn(
						"w-full h-fit text-center cursor-pointer self-center uppercase",
						barlowCondensed.className,
					)}
					style={{ fontSize: text_box_default_font + "px" }}
				>
					{selected_template?.map((bits) => {
						if ("white" in bits)
							return <span key={uuidv4()}>{bits.white}</span>;
						else if ("green" in bits)
							return (
								<GreenHighlight key={uuidv4()}>
									{" " + bits.green + " "}
								</GreenHighlight>
							);
						else if ("highlight" in bits)
							return (
								<Highlight key={uuidv4()}>
									{" " + bits.highlight + " "}
								</Highlight>
							);
					})}
				</p>
			</div>
		</FlexRow>
	);
}
const barlowCondensed = Barlow_Condensed({
	subsets: ["latin"],
	weight: ["500"],
});
