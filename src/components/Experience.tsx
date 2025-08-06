import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: [
        "Led development of responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized application performance, reducing load times by 40%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      duration: "2020 - 2022",
      description: [
        "Developed and maintained multiple client-facing web applications",
        "Implemented responsive designs ensuring cross-browser compatibility",
        "Integrated RESTful APIs and managed state with Redux",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Redux", "REST APIs"]
    },
    {
      title: "Junior Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2019 - 2020",
      description: [
        "Built interactive user interfaces using modern JavaScript frameworks",
        "Collaborated with backend team to integrate frontend with APIs",
        "Contributed to the development of company's main product platform",
        "Learned and applied best practices in web development"
      ],
      technologies: ["React", "JavaScript", "HTML5", "SASS", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey in frontend development, building impactful solutions 
            and growing my expertise in modern web technologies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg md:text-xl text-primary-600 font-semibold mb-2">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex flex-col md:items-end">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm md:text-base">{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm md:text-base">{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
