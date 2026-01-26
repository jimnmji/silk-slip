import Lenis from "@studio-freight/lenis";
import { type RefObject, useEffect } from "react";

/**
 * @hook useLenis
 * @description A client-side hook that initializes and manages a Lenis smooth scrolling instance on a specified container.
 * @param {RefObject<HTMLDivElement | null>} ref - A React RefObject pointing to the HTMLDivElement that will act as the scroll wrapper for Lenis.
 */
export const useLenis = (ref: RefObject<HTMLDivElement | null>) => {
	useEffect(() => {
		const scrollElement = ref.current;
		if (!scrollElement) return;

		// Initialize Lenis on the specific container
		const lenis = new Lenis({
			wrapper: scrollElement, // The "window" of the scroll
			content: scrollElement.querySelector("div") as HTMLElement, // The actual long content
			lerp: 0.1, // Smoothness (0 to 1). Lower is smoother/heavier.
			duration: 1.5,
			smoothWheel: true,
		});

		// Create the animation loop
		let rfId: number;
		function raf(time: number) {
			lenis.raf(time);
			rfId = requestAnimationFrame(raf);
		}
		rfId = requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
			cancelAnimationFrame(rfId);
		};
	}, [ref]); // The 'ref' dependency ensures that Lenis is re-initialized if the target scroll element changes.
};
