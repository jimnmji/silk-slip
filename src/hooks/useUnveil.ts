import type { StaticImageData } from "next/image";
import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// Corrected the type from string to RefObject
/**
 * @typedef {Object} UseUnveilProps
 * @property {RefObject<HTMLImageElement | null>} imageRef - A React RefObject pointing to the HTMLImageElement to be animated. This allows direct manipulation of the DOM element.
 * @property {StaticImageData} image - A StaticImageData object, typically from `next/image`, which serves as a dependency to re-trigger the animation when the image source changes.
 */

/**
 * @hook useUnveil
 * @description A client-side hook that applies a reveal animation and a subtle continuous zoom effect to an image element using GSAP.
 * @param {RefObject<HTMLImageElement | null>} imageRef - Reference to the image element.
 * @param {StaticImageData} image - The image data object.
 */
export const useUnveil = (
	imageRef: RefObject<HTMLImageElement | null>,
	image: StaticImageData,
) => {
	useGSAP(() => {
		const el = imageRef.current;
		if (!el) return;

		const timeline = gsap.timeline();

		// Reset previous styles before starting new animation
		gsap.set(el, { clearProps: "all" });

		timeline
			.fromTo(
				el,
				{
					opacity: 0,
					y: 60,
					scale: 1.15,
					clipPath: "inset(100% 0% 0% 0%)",
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					clipPath: "inset(0% 0% 0% 0%)",
					duration: 1.6,
					ease: "sine.in",
				},
			)
			.to(el, {
				// Subtle continuous zoom-out for that luxury feel
				scale: 1.05,
				duration: 10,
				ease: "linear",
				repeat: -1,
				yoyo: true,
			});
	}, [image, imageRef]); // Dependencies are tracked to re-trigger the animation when the image source or the ref instance changes, ensuring the animation applies to new content.
};
