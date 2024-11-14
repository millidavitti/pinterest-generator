import FlexRow from "@/components/layouts/flex_row";
import Image from "next/image";
import CTA from "./cta";

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
			<CTA />
		</FlexRow>
	);
}
