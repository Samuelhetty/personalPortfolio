/*import React, { useState } from 'react';
import Card from './Card';
import Heading from './Heading'

const Certificates = () => {
    const [filter, setFilter] = useState('software engineering');

    const certificateData = [
        {
            image: 'images/certificates/alx.jpg',
            title: 'Software Engineer',
            tags: ['Responsive Design', 'Web', 'Mobile','Database', 'Version Control', 'OS'],
            category: ['software engineering', 'Q.A'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/hr.jpg',
            title: 'Human Resource Management',
            tags: ['Communication', 'Leadership', 'Decision making', 'Emotional intelligence'],
            category: ['HR'],
            githubLink: '#',
            liveDemoLink: '#',
        },
         {
            image: 'images/nysc.jpg',
            title: 'National Youth Service Corp',
            tags: ['Cordial Relationship','Communication', 'Unity'],
            category: ['software engineering', 'other'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/recommendation.jpg',
            title: 'Voluntary Services',
            tags: ['Hands-On Experience', 'Knowledge Sharing'],
            category: ['other'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/AIcert.jpeg',
            title: 'AI Career Essentials',
            tags: ['Machine Learning(ML)', 'Computer Vision(CV)', 'Generative AI tools','Natural Language Processing(NLP)'],
            category: ['software engineering'],
            githubLink: '#',
            liveDemoLink: '#',
        },
    ];
    const btns = [
        { label: 'Software Engineering', value: 'software engineering' },
        { label: 'Human Resource Management', value: 'HR' },
        { label: 'Quality Assurance', value: 'Q.A' },
        { label: 'Other', value: 'other' },
        { label: 'All', value: 'All' },
    ]

    const filterCertificates = (category) => {
        setFilter(category);
    };

    const filteredCertificates = filter === 'All'
        ? certificateData
        : certificateData.filter(certificate => certificate.category.includes(filter));

    return (
        <div id='certificates' className="p-6">
        <Heading heading={"Certifications"} />
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {btns.map((btn) => (
                    <button
                        key={btn.value}
                        className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${filter === btn.value
                            ? 'bg-blue-500 text-white'  // Active button styles
                            : 'hover:bg-gray-800 hover:text-white'  // Inactive button styles
                            }`}
                        onClick={() => filterCertificates(btn.value)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap  justify-center gap-6">
                {filteredCertificates.map((certificate, index) => (
                    <Card
                        key={index}
                        image={certificate.image}
                        title={certificate.title}
                        tags={certificate.tags}
                        btnText={'View Certificate'}
                        btn2Text={false}
                        btn1Url={certificate.githubLink}
                        btn2Url={certificate.liveDemoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Certificates;*/

import React, { useState } from 'react';
import Card from './Card';
import Modal from './cardModal';
import Heading from './Heading';

const Certificates = () => {
    const [filter, setFilter] = useState('software engineering');
    const [selectedCertificate, setSelectedCertificate] = useState(null); // To store the certificate being viewed
    const [isModalOpen, setIsModalOpen] = useState(false); // To control the modal visibility

    const certificateData = [
        {
            image: 'images/certificates/alx.jpg',
            title: 'Software Engineer',
            tags: ['Responsive Design', 'Web', 'Mobile', 'Database', 'Version Control', 'OS'],
            category: ['software engineering', 'Q.A'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/hr.jpg',
            title: 'Human Resource Management',
            tags: ['Communication', 'Leadership', 'Decision making', 'Emotional intelligence'],
            category: ['HR'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/nysc.jpg',
            title: 'National Youth Service Corp',
            tags: ['Cordial Relationship', 'Communication', 'Unity'],
            category: ['software engineering', 'other'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/recommendation.jpg',
            title: 'Voluntary Services',
            tags: ['Hands-On Experience', 'Knowledge Sharing'],
            category: ['other'],
            githubLink: '#',
            liveDemoLink: '#',
        },
        {
            image: 'images/certificates/AIcert.jpeg',
            title: 'AI Career Essentials',
            tags: ['Machine Learning(ML)', 'Computer Vision(CV)', 'Generative AI tools', 'Natural Language Processing(NLP)'],
            category: ['software engineering'],
            githubLink: '#',
            liveDemoLink: '#',
        },
    ];

    const btns = [
        { label: 'Software Engineering', value: 'software engineering' },
        { label: 'Human Resource Management', value: 'HR' },
        { label: 'Quality Assurance', value: 'Q.A' },
        { label: 'Other', value: 'other' },
        { label: 'All', value: 'All' },
    ];

    const filterCertificates = (category) => {
        setFilter(category);
    };

    const filteredCertificates = filter === 'All'
        ? certificateData
        : certificateData.filter(certificate => certificate.category.includes(filter));

    const openModal = (certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    return (
        <div id='certificates' className="p-6">
            <Heading heading={"Certifications"} />
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {btns.map((btn) => (
                    <button
                        key={btn.value}
                        className={`m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black ${filter === btn.value
                            ? 'bg-blue-500 text-white'  // Active button styles
                            : 'hover:bg-gray-800 hover:text-white'  // Inactive button styles
                            }`}
                        onClick={() => filterCertificates(btn.value)}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {filteredCertificates.map((certificate, index) => (
                    <Card
                        key={index}
                        image={certificate.image}
                        title={certificate.title}
                        tags={certificate.tags}
                        btnText={'View Certificate'}
                        btn2Text={false}
                        btn1Url={certificate.githubLink}
                        btn2Url={certificate.liveDemoLink}
                        onClick={() => openModal(certificate)} // Pass certificate data to modal
                    />
                ))}
            </div>

            {/* Modal for viewing certificate */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                certificate={selectedCertificate}
            />
        </div>
    );
};

export default Certificates;

