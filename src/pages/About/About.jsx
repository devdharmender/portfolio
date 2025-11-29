import HeroImg from "@/assets/images/hero.png";
import Indev from "@/assets/images/indev.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-4xl text-white">
            Software Developer - Laravel
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent border border-white border-2">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block p-2"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Dharmender Kumar, a Laravel developer passionate about building fast, scalable, and user-friendly web applications. I specialize in creating efficient backend systems, relational databases, and optimized APIs using Laravel, CodeIgniter, and MySQL.{" "}
                <span className="font-bold text-white">
                  As the Software Developer at the Indev Consultency 
                </span>
              </p>
              <p className="text-white">
                I’ve worked on projects ranging from auto-repair CRMs to health monitoring platforms and rural innovation systems—focusing on clean architecture, performance, and real-world problem-solving. I'm continuously growing my skills toward full-stack development and love creating solutions that make technology simpler and more impactful.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and problem-solver, focused on creating meaningful digital solutions. At Indev Consultancy Pvt. Ltd., I work on improving backend systems, optimizing data workflows, and building scalable, reliable applications. I’m always exploring new ideas and tools to contribute to the developer community and make a real impact.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Dharmender Kumar, Software Developer at
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={Indev}
                        alt="Indev Logo"
                        height="20"
                        width="60"
                      />
                      <span className="text-white">Indev Consultency</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
