import { ReactNode } from "react";
interface Template {
	children: ReactNode;
}
export default function Template({ children }: Template) {
	return (
		<p className='uppercase font-semibold outline p-3 rounded-lg'>{children}</p>
	);
}
