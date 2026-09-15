import React from "react";
import Image from "next/image";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const ExperienceCard = ({ card }: { card: (typeof workExperience)[number] }) => (
	<Button
		key={card.id}
		duration={Math.floor(Math.random() * 10000) + 10000}
		borderRadius="1.75rem"
		style={{
			background: "rgb(245,245,245)",
			backgroundColor: "linear-gradient(135deg, rgba(245,245,245,1) 0%, rgba(220,220,220,1) 50%, rgba(200,200,200,1) 100%)",
			borderRadius: `calc(1.75rem* 0.96)`,
		}}
		className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
	>
		<div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
			<Image src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16" width={128} height={128} />
			<div className="lg:ms-5">
				<h1 className="text-start text-xl md:text-2xl font-bold text-black whitespace-pre-line">{card.title}</h1>
				<p className="text-start text-black mt-3 font-semibold">{card.desc}</p>
			</div>
		</div>
	</Button>
);

const Experience = () => {
	const [researchExperience, projectExperience, ...otherExperience] = workExperience;

	return (
		<div className="py-20 w-full">
			<h1 className="heading">
				My <span className="text-mustard">Experience</span>
			</h1>

			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				<div className="lg:col-span-2 flex flex-col items-stretch">
					<ExperienceCard card={researchExperience} />
					<div className="h-8 w-px bg-mustard/80 mx-auto" aria-hidden="true" />
					<ExperienceCard card={projectExperience} />
				</div>
				{otherExperience.map((card) => (
					<div key={card.id} className="lg:col-span-2 flex">
						<ExperienceCard card={card} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
