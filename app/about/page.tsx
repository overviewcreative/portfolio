import { GeometricAccents, SectionDivider } from '@/components/GeometricAccents';

export default function AboutPage() {
  return (
    <div className="min-h-screen relative" style={{backgroundColor: 'var(--color-light)'}}>
      <GeometricAccents />
      
      <div className="container-custom py-16 border-b relative z-10" style={{borderColor: 'rgba(26, 35, 50, 0.1)'}}>
        <div className="flex items-baseline gap-4 mb-4">
          <div className="w-2 h-2" style={{backgroundColor: 'var(--color-accent-blue)'}}></div>
          <h1 className="text-6xl font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>Patrick Gallagher</h1>
        </div>
        <p className="text-lg mt-4" style={{color: 'var(--color-dark)'}}>Marketing Strategist & Brand Designer</p>
      </div>

      <div className="container-custom py-16 max-w-3xl relative z-10">
        {/* Contact Info */}
        <div className="mb-16 border p-8 rounded-lg group relative transition-all duration-300 hover:-translate-y-1" style={{backgroundColor: 'rgba(26, 35, 50, 0.02)', borderColor: 'rgba(26, 35, 50, 0.1)'}}>
          <h2 className="text-2xl font-semibold mb-6" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>Contact</h2>
          <div className="space-y-3 text-sm" style={{color: 'var(--color-dark)'}}>
            <p><span className="font-semibold">Location:</span> Rehoboth Beach, DE</p>
            <p><span className="font-semibold">Phone:</span> <a href="tel:3026821702" className="underline hover:no-underline transition-colors duration-300" style={{color: 'var(--color-accent-blue)'}}>302.682.1702</a></p>
            <p><span className="font-semibold">Email:</span> <a href="mailto:pat@overviewcreative.com" className="underline hover:no-underline transition-colors duration-300" style={{color: 'var(--color-accent-blue)'}}>pat@overviewcreative.com</a></p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-16">
          <SectionDivider />
          <h2 className="text-3xl font-semibold mb-6" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
            Professional Summary
          </h2>
          <p className="text-base leading-relaxed border-l-2 pl-6" style={{borderColor: 'var(--color-accent-green)', color: 'var(--color-dark)'}}>
            Marketing leader with a big picture mindset and a track record of helping brands sharpen their identity, clean up their systems, and show up with more clarity and confidence. I specialize in unifying brands, tightening messaging, and creating campaigns that drive action and loyalty, not just impressions.
          </p>
        </div>

        {/* Expertise */}
        <div className="mb-16 border-l-2 pl-6" style={{borderColor: 'var(--color-accent-green)'}}>
          <h2 className="text-3xl font-semibold mb-8" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'rgba(26, 35, 50, 0.02)', borderColor: 'var(--color-accent-blue)', color: 'var(--color-dark)'}}>
              <h3 className="font-semibold mb-4 text-lg" style={{fontFamily: "'Fraunces', serif"}}>Strategy & Planning</h3>
              <ul className="space-y-2 text-sm">
                <li>• Brand strategy & positioning</li>
                <li>• Marketing strategy development</li>
                <li>• Message architecture</li>
                <li>• Campaign planning & execution</li>
                <li>• Community building & management</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'rgba(26, 35, 50, 0.02)', borderColor: 'var(--color-accent-orange)', color: 'var(--color-dark)'}}>
              <h3 className="font-semibold mb-4 text-lg" style={{fontFamily: "'Fraunces', serif"}}>Creative & Design</h3>
              <ul className="space-y-2 text-sm">
                <li>• Brand identity & visual systems</li>
                <li>• Graphic design & art direction</li>
                <li>• Web design & development</li>
                <li>• Video production & storytelling</li>
                <li>• Copywriting & content strategy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className="border p-8 rounded-lg group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'rgba(26, 35, 50, 0.02)', borderColor: 'rgba(26, 35, 50, 0.1)', color: 'var(--color-dark)'}}>
          <h2 className="text-2xl font-semibold mb-6" style={{fontFamily: "'Fraunces', serif"}}>
            What Sets Me Apart
          </h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              I'm at my best when a brand needs someone to hone the voice, sharpen the visuals, tighten the workflows, deepen community presence, and align it all with the company's goals.
            </p>
            <p>
              I've done most of this work myself at some point—design, video, web, copy, digital—so I know what good looks like, what's realistic, and how to get a team from concept to execution while always remembering to enjoy the ride.
            </p>
            <p>
              Whether working solo or leading teams, I bring both strategic thinking and hands-on execution. I understand how to navigate the gap between ambition and reality, and I bring a collaborative spirit to every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
