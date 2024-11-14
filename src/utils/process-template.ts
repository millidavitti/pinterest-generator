export function processTemplate(template: string, selectedTopic: string) {
	const regex =
		/<GreenHighlight>(.*?)<\/GreenHighlight>|<Highlight>(.*?)<\/Highlight>|([^<]+)/g;
	let result = [];
	let match;

	while ((match = regex.exec(template)) !== null) {
		if (match[1]) {
			result.push({ green: match[1] });
		} else if (match[2]) {
			result.push({ highlight: selectedTopic });
		} else if (match[3]) {
			result.push({ white: match[3].trim() });
		}
	}
	return result;
}
