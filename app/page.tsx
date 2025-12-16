import { Button } from '@/components/Button';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[600px] flex items-center section-warm">
        <div className="container-custom py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-3 mb-6">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-accent-orange)'}}></div>
              <h1 className="text-5xl md:text-6xl leading-tight font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
                Patrick Gallagher
              </h1>
            </div>
            <p className="text-base mb-6" style={{color: 'var(--color-dark)'}}>
              Marketing Strategist & Brand Designer
            </p>
            <p className="text-base leading-relaxed max-w-3xl mb-8 border-l-2 pl-6" style={{borderColor: 'var(--color-accent-blue)', color: 'var(--color-dark)'}}>
              Marketing leader with a big picture mindset and a track record of helping brands sharpen their identity, clean up their systems, and show up with more clarity and confidence. I specialize in unifying brands, tightening messaging, and creating campaigns that drive action and loyalty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button size="lg">Read More</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="accent">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 section-dark">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl mb-16 font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-light)'}}>
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg backdrop-blur-sm relative group transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: 'rgba(255,255,255,0.18)', color: 'var(--color-light)'}}>
              <h3 className="text-lg font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--color-accent-orange)'}}>
                Brand Strategy
              </h3>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-light)'}}>
                Reshaping brand identity, tightening messaging, and aligning visual systems with strategic goals.
              </p>
            </div>

            <div className="p-8 rounded-lg backdrop-blur-sm relative group transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: 'rgba(255,255,255,0.18)', color: 'var(--color-light)'}}>
              <h3 className="text-lg font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--color-accent-blue)'}}>
                Design & Execution
              </h3>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-light)'}}>
                From concept to launch: branding, design, web, video, and multi-channel campaigns.
              </p>
            </div>

            <div className="p-8 rounded-lg backdrop-blur-sm relative group transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: 'rgba(255,255,255,0.18)', color: 'var(--color-light)'}}>
              <h3 className="text-lg font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--color-accent-green)'}}>
                Community & Campaigns
              </h3>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-light)'}}>
                Building presence, driving action and loyalty, and executing campaigns that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-20 section-warm">
        <div className="container-custom max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl mb-12 font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
            What I Do
          </h2>
          <div className="border-l-2 pl-6 space-y-6 text-base leading-relaxed" style={{borderColor: 'var(--color-accent-blue)', color: 'var(--color-dark)'}}>
            <p>
              Whether it's redesigning a brand from the ground up, launching event identities, rebuilding websites, or negotiating and executing multi-channel campaigns—I bring strategy, storytelling, and hands-on execution.
            </p>
            <p>
              I'm at my best when a brand needs someone to hone the voice, sharpen the visuals, tighten the workflows, deepen community presence, and align it all with the company's goals.
            </p>
            <p>
              I've done most of this work myself at some point—design, video, web, copy, digital—so I know what good looks like, what's realistic, and how to get a team from concept to execution while always remembering to enjoy the ride.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 section-dark">
        <div className="container-custom relative z-10">
          <div className="flex items-baseline gap-3 mb-12">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-accent-green)'}}></div>
            <h2 className="text-4xl md:text-5xl font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-light)'}}>Featured Work</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {projects.filter(p => p.featured).map((project) => {
              const accentColorMap = {
                orange: 'var(--color-accent-orange)',
                blue: 'var(--color-accent-blue)',
                green: 'var(--color-accent-green)',
              };
              const accentColor = accentColorMap[project.accentColor];
              
              return (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <div className="overflow-hidden rounded-lg relative group transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col shadow-md hover:shadow-xl" style={{backgroundColor: 'rgba(255,255,255,0.18)'}}>
                    {/* Featured Image */}
                    <div className="relative w-full h-64 overflow-hidden bg-dark">
                      <img
                        src={project.featuredImage.url}
                        alt={project.featuredImage.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-light)'}}>
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-6 flex-grow" style={{color: 'var(--color-light)'}}>
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-3 py-1 border border-opacity-30 text-xs font-medium rounded" style={{borderColor: accentColor, color: accentColor}}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" variant="accent">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
