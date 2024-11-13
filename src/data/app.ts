import { atom } from "jotai";

export type ImageURLKeys = "top" | "bottom";

type Position<T extends ImageURLKeys> = T;

type ImageURL = {
	[key in Position<ImageURLKeys>]?: string | null;
};

export const image_url_jotai = atom<ImageURL>({ top: null, bottom: null });
