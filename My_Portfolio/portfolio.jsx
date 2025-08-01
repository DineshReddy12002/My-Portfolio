import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
      color: "tech-blue"
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: ["HTML5", "CSS3", "JavaScript"],
      color: "royal-purple"
    },
    {
      title: "Backend & Frameworks",
      icon: "⚙️",
      skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "Microservices"],
      color: "vibrant-coral"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "ORACLE", "SUPABASE"],
      color: "tech-blue"
    },
    {
      title: "DevOps & Tools",
      icon: "🚀",
      skills: ["Git", "Linux", "Cloud"],
      color: "royal-purple"
    },
    {
      title: "Emerging Technologies",
      icon: "🤖",
      skills: ["Generative AI", "Prompt Engineering", "Cloud Computing", "IoT"],
      color: "vibrant-coral"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-tech-pattern">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-space">
          <span className="text-gradient-tech">Technical</span>
          <span className="text-gradient-purple"> Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-card p-6 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className={`text-xl font-semibold text-${category.color}`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gradient-tech">
            Professional Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-royal-purple mb-2">Agile Development</h4>
              <p className="text-sm text-muted-foreground">Scrum, Kanban, Sprint Planning</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-semibold text-tech-blue mb-2">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">Debugging, Optimization, Innovation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-semibold text-vibrant-coral mb-2">Team Collaboration</h4>
              <p className="text-sm text-muted-foreground">Code Reviews, Mentoring, Leadership</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-semibold text-royal-purple mb-2">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">New Technologies, Best Practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
