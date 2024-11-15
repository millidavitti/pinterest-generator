import FlexRow from "@/components/layouts/flex_row";
import Image from "next/image";
import TextBox from "./text-box";

interface TopPreview {
	url: string;
}
export default function TopPreview({ url }: TopPreview) {
	return (
		<>
			<FlexRow className='relative h-full rounded-none bg-light-surface overflow-visible'>
				{url ? (
					<Image
						alt='top-preview'
						src={url}
						width={1000}
						height={1500}
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
				<TextBox />
			</FlexRow>
		</>
	);
}
