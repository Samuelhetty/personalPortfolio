import IconCloud from '@/components/magicui/IconCloud';


import React from 'react'
import Heading from './Heading'

const slugs = [
    "linux",
    "ubuntu",
    "terminal", "html5",
    "css3",
    "tailwindcss",
    "bootstrap",
    "javascript",
    "typescript",
    "java",
    "python",
    "linux",
    "cplusplus",
    "react",
    "android",
    "nodedotjs",
    "nextdotjs",
    "MongoDB",
    "MySQL",
    "firebase",
    "vercel",
    "git",
    "github",
    "gitlab",
    "githubcopilot",
    "visualstudiocode",
];


const Skills = () => {
    return (
        <div id="skills" className="py-16 bg-white">
            <Heading heading={"Skills"} subHeading={"skills i have"} />
            <div className="flex flex-col md:flex-row w-full min-h-screen p-6 md:p-10">
                {/* Left Side: Skills Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 animate-fade-in">
                    <div className="p-4 md:p-6 rounded-full animate-spin-slow">
                        <IconCloud iconSlugs={slugs} />
                    </div>
                </div>

                {/* Right Side: Skills List */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-6 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">Skills and Expertise</h2>
                    <div className="space-y-3 md:space-y-4 pr-0 md:pr-16">
                        <SkillItem skill="JavaScript" stars={4} />
                        <SkillItem skill="Html" stars={5} />
                        <SkillItem skill="Sass" stars={4} />
                        <SkillItem skill="Tailwind CSS" stars={4} />
                        <SkillItem skill="React JS" stars={4} />
                        <SkillItem skill="Next JS" stars={3} />
                        <SkillItem skill="GitHub" stars={5} />
                        <SkillItem skill="Vercel" stars={3} />
                        <SkillItem skill="Netlify" stars={3} />
                        <SkillItem skill="Python" stars={4} />
                        <SkillItem skill="Flask" stars={4} />
                        <SkillItem skill="Django" stars={4} />
                        <SkillItem skill="Node JS" stars={4} />
                        <SkillItem skill="Express Js" stars={4} />
                        <SkillItem skill="MySQL" stars={4} />
                        <SkillItem skill="MongoDB" stars={4} />
                    </div>
                </div>
            </div>
        </div>
    );
};


const SkillItem = ({ skill, stars }) => (
    <div className="flex items-center justify-between p-2 rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md animate-fade-in-up">
        <span className="text-lg font-medium text-gray-800">{skill}</span>
        <div className="flex text-black">
            <span className="inline-block">
                {'★'.repeat(stars)}
            </span>
            <span className="inline-block">
                {'☆'.repeat(5 - stars)}
            </span>
        </div>
    </div>
);

export default Skills


