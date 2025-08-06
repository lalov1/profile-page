import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "I write maintainable, scalable code following best practices and modern standards."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Focus",
      description: "Creating beautiful, intuitive interfaces that provide excellent user experiences."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized applications with fast loading times and smooth interactions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Frontend Developer
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a dedicated frontend developer with a passion for creating exceptional web experiences. 
              With expertise in React and Tailwind CSS, I transform ideas into responsive, interactive, 
              and visually appealing applications.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              My journey in web development has equipped me with a deep understanding of modern 
              frontend technologies, user experience principles, and performance optimization. 
              I love solving complex problems and continuously learning new technologies to 
              stay at the forefront of web development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View My Projects
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
