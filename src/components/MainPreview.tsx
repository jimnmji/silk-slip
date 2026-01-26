"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { useUnveil } from "@/hooks";

/**
 * Props for the MainPreview component.
 */
interface MainPreviewProps {
	/** The static image data for the primary product visual. */
	image: StaticImageData;
	/** The title used for image accessibility (alt text). */
	title: string;
}

/**
 * MainPreview component renders the primary high-resolution product image.
 *
 * This is a 'Client Component' that utilizes the `useUnveil` hook to manage
 * entrance animations for the image. It uses `priority` loading to ensure
 * the hero element is interactive as quickly as possible.
 */
export default function MainPreview({ image, title }: MainPreviewProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	useUnveil(imageRef, image);

	return (
		<section className="flex items-center justify-center h-full w-full">
			<div ref={containerRef} className="relative overflow-hidden">
				<Image
					ref={imageRef}
					src={image}
					alt={title}
					priority
					className="h-[90vh] w-auto object-contain"
				/>
			</div>
		</section>
	);
}
