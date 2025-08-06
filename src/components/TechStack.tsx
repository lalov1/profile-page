import React from 'react';

interface TechItem {
  name: string;
  level: number; // 1-5 scale
  category: string;
}

const TechStack: React.FC = () => {
  const technologies: TechItem[] = [
    // Frontend Frameworks
    { name: 'React', level: 5, category: 'Frontend' },
    { name: 'Next.js', level: 4, category: 'Frontend' },
    { name: 'Vue.js', level: 3, category: 'Frontend' },
    
    // Languages
    { name: 'JavaScript', level: 5, category: 'Languages' },
    { name: 'TypeScript', level: 4, category: 'Languages' },
    { name: 'HTML5', level: 5, category: 'Languages' },
    
    // Styling
    { name: 'Tailwind CSS', level: 5, category: 'Styling' },
    { name: 'CSS3', level: 5, category: 'Styling' },
    { name: 'SASS', level: 4, category: 'Styling' },
    { name: 'Styled Components', level: 4, category: 'Styling' },
    
    // Tools & Others
    { name: 'Git', level: 4, category: 'Tools' },
    { name: 'Webpack', level: 3, category: 'Tools' },
    { name: 'Redux', level: 4, category: 'State Management' },
    { name: 'GraphQL', level: 3, category: 'APIs' },
    { name: 'REST APIs', level: 4, category: 'APIs' },
  ];

  const categories = ['Frontend', 'Languages', 'Styling', 'State Management', 'APIs', 'Tools'];

  const getLevelColor = (level: number) => {
    switch (level) {
      case 5: return 'bg-green-500';
      case 4: return 'bg-blue-500';
      case 3: return 'bg-yellow-500';
      case 2: return 'bg-orange-500';
      case 1: return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  const getLevelText = (level: number) => {
    switch (level) {
      case 5: return 'Expert';
      case 4: return 'Advanced';
      case 3: return 'Intermediate';
      case 2: return 'Beginner';
      case 1: return 'Learning';
      default: return 'Unknown';
    }
  };

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My expertise in modern web technologies, frameworks, and tools that I use 
            to create exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categoryTechs = technologies.filter(tech => tech.category === category);
            if (categoryTechs.length === 0) return null;
            
            return (
              <div key={category} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {category}
                </h3>
                <div className="space-y-4">
                  {categoryTechs.map((tech, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{tech.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full text-white ${getLevelColor(tech.level)}`}>
                          {getLevelText(tech.level)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getLevelColor(tech.level)}`}
                          style={{ width: `${(tech.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Technologies Highlight */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Primary Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Tailwind CSS', 'TypeScript', 'Next.js'].map((tech) => (
              <div key={tech} className="bg-primary-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
