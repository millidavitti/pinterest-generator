import { getLineCount } from "./get-line-count";

export function checkOverflow(
	element: HTMLElement,
	setRem: (value: number) => void,
	rem: number,
) {
	const isOverflowingVertically = element.scrollHeight > element.clientHeight;
	if (isOverflowingVertically || getLineCount(element.querySelector("p")!) > 2)
		setRem(rem - 1);
	else if (
		!isOverflowingVertically &&
		getLineCount(element.querySelector("p")!) < 2
	)
		setRem(rem + 1);
}
