import { Button } from '@/components/Button';

export default function Home() {
  return (
    <main>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 100% center; }
        }
        .gradient-text:hover {
          background: linear-gradient(to right, var(--color-accent-orange), var(--color-warm-light), var(--color-accent-orange));
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 1s ease-in-out infinite alternate;
          transition: background 2s ease-in-out;
        }
      `}</style>
      {/* Hero Section */}
      <section className="min-h-[600px] flex items-center" style={{background: 'linear-gradient(to right, var(--color-warm-light), var(--color-warm-lighter))'}}>
        <div className="container-custom py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-3 mb-6">
              <div className="w-7 h-7 flex items-center justify-center" style={{backgroundColor: 'var(--color-accent-orange)', clipPath: 'polygon(0% 0%, 0% 100%, 100% 50%)'}}></div>
              <h1 className="text-5xl md:text-6xl leading-tight font-semibold gradient-text" style={{fontFamily: "'Fraunces', serif"}}>
                Pat
              </h1>
              <h1 className="text-5xl md:text-6xl leading-tight font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-accent-orange)'}}>
                Gallagher
              </h1>
            </div>
            <p className="text-base mb-6 ml-5" style={{color: 'var(--color-dark)'}}>
              Marketing Strategist & Brand Designer
            </p>
            <p className="text-base leading-relaxed max-w-3xl mb-8 pl-6" style={{color: 'var(--color-dark)'}}>
              Marketing leader with a big picture mindset and a track record of helping brands sharpen their identity, clean up their systems, and show up with more clarity and confidence. I specialize in unifying brands, tightening messaging, and creating campaigns that drive action and loyalty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about">
                <Button size="lg">Read More</Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="accent">Get in Touch</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section id="expertise" className="py-20 section-dark">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl mb-16 font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-light)'}}>
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl backdrop-blur-sm relative group transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: 'rgba(255,255,255,0.18)', color: 'var(--color-light)'}}>
              <h3 className="text-lg font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--color-accent-orange)'}}>
                Brand Strategy
              </h3>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-light)'}}>
                Reshaping brand identity, tightening messaging, and aligning visual systems with strategic goals.
              </p>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-sm relative group transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: 'rgba(255,255,255,0.18)', color: 'var(--color-light)'}}>
              <h3 className="text-lg font-semibold mb-4 transition-colors duration-300" style={{color: 'var(--color-accent-blue)'}}>
                Design & Execution
              </h3>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-light)'}}>
                From concept to launch: branding, design, web, video, and multi-channel campaigns.
              </p>
            </div>

            <div className="p-8 rounded-2xl backdrop-blur-sm relative group transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: 'rgba(255,255,255,0.18)', color: 'var(--color-light)'}}>
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
      <section id="about" className="py-20 section-warm">
        <div className="container-custom max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl mb-12 font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
            What I Do
          </h2>
          <div className="border-l-2 pl-6 space-y-6 text-base leading-relaxed" style={{color: 'var(--color-dark)'}}>
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

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{backgroundColor: 'var(--color-light)'}}>
        <div className="container-custom max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl mb-8 font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
            Get in Touch
          </h2>
          <p style={{color: 'var(--color-dark)'}}>
            <a href="mailto:pat@overviewcreative.com" style={{color: 'var(--color-accent-orange)', textDecoration: 'underline'}}>pat@overviewcreative.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
