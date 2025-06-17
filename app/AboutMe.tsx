'use client';

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-8 py-24 bg-white text-gray-800 flex justify-center items-center"
    >
      <div className="max-w-4xl text-center space-y-8">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Me
        </h3>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Hi! I&apos;m John Aivanne Molato, a 4th-year IT student at Palawan State University. 
          I&apos;m an aspiring Frontend Developer and Software Tester with a passion for building user-friendly digital experiences.
          When I&apos;m not writing code or exploring new tech tools, you&apos;ll probably find me playing Dota 2.
          I also enjoy spending time with my friends, whether it&rsquo;s a casual hangout, a group gaming session, or just enjoying good conversations. 
          These moments outside of tech help me stay grounded and inspired.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I&rsquo;ve been focused on building a strong foundation in web development and software quality assurance by the help of AI.
          Thank you for taking the time to get to know me. I&rsquo;m always open to new challenges, collaborations, and conversations — feel free to reach out!
        </p>
      </div>
    </section>
  );
}
