import { getLineCount } from "./get-line-count";

export function checkOverflow(
	element: HTMLElement,
	setFontSize: (value: number) => void,
	fontSize: number,
	isOverride: boolean,
) {
	if (getLineCount(element.querySelector("p")!) > 2) setFontSize(fontSize - 1);
	else if (getLineCount(element.querySelector("p")!) < 2)
		setFontSize(fontSize + 2);
	else if (isOverride) setFontSize(fontSize + 2);
}
