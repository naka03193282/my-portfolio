const skills = ["Python", "C++", "TypeScript", "React", "Next.js"];

export default function Skills() {
  return (
    <section id="skills">
      <div className="bg-white rounded-lg shadow-lg p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b-2 border-gray-200 pb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-50 text-blue-700 font-semibold rounded-lg border border-blue-200 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
