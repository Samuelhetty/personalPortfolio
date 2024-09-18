import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

const Projects = () => {
    const [filter, setFilter] = useState('Featured');

    const projectData = [
        {
            image: 'images/projects/Aichatbot.png',
            title: 'HOBot ',
            tags: ['Botpress'],
            category: 'Featured',
            githubLink: '#',
            liveDemoLink: 'https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=619a770b-4644-4133-8ceb-4ca0fcfdf014',
        },
       
        {
            image: 'images/projects/mic.jpeg',
            title: 'TextConverter',
            tags: ['HTML', 'CSS', 'Vanilla JS', 'Text',],
            category: ['Javascript', 'Featured'],
            githubLink: 'https://github.com/Samuelhetty/textConverter',
            liveDemoLink: 'https://texts-converter.netlify.app',
        },
        {
            image: 'images/projects/activeme.png',
            title: 'ActiveMe (Fitness APP)',
            tags: ['HTML', 'CSS', 'JS', 'API', 'JSON', 'NodeJs'],
            category: ['Javascript', 'NodeJS'],
            githubLink: 'https://github.com/Samuelhetty/activeme',
            liveDemoLink: 'https://activeme.netlify.app',
        },
      
        {
            image: 'images/projects/morereaders.png',
            title: 'MoreReaders',
            tags: ['Python', 'React', 'Sass', 'Mongo DB ', 'API'],
            category: ['Python', 'Featured', 'React'],
            githubLink: 'https://www.github.com/Hovixen/MoreReaders',
            liveDemoLink: 'https://drive.google.com/file/d/1idfTs8jZ6bJb2sv-LrWwfk-sy8BkLVcX/view?usp=sharing',
        },


    ];

    const btns = [
        { label: 'Featured', value: 'Featured' },
        { label: 'Python', value: 'Python' },
        { label: 'Javascript', value: 'Javascript' },
        { label: 'React JS', value: 'React' },
        { label: 'NodeJS', value: 'NodeJS' },
        { label: 'Show All', value: 'All' },
    ];

    const filterProjects = (category) => {
        setFilter(category);
    };

    const filteredProjects = filter === 'All'
        ? projectData
        : projectData.filter(project => project.category.includes(filter));

    return (
        <div id='projects' className="p-4">
            <Heading heading={"Projects"} />
            <div className="flex flex-wrap justify-center mb-8">
                {btns.map((btn) => (
                    <button
                        key={btn.value}
                        className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${filter === btn.value
                            ? 'bg-blue-500 text-white'  // Active button styles
                            : 'hover:bg-gray-800 hover:text-white'  // Inactive button styles
                            }`}
                        onClick={() => filterProjects(btn.value)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {filteredProjects.map((project, index) => (
                    <Card
                        className="border border-black border-opacity-60"
                        key={index}
                        image={project.image}
                        title={project.title}
                        tags={project.tags}
                        btnText='GitHub'
                        btn2Text='Live Demo'
                        btn1Url={project.githubLink}
                        btn2Url={project.liveDemoLink}
                    />
                ))}
            </div>
            {/* <hr className="" /> */}
        </div>
    );
};

export default Projects;
