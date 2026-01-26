"use client";

import { RiHeart3Fill } from "@remixicon/react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";
import { useReveal } from "@/hooks";

/**
 * Props for the TextSection component.
 */
interface TextSectionProps {
	/** The primary heading displayed in the section. */
	title: string;
	/** Detailed text providing context or information about the active item. */
	description: string;
}

/**
 * TextSection component displays descriptive information and social navigation.
 *
 * This 'Client Component' handles the textual representation of the active product.
 * It utilizes the `useReveal` hook to trigger entry animations whenever the
 * title or description props change, ensuring a dynamic user experience.
 */
export default function TextSection({ title, description }: TextSectionProps) {
	const currentYear = new Date().getFullYear();

	useReveal(title, description);

	return (
		<section className={"h-full w-full pl-10 pr-4 relative"}>
			<div className={"flex flex-col justify-center h-4/6"}>
				<h1 id="text-title" className={"text-8xl"}>
					{title}
				</h1>
				<p id="text-desc" className={"text-xl opacity-70 mt-6"}>
					{description}
				</p>
			</div>

			<div className={"absolute bottom-6"}>
				<div className={"flex space-x-4 mb-2"}>
					{SOCIAL_LINKS.map(({ id, href, icon: Icon, label }) => (
						<Link
							key={id}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
							className={
								"hover:-translate-y-1 duration-300 ease-in-out transition-all"
							}
						>
							<Icon />
						</Link>
					))}
				</div>

				<div className="w-full">
					<p className="text-sm text-foreground/70">
						&copy; {currentYear} rudra-xi. All rights reserved.
					</p>

					<p className="flex items-center space-x-4 text-sm text-foreground/50">
						Built with{" "}
						<RiHeart3Fill className="size-4 mx-2 text-accent fill-accent animate-pulse" />{" "}
						by{" "}
						<strong className="font-medium ml-1">rudra-xi</strong>.
					</p>
				</div>
			</div>
		</section>
	);
}
