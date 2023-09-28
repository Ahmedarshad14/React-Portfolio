import React from "react";

const Hero = () => {
	return (
		<>
			<div className="h-screen flex flex-col md:flex-row bg-[#dbe7e8]">
				<div className="flex flex-col md:flex-row h-3/4 w-screen">
					<div className="w-full md:w-1/2 flex items-center justify-center">
						<h1 className="text-5xl text-[#1b3d38] font-nibbold">
							Crafting Digital Excellence, One Line of Code at a Time.
						</h1>
					</div>
					<div className="w-full md:w-1/2 flex items-center justify-center">
						<img
							src="/src/assets/tech-bg.jpg"
							alt=""
							className="rounded-full pt-40 pb-40"
						/>
					</div>
				</div>
				
			</div>
		</>
	);
};

export default Hero;
