"use client";

import { useState } from "react";
import { ImageSidebar, MainPreview, TextSection } from "@/components";
import { SILK_SLIP_DATA } from "@/constants";

/**
 * Home component serving as the main landing page.
 *
 * This is a 'Client Component' that manages the state of the active silk slip item
 * being showcased. It coordinates between the text details, the primary high-resolution
 * preview, and the navigational sidebar.
 */
export default function Home() {
	const [activeItem, setActiveItem] = useState(SILK_SLIP_DATA[0]);
	return (
		<div className={"flex justify-between h-screen overflow-hidden"}>
			<div className={"w-1/3 h-full"}>
				<TextSection
					key={activeItem.id}
					title={activeItem.title}
					description={activeItem.description}
				/>
			</div>
			<div className={"h-full"}>
				<MainPreview
					image={activeItem.image}
					title={activeItem.title}
				/>
			</div>
			<div className={"w-1/6 h-full"}>
				<ImageSidebar
					onSelect={setActiveItem}
					activeId={activeItem.id}
				/>
			</div>
		</div>
	);
}
