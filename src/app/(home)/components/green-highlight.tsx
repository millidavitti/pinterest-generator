import { ReactNode } from "react";

interface GreenHighlight {
	children: ReactNode;
}
export default function GreenHighlight({ children }: GreenHighlight) {
	return <span className='text-[#00ff0a]'>{children}</span>;
}
