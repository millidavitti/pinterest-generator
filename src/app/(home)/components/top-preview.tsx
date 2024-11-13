import FlexRow from "@/components/layouts/flex_row";
import { checkOverflow } from "@/utils/check-overflow";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TextBox from "./text-box";

interface TopPreview {
	url: string;
}
export default function TopPreview({ url }: TopPreview) {
	const textBoxRef = useRef<HTMLDivElement>(null);
	const [fontSize, setFontSize] = useState(16);
	const [question, setQuestion] = useState("");

	useEffect(() => {
		if (textBoxRef.current && question) {
			checkOverflow(textBoxRef.current, setFontSize, fontSize);
		}
	}, [question, fontSize]);

	return (
		<>
			<input
				type='text'
				value={question}
				onChange={(e) => {
					setQuestion(e.currentTarget.value);
					setFontSize(16);
				}}
			/>
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
				<TextBox
					question={question}
					textBoxRef={textBoxRef}
					fontSize={fontSize}
				/>
			</FlexRow>
		</>
	);
}
