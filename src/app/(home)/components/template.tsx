import {
	QuizData,
	selected_template_jotai,
	template_color_jotai,
	text_box_default_font_jotai,
} from "@/data/app";
import { cn } from "@/utils/cn";
import { getLineCount } from "@/utils/get-line-count";
import { useAtomValue, useSetAtom } from "jotai";
import { ReactNode } from "react";
interface Template {
	children: ReactNode;
	template: QuizData;
}
export default function Template({ children, template }: Template) {
	const template_color = useAtomValue(template_color_jotai);
	const selected_template_setter = useSetAtom(selected_template_jotai);
	const text_box_default_font_setter = useSetAtom(text_box_default_font_jotai);
	return (
		<p
			className={cn(
				"uppercase font-semibold outline p-3 rounded-lg text-white shrink-0 active:scale-[.98] transition cursor-pointer",
				"bg-[" + template_color + "]",
			)}
			onClick={() => {
				selected_template_setter(template);
				if (getLineCount(document.querySelector("#text-box")!) < 2)
					text_box_default_font_setter(25);
			}}
		>
			{children}
		</p>
	);
}
