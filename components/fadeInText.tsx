"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const FadeInText = ({ word, delay }: { word: string; delay: number }) => {
	return (
		<motion.span
			className=""
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
