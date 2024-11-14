import { cn } from "@/utils/cn";
import { MouseEventHandler, ReactNode } from "react";
interface Button {
	children: ReactNode;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
export default function Button({ children, className, onClick }: Button) {
	return (
		<button
			type='button'
			className={cn(
				"flex w-fit bg-light-primary p-3 py-2 rounded-lg text items-center gap-2 text-light-primary-on-primary cursor-pointer active:scale-[.99] transition-transform font-semibold",
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
