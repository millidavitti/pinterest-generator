import FlexRow from "@/components/layouts/flex_row";

interface TextBox {
	question: string;
	textBoxRef: any;
	fontSize: number;
}
export default function TextBox({ question, textBoxRef, fontSize }: TextBox) {
	return (
		<FlexRow className='absolute inset-x-0 mx-auto -bottom-4 bg-[#004aad] outline z-20 outline-4 outline-white h-14 w-[70%] shrink-0 rounded-none border-r text-white font-bold'>
			<div className='h-full flex' ref={textBoxRef}>
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
