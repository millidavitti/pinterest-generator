"use client";
import { Poppins } from "next/font/google";
import FlexRow from "@/components/layouts/flex_row";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { useAtomValue } from "jotai";
import { template_color_jotai } from "@/data/app";

export default function CTA() {
	const template_color = useAtomValue(template_color_jotai);
	return (
		<FlexRow
			className={cn(
				"font-bold w-fit text-6 text-white shrink-0 absolute bottom-6 inset-x-0 mx-auto p-3 rounded-none ",
				poppins.className,
				"bg-[" + template_color + "]",
			)}
			htmlProps={{ id: "cta" }}
		>
			START QUIZ <ChevronRight stroke='white' />
		</FlexRow>
	);
}
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["500"],
});
