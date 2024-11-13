import { cn } from "../../utils/cn";
import { HTMLProps, ReactNode } from "react";
interface FlexRow {
	children?: ReactNode;
	className?: string;
	htmlProps?: Partial<HTMLProps<HTMLDivElement>>;
}
export default function FlexRow({ children, className, htmlProps }: FlexRow) {
	return (
		<div
			className={cn(
				"flex flex-row outline-1 overflow-x-auto bg-light-surface-surface-container-lowest rounded-lg",
				className,
			)}
			{...htmlProps}
		>
			{children}
		</div>
	);
}
