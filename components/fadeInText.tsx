"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export const FadeInText = ({
	word,
	delay,
	className = "",
}: {
	word: string;
	delay: number;
	className?: string;
}) => {
	return (
		<motion.span
			className={clsx(className)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				delay: delay * 0.1,
				duration: 2,
				easings: ["easeIn"],
			}}
		>
			{word}
		</motion.span>
	);
};
