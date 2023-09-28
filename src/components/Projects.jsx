import React from 'react'
import { useState, useEffect } from 'react'

const Projects = () => {
    const [projects, setProjects] = useState(0)
    const [onGoingPrjects, setOnGoingProjects] = useState(0)
    const [jobSuccess, setJobSuccess] = useState(0)

    let projectInterval, onGoingProjectInterval, jobSuccessInterval;

    useEffect(() => {
        projectInterval = setInterval(() => {
            setProjects(project => Math.min(project + 1, 520));
        }, 25);
    
        onGoingProjectInterval = setInterval(() => {
            setOnGoingProjects(project => Math.min(project + 1, 244));
        }, 50);
    
        jobSuccessInterval = setInterval(() => {
            setJobSuccess(job => Math.min(job + 1, 95));
        }, 90);
    
        // Cleanup function
        return () => {
            clearInterval(projectInterval);
            clearInterval(onGoingProjectInterval);
            clearInterval(jobSuccessInterval);
        };
    }, []);
    return (
    <>
        
        <div className="flex flex-row mx-auto"><h1 className='text-[#1b3d38] font-nibblack text-8xl mx-auto mb-4'>Projects</h1></div>
        <div className="container flex flex-col max-w-2xl mx-auto md:flex-row md:max-w-2xl gap-32 my-16">
            <div className="col-1">
                <h2 className='font-nibbold color-[#1b3d38] text-4xl text-center text-[#1b3d38]'>
                    {projects}+
                </h2>
                <p className="text-[#1b3d38] font-nibbold">
                    Total Projects
                </p>
            </div>

            <div className="col-2">
                <h2 className='font-nibbold color-[#1b3d38] text-4xl text-center text-[#1b3d38]'>
                    {onGoingPrjects}
                </h2>
                <p className="text-[#1b3d38] font-nibbold">
                    Ongoing Projects
                </p>
            </div>

            <div className="col-3">
                <h2 className='font-nibbold color-[#1b3d38] text-center text-4xl text-[#1b3d38]'>
                    {jobSuccess}%
                </h2>
                <p className="text-[#1b3d38] font-nibbold">
                    Job Success Ratio
                </p>
            </div>
        
        </div>
    
    </>
   ) }


export default Projects