import React from "react";

const Categories = () => {
	return (
		<>
			<section id="categories" className="bg-green-100 mt-0 pt-6">
				<div className="container max-w-7xl mx-auto my-32 px-6">
                    <div className="flex justify-center md:justify-between mb-20">
                        <h2 className="text-4xl text-center md:text-left font-nibbold text-[#1b3d38] md:text-6xl">Our Services</h2>
                        <button className="hidden md:block btn">
                        Contact Now</button>
                    
                        </div>
                        <div className="flex flex-col justfy-between w-full space-y-6 text-2xl .text-[#1b3d38] md:flex-row md:space-y-0 md:space-x-8">
                        <div className="group relative overflow-hidden justify-center">
                            <img className='w-full duration-200 md:block' src="./public/1.png" alt="" />
                            <h5 className="absolute inset-0 top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-green-100 text-center font-nibbold text-[#1b3d38]">Web Development<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officiis!</h5>
                            
                            </div>

                            <div className="group relative overflow-hidden justify-center">
                            <img className='w-full duration-200 md:block' src="./public/2.png" alt="" />
                            <h5 className="absolute inset-0 top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-green-100 text-center font-nibbold text-[#1b3d38]">Web Development<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officiis!</h5>
                            
                            </div>


                            <div className="group relative overflow-hidden justify-center">
                            <img className='w-full duration-200 md:block' src="./public/3.png" alt="" />
                            <h5 className="absolute inset-0 top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-green-100 text-center font-nibbold text-[#1b3d38]">Web Development<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officiis!</h5>
                            
                            
                        </div>
                        </div>

                        
                </div>
			</section>
		</>
	);
};

export default Categories;
