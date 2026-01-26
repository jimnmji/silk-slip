import { gsap, SplitText, useGSAP } from "@/lib/gsap";

/**
 * @hook useReveal
 * @description A client-side hook that orchestrates a text reveal animation for a title and a description using GSAP and SplitText.
 * @param {string} title - The title text to be animated. This value is used to determine when to re-trigger the animation.
 * @param {string} description - The description text to be animated. This value is used to determine when to re-trigger the animation.
 */
export const useReveal = (title: string, description: string) => {
	useGSAP(() => {
		const splitTitle = new SplitText("#text-title", {
			type: "chars, words",
		});
		const splitDesc = new SplitText("#text-desc", { type: "lines" });

		const timeline = gsap.timeline();

		timeline
			.from(splitTitle.chars, {
				opacity: 0,
				y: 50,
				stagger: 0.02,
				ease: "back.in",
				duration: 1,
			})
			.from(
				splitDesc.lines,
				{
					opacity: 0,
					x: 20,
					ease: "back.in",
					stagger: 0.1,
					duration: 0.8,
				},
				"-=0.6",
			);

		return () => {
			splitTitle.revert();
			splitDesc.revert();
		};
	}, [title, description]); // Dependencies are tracked to re-run the animation if the title or description text content changes.
};
