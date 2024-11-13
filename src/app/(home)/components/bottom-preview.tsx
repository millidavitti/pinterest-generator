import FlexRow from "@/components/layouts/flex_row";
import { cn } from "@/utils/cn";
import { ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";

interface BottomPreview {
	url: string;
}
export default function BottomPreview({ url }: BottomPreview) {
	return (
		<FlexRow className='relative h-full rounded-none'>
			<FlexRow className='rounded-none bg-light-surface'>
				{url ? (
					<Image
						alt='bottom-preview'
						src={url}
						width={750}
						height={1000}
						className='object-cover'
					/>
				) : (
					<Image
						alt='bottom-preview'
						src={"/placeholder.png"}
						width={750}
						height={1000}
						className='object-contain'
					/>
				)}
			</FlexRow>
			<FlexRow
				className={cn(
					"font-bold w-fit shrink-0 absolute bottom-6  inset-x-0 mx-auto outline p-3 rounded-none",
					poppins.className,
				)}
			>
				START QUIZ <ChevronRight />
			</FlexRow>
		</FlexRow>
	);
}

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["500"],
});
