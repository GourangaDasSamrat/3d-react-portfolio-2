import { CTA, SEO } from "../components";
import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <SEO
        title="About | Gouranga Das Samrat"
        description="Learn about Gouranga Das Samrat's journey, skills, and professional experience in frontend development and React.js"
        name="Gouranga Das Samrat"
        type="profile"
      />

      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Gouranga
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Frontend Web Developer based in Bangladesh, specializing in technical
          education through hands-on learning and building applications.
        </p>

        <div className="mt-4">
          <a
            href="/cv.pdf"
            download="GourangaDasSamrat_CV.pdf"
            className="btn hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
