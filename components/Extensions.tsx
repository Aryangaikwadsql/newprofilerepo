import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

import { extensions } from "@/data";
import { Button } from "./ui/MovingBorders";

const Extensions = () => {
	return (
		<div className="py-20 w-full">
			<h1 className="heading">
				My <span className="text-mustard">Extensions</span>
			</h1>

			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{extensions.map((card) => (
					<Button
						key={card.id}
						duration={Math.floor(Math.random() * 10000) + 10000}
						borderRadius="1.75rem"
						style={{
							background: "rgb(245,245,245)",
							backgroundColor: "linear-gradient(135deg, rgba(245,245,245,1) 0%, rgba(220,220,220,1) 50%, rgba(200,200,200,1) 100%)",
							borderRadius: `calc(1.75rem* 0.96)`,
						}}
						className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 lg:col-span-2 lg:col-start-2"
					>
						<div className="flex lg:flex-col flex-col lg:items-start p-3 py-6 md:p-5 lg:p-10 gap-4">
							<Image src={card.thumbnail} alt={card.thumbnail} className="lg:w-24 md:w-20 w-16" width={96} height={96} />
							<div className="w-full">
								<h1 className="text-start text-xl md:text-2xl font-bold text-black whitespace-pre-line">{card.title}</h1>
								<p className="text-start text-black mt-3 font-semibold text-sm">{card.desc}</p>
								<a href={card.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-mustard text-black rounded-lg font-semibold hover:bg-opacity-90 transition-all">
									Visit <FaExternalLinkAlt className="w-4 h-4 inline ml-2" />
								</a>
							</div>
						</div>
					</Button>
				))}
			</div>
		</div>
	);
};

export default Extensions;
