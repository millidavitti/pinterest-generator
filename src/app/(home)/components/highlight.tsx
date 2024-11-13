import { ReactNode } from "react";
interface Highlight {
	children: ReactNode;
}
export default function Highlight({ children }: Highlight) {
	return <span className='text-[#fffe03]'>{children}</span>;
}
