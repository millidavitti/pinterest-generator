"use client";
import FlexRow from "@/components/layouts/flex_row";
import { template_color_jotai } from "@/data/app";
import { useSetAtom } from "jotai";

export default function ColorPallet() {
	const template_color_setter = useSetAtom(template_color_jotai);
	return (
		<FlexRow className='gap-3'>
			<div
				className='cursor-pointer active:scale-95 w-5 h-5 rounded-full bg-[#5e17eb]'
				onClick={() => template_color_setter("#5e17eb")}
			></div>
			<div
				className='cursor-pointer active:scale-95 w-5 h-5 rounded-full bg-[#004aad]'
				onClick={() => template_color_setter("#004aad")}
			></div>
			<div
				className='cursor-pointer active:scale-95 w-5 h-5 rounded-full bg-[#ff3131]'
				onClick={() => template_color_setter("#ff3131")}
			></div>
		</FlexRow>
	);
}
