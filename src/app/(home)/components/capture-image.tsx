"use client";
import FlexColumn from "@/components/layouts/flex_col";
import { ImageURLKeys } from "@/data/app";
import useCaptureImageInterface from "@/hooks/interface/use-capture-image-interface";
import { Image } from "lucide-react";
interface CaptureImage {
	position: ImageURLKeys;
}
export default function CaptureImage({ position }: CaptureImage) {
	const { captureImage } = useCaptureImageInterface();

	return (
		<>
			<input
				type='file'
				className='hidden'
				id={position}
				accept='.jpg, .jpeg, .png'
				onChange={(e) =>
					captureImage(Array.from(e.target.files!), e.currentTarget.id)
				}
			/>
			<FlexColumn
				className='outline-dashed p-3 text-center justify-center items-center hover:outline-light-primary h-full transition'
				htmlProps={{
					onDrop(e) {
						e.preventDefault();
						e.currentTarget.classList.remove("scale-[0.95]");

						if (e.dataTransfer.items) {
							const files = [...e.dataTransfer.items].map(
								(data) => data.getAsFile()!,
							);

							captureImage(files, position);
						}
					},
					onDragOver(e) {
						e.preventDefault();
					},
					onDragEnter(e) {
						e.preventDefault();
						e.currentTarget.classList.add("scale-[0.95]");
					},
					onDragLeave(e) {
						e.preventDefault();
						e.currentTarget.classList.remove("scale-[0.95]");
					},
				}}
			>
				<Image className='stroke-light-surface-on-surface' />
				<p>
					Drag and Drop File or{" "}
					<span
						className='font-semibold active:scale-95 cursor-pointer'
						onClick={() =>
							(document.querySelector("#" + position) as HTMLElement)?.click()
						}
					>
						Choose file
					</span>
				</p>
			</FlexColumn>
		</>
	);
}
