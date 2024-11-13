"use client";
import FlexColumn from "@/components/layouts/flex_col";
import { Image } from "lucide-react";
export default function CaptureImage() {
	return (
		<>
			<input
				type='file'
				className='hidden'
				id='top-image'
				accept='.jpg, .jpeg, .png'
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
							console.log(files);
							// captureFiles(files);
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
							(document.querySelector("#top-image") as HTMLElement)?.click()
						}
					>
						Choose file
					</span>
				</p>
			</FlexColumn>
		</>
	);
}