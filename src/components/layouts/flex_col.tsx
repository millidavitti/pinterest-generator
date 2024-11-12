import { HTMLProps, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface FlexColumn {
	children: ReactNode;
	className?: String;
	htmlProps?: Partial<HTMLProps<HTMLDivElement>>;
}
export default function FlexColumn({
	children,
	className,
	htmlProps,
}: FlexColumn) {
	return (
		<div
			className={cn("flex flex-col overflow-y-auto", className)}
			{...htmlProps}
		>
			{children}
		</div>
	);
}
