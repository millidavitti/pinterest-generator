import { cn } from "@/utils/cn";
import { ReactNode } from "react";
interface Button {
	children: ReactNode;
	className?: string;
}
export default function Button({ children, className }: Button) {
	return (
		<button
			type='button'
			className={cn(
				"flex w-fit bg-light-primary p-3 py-2 rounded-lg text items-center gap-2 text-light-primary-on-primary cursor-pointer active:scale-[.99] transition-transform font-semibold",
				className,
			)}
		>
			{children}
		</button>
	);
}
