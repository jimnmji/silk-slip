import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/**
 * GSAP Library Configuration
 *
 * Centralizes the registration and export of GSAP plugins to ensure consistent
 * animation behavior across the application. These tools are used for high-performance
 * scroll-driven animations and typography effects.
 */

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, useGSAP, SplitText };
