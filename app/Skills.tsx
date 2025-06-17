'use client';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPhp,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-8 py-24 bg-gray-50 text-gray-800 flex flex-col items-center"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
        Technology & Experiences
      </h3>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Tech Stack */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Tech Stack</h4>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
              { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
              { name: 'React.js', icon: <SiReact className="text-cyan-500" /> },
              { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
              { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
              { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
              { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> },
              { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
              { name: 'CSS', icon: <SiCss3 className="text-blue-600" /> },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center border rounded-lg p-4 bg-white shadow hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-sm font-bold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Work Experience</h4>
          <div className="space-y-8">
            {[
              {
                title: 'Vibe Coder at Palawan State University',
                role: 'Vice President for External Campuses',
                date: '2020 - Present',
                desc:
                  'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
              },
              {
                title: 'Vibe Coder at Palawan State University',
                role: 'Vice President for External Campuses',
                date: '2018 - 2020',
                desc:
                  'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
              },
              {
                title: 'Vibe Coder at Palawan State University',
                role: 'Vice President for External Campuses',
                date: '2018 - 2020',
                desc:
                  'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
              },
            ].map((exp, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1">
                  <span className="block w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                <div>
                  <h5 className="text-md font-bold text-gray-900">{exp.title}</h5>
                  <p className="text-sm text-gray-600">
                    {exp.role} | {exp.date}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
