"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ML-based Workout Recommendation System",
    description: "A mobile application that uses machine learning to recommend personalized workout routines based on user preferences and fitness goals.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Avellanda-Stoikov Market Making System",
    description: "A self-hosted market making system for cryptocurrencies based on the paper by Avellanda and Stoikov.",
    image: "/images/projects/2.png",
    tag: ["All", "Misc"],
    gitUrl: "/", // Put in the paper link
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Ray Tracer",
    description: "Developed a path tracer using C++, focusing on indirect lighting for high-quality images without external APIs.",
    image: "/images/projects/3.png",
    tag: ["All", "Misc"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "E-Commerce Store",
    description: "An online store built with Next.js and FastAPI for Muhammadiyah Welfare Home. Allowing for in-store credits, auctions and store management.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio Managment System",
    description: "A web application built with Flask and IBKR API for automated managing portfolios and investments of multiple IBKR accounts with portfolio rebalancing and risk management.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Friendly Betting System",
    description: "A web application built with Next.js and FastAPI for creating and managing friendly betting pools.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Misc"
          isSelected={tag === "Misc"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
