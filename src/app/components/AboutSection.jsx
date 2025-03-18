"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
          <ul className="list-disc pl-6 grid grid-cols-2 gap-x-4">
            <li>Python</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>C++</li>
            <li>C</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Web Frameworks</h3>
          <ul className="list-disc pl-6 grid grid-cols-2 gap-x-4">
            <li>Flask</li>
            <li>Django</li>
            <li>FastAPI</li>
            <li>Express</li>
            <li>React</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Database & ORM</h3>
          <ul className="list-disc pl-6">
            <li>PostgreSQL</li>
            <li>Sequelize</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Technologies</h3>
          <ul className="list-disc pl-6">
            <li>Node.js</li>
            <li>PyTorch</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-medium">National University of Singapore</h3>
          <p className="text-sm text-gray-600">2023 - 2026</p>
          <p>Bachelors of Computing, Computer Science</p>
        </div>
        
        <div>
          <h3 className="font-medium">Technical University of Munich</h3>
          <p className="text-sm text-gray-600">2025 - 2026</p>
          <p>Exchange Program</p>
        </div>
        
        <div>
          <h3 className="font-medium">NUS Overseas College</h3>
          <p className="text-sm text-gray-600">Program Participant</p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <div className="border-l-2 border-gray-300 pl-4">
          <h3 className="font-medium">AWS Cloud Practitioner</h3>
          <p className="text-sm text-gray-600">Amazon Web Services</p>
        </div>
        
        <div className="border-l-2 border-gray-300 pl-4">
          <h3 className="font-medium">Google Professional Cloud Developer</h3>
          <p className="text-sm text-gray-600">Google Cloud Platform</p>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about-image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Computer Science student and Full Stack Developer with expertise in building AI-integrated web applications and algorithmic trading systems. 
          My passion lies at the intersection of machine learning and software development, where I&apos;ve built PyTorch-powered solutions for personalized workout recommendations and LSTM models for financial trading algorithms. 
          Currently pursuing a double major in Computer Science and Mathematics at NUS, I complement my academic pursuits with practical applications in quantitative finance and web development. I am eager to leverage my diverse skill set to solve complex technical challenges and create innovative solutions that deliver measurable impact.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
