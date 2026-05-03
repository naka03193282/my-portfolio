import { ReactNode } from "react";

const skills: { name: string; icon: string; label: ReactNode }[] = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: "C++" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js" },
  { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", label: <>Machine<br />Learning</> },
  { name: "Sensing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg", label: "Sensing" },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b-2 border-gray-200 pb-4">Skills</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 px-6 py-4"
            >
              <img src={skill.icon} alt={skill.name} width={40} height={40} />
              <span className={`text-blue-700 font-semibold text-sm text-center h-8 flex items-center${skill.name === "Machine Learning" ? " mt-2" : ""}`}>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
