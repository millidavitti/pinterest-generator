import FlexRow from "@/components/layouts/flex_row";
import { checkOverflow } from "@/utils/check-overflow";
import Image from "next/image";
import { useEffect, useRef } from "react";
import TextBox from "./text-box";
import { text_box_default_font_jotai } from "@/data/app";
import { useAtom } from "jotai";
import { getLineCount } from "@/utils/get-line-count";

interface TopPreview {
	url: string;
}
export default function TopPreview({ url }: TopPreview) {
	const textBoxRef = useRef<HTMLDivElement>(null);
	const [text_box_default_font, text_box_default_font_setter] = useAtom(
		text_box_default_font_jotai,
	);

	useEffect(() => {
		if (textBoxRef.current) {
			if (getLineCount(textBoxRef.current) > 2)
				checkOverflow(
					textBoxRef.current,
					text_box_default_font_setter,
					text_box_default_font,
				);
		}
	}, [text_box_default_font, text_box_default_font_setter]);

	return (
		<>
			<FlexRow className='relative h-full rounded-none border-b-4 border-white bg-light-surface overflow-visible'>
				{url ? (
					<Image
						alt='top-preview'
						src={url}
						width={750}
						height={1000}
						className='object-cover'
					/>
				) : (
					<Image
						alt='top-preview'
						src={"/placeholder.png"}
						width={750}
						height={1000}
						className='object-contain'
					/>
				)}
				{/* Text Box */}
				<TextBox textBoxRef={textBoxRef} />
			</FlexRow>
		</>
	);
}
