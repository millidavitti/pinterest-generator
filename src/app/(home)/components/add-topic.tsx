"use client";
import FlexRow from "@/components/layouts/flex_row";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { topics_jotai } from "@/data/app";
import { useSetAtom } from "jotai";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function AddTopic() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isNewTopic, setIsNewTopic] = useState(false);
	const topics_setter = useSetAtom(topics_jotai);
	const [topic, setTopic] = useState("");
	useEffect(() => {
		if (isNewTopic) {
			inputRef.current?.focus();
		}
	}, [isNewTopic]);
	return (
		<>
			<FlexRow className='w-full justify-between items-center'>
				<h2 className='text-lg font-semibold'>Topics</h2>
				<InteractiveIcon callback={() => setIsNewTopic(!isNewTopic)}>
					<Plus className='stroke-light-primary' />
				</InteractiveIcon>
			</FlexRow>
			{isNewTopic && (
				<form
					action=''
					onSubmit={(e) => {
						e.preventDefault();
						if (!topic) throw toast.info("Provide a topic");
						topics_setter((topics) => [topic, ...topics]);
						setTopic("");
					}}
				>
					<input
						type='text'
						value={topic}
						onChange={(e) => setTopic(e.currentTarget.value)}
						ref={inputRef}
						className='outline-1 w-full rounded-lg p-2 outline-light-secondary border border-1 border-light-primary'
					/>
				</form>
			)}
		</>
	);
}
