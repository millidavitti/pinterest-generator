import { getLineCount } from "./get-line-count";

export function checkOverflow(
	element: HTMLElement,
	setRem: (value: number) => void,
	rem: number,
) {
	if (getLineCount(element.querySelector("p")!) > 2) setRem(rem - 1);
	else if (getLineCount(element.querySelector("p")!) < 2) setRem(rem + 2);
}
