import React from 'react';
import { ProjectCard } from './ProjectCards';
import { AnimatedSection } from './AnimatedSection';

export const Projects = ({ projects }) => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      
    </div>
  </section>
);