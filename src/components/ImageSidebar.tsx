"use client";

import Image from "next/image";
import { useRef } from "react";

import { SILK_SLIP_DATA, type SilkSlipItems } from "@/constants";
import { useLenis } from "@/hooks";

/**
 * Props for the ImageSidebar component.
 */
interface ImageSidebarProps {
	/** The unique identifier of the currently active silk slip item. */
	activeId: number;
	/** Callback function triggered when a new item is selected from the list. */
	onSelect: (item: SilkSlipItems) => void;
}

/**
 * ImageSidebar component provides a vertical navigation menu of product thumbnails.
 *
 * This 'Client Component' allows users to switch between different items in the collection.
 * It integrates with `useLenis` for smooth, momentum-based scrolling within the sidebar
 * and applies visual filters (grayscale/scale) to distinguish the active state from
 * hovered or inactive items.
 */
export default function ImageSidebar({
	activeId,
	onSelect,
}: ImageSidebarProps) {
	const scrollRef = useRef<HTMLDivElement>(null);

	useLenis(scrollRef);
	return (
		<section
			ref={scrollRef}
			className="h-screen overflow-y-auto no-scrollbar"
		>
			<div className="flex flex-col space-y-8 p-4">
				{SILK_SLIP_DATA.map((item) => (
					<button
						key={item.id}
						type="button"
						onClick={() => onSelect(item)}
						className="group cursor-pointer"
					>
						<div
							className={`relative h-60 w-40 grayscale-75 overflow-hidden transition-all duration-700 ease-in-out ${
								activeId === item.id
									? "scale-95 grayscale-50"
									: "group-hover:grayscale-25"
							}`}
						>
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover transition-all duration-1000 group-hover:scale-110"
								sizes="160px"
							/>
						</div>
					</button>
				))}
			</div>
		</section>
	);
}
