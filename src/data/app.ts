import { atom } from "jotai";

export type ImageURLKeys = "top" | "bottom";

type Position<T extends ImageURLKeys> = T;

type ImageURL = {
	[key in Position<ImageURLKeys>]?: string | null;
};

export const image_url_jotai = atom<ImageURL>({ top: null, bottom: null });

export const topics_jotai = atom<string[]>([]);

export const selected_topic_jotai = atom<string>("<YOUR TOPIC> ");

export const template_color_jotai = atom<string>("#5e17eb");

export type QuizData = (
	| { white: string }
	| { green: string }
	| { highlight: string }
)[];

export const selected_template_jotai = atom<QuizData>();

export const text_box_default_font_jotai = atom<number>(25);
