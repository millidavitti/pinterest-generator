import { image_url_jotai } from "@/data/app";
import { useSetAtom } from "jotai";

export default function useCaptureImageInterface() {
	const { captureImage } = useCaptureImage();

	return { captureImage };
}

function useCaptureImage() {
	const captureImage = async (files: File[], position: string) => {
		const blob = new Blob([await files[0].arrayBuffer()]);
		const url = URL.createObjectURL(blob);
		image_url_setter((image) => ({ ...image, [position]: url }));
	};
	const image_url_setter = useSetAtom(image_url_jotai);
	return { captureImage };
}
