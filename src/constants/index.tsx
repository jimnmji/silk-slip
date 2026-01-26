import { RiGithubFill, RiLinkedinFill, RiProfileFill } from "@remixicon/react";
import type { StaticImageData } from "next/image";
import {
    disha_1,
    disha_2,
    disha_3,
    disha_4,
    disha_5,
    disha_6,
    disha_7,
    disha_8,
    disha_9,
    disha_10,
    disha_11,
} from "@/assets/images";

export interface SilkSlipItems {
	id: number;
	image: StaticImageData;
	title: string;
	description: string;
}

export const SILK_SLIP_DATA: SilkSlipItems[] = [
	{
		id: 1,
		image: disha_1,
		title: "Golden Hour Serenity",
		description:
			"A moment of quiet repose, where soft lighting accentuates a profile of effortless elegance and luminous warmth.",
	},
	{
		id: 2,
		image: disha_2,
		title: "The Cinematic Gaze",
		description:
			"Capturing a piercing, cinematic intensity that balances vulnerability with an undeniable sense of self-assurance.",
	},
	{
		id: 3,
		image: disha_3,
		title: "Crimson Fluidity",
		description:
			"The interplay of silk and shadow. This backless silhouette celebrates the art of movement and the grace of refined fashion.",
	},
	{
		id: 4,
		image: disha_4,
		title: "Abstract Form",
		description:
			"Focusing on the architectural beauty of the human silhouette, framed by cascading hair and the vibrant energy of red silk.",
	},
	{
		id: 5,
		image: disha_5,
		title: "Statuesque Presence",
		description:
			"A full-length study in poise. The floor-sweeping hemline and minimal backdrop create a timeless, editorial aesthetic.",
	},
	{
		id: 6,
		image: disha_6,
		title: "Grounded Elegance",
		description:
			"Breaking the traditional frame with a low-angle pose that emphasizes the weightless quality of the slip-dress fabric.",
	},
	{
		id: 7,
		image: disha_7,
		title: "Luminous Detail",
		description:
			"A focus on the 'minimal glam' philosophy—dewy skin, subtle metallics, and the bold contrast of the scarlet palette.",
	},
	{
		id: 8,
		image: disha_8,
		title: "Shadow & Light",
		description:
			"The grain and texture of the film-inspired aesthetic add a nostalgic, tactile depth to this over-the-shoulder glance.",
	},
	{
		id: 9,
		image: disha_9,
		title: "The Final Stitch",
		description:
			"A candid-style capture focusing on the fall of the fabric, proving that the simplest cuts often leave the deepest impact.",
	},
	{
		id: 10,
		image: disha_10,
		title: "Ethereal Silhouette",
		description:
			"Seated in a frame of soft shadows, the backless design becomes the focal point of a modern, sophisticated narrative.",
	},
	{
		id: 11,
		image: disha_11,
		title: "The Scarlet Encore",
		description:
			"A final, lingering look that defines the Silk-Slip narrative—where modern sophistication meets a bold, unapologetic classicism.",
	},
];

export interface SocialLinks {
	id: number;
	href: string;
	icon: React.ElementType;
	label: string;
}
export const SOCIAL_LINKS: SocialLinks[] = [
	{
		id: 1,
		href: "https://github.com/rudra-xi",
		icon: RiGithubFill,
		label: "View GitHub Profile",
	},
	{
		id: 2,
		href: "https://www.linkedin.com/in/goutam-rudraxi/",
		icon: RiLinkedinFill,
		label: "Connect on LinkedIn",
	},
	{
		id: 3,
		href: "https://rudra-geek-nook.vercel.app/",
		icon: RiProfileFill,
		label: "Visit Portfolio Website",
	},
];
