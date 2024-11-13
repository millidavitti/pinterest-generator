import { HTMLProps, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface FlexColumn {
	children: ReactNode;
	className?: string;
	htmlProps?: Partial<HTMLProps<HTMLDivElement>>;
}
export default function FlexColumn({
	children,
	className,
	htmlProps,
}: FlexColumn) {
	return (
		<div
			className={cn(
				"flex flex-col outline-2 overflow-y-auto bg-light-surface-surface-container-lowest rounded-lg",
				className,
			)}
			{...htmlProps}
		>
			{children}
		</div>
	);
}
