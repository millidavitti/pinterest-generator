export function getLineCount(element: HTMLElement) {
	const clone = element.cloneNode(true) as HTMLElement;
	clone.style.width = element.clientWidth + "px";
	clone.style.visibility = "hidden";
	clone.style.position = "absolute";
	document.body.appendChild(clone);

	clone.textContent = "A";
	const lineHeight = clone.clientHeight;

	clone.textContent = element.textContent;
	const totalHeight = clone.clientHeight;

	document.body.removeChild(clone);
	console.log(totalHeight / lineHeight);
	return totalHeight / lineHeight;
}
