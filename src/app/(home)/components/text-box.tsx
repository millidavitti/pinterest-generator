import FlexRow from "@/components/layouts/flex_row";
import { checkOverflow } from "@/utils/check-overflow";

interface TextBox {
	question: string;
	textBoxRef: any;
	fontSize: number;
	setFontSize: any;
}
export default function TextBox({
	question,
	textBoxRef,
	fontSize,
	setFontSize,
}: TextBox) {
	return (
		<FlexRow className='p-1 absolute inset-x-0 mx-auto -bottom-4 bg-[#004aad] outline z-20 outline-4 outline-white h-14 w-[70%] shrink-0 rounded-none border-r text-white font-bold'>
			<div
				className='h-full flex'
				ref={textBoxRef}
				onClick={(e) => checkOverflow(e.currentTarget, setFontSize, fontSize)}
			>
				<p
					className='w-full h-fit text-center cursor-pointer self-center'
					style={{ fontSize: fontSize + "px" }}
				>
					{question}
				</p>
			</div>
		</FlexRow>
	);
}
