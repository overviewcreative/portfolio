import { Button } from '@/components/Button';
import { GeometricAccents } from '@/components/GeometricAccents';

export default function ContactPage() {
  return (
    <div className="min-h-screen relative" style={{backgroundColor: 'var(--color-light)'}}>
      <GeometricAccents />
      
      <div className="container-custom py-16 relative z-10" style={{}}>
        <div className="flex items-baseline gap-4 mb-4">
          <div className="w-2 h-2" style={{backgroundColor: 'var(--color-accent-green)'}}></div>
          <h1 className="text-6xl font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>Get in Touch</h1>
        </div>
      </div>

      <div className="container-custom py-16 max-w-3xl relative z-10">
        <p className="text-base leading-relaxed mb-16 pl-6" style={{color: 'var(--color-dark)'}}>
          Let's talk about your brand, your goals, and how I can help bring them to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-lg group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'var(--color-light)'}}>
            <h3 className="font-semibold mb-4" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>Email</h3>
            <a href="mailto:pat@overviewcreative.com" className="text-sm underline hover:no-underline transition-colors duration-300" style={{color: 'var(--color-accent-blue)'}}>
              pat@overviewcreative.com
            </a>
          </div>

          <div className="p-8 rounded-lg group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'var(--color-light)'}}>
            <h3 className="font-semibold mb-4" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>Phone</h3>
            <a href="tel:3026821702" className="text-sm underline hover:no-underline transition-colors duration-300" style={{color: 'var(--color-accent-blue)'}}>
              302.682.1702
            </a>
          </div>

          <div className="p-8 rounded-lg group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'var(--color-light)'}}>
            <h3 className="font-semibold mb-4" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>Location</h3>
            <p className="text-sm" style={{color: 'var(--color-dark)'}}>Rehoboth Beach, DE</p>
          </div>

          <div className="p-8 rounded-lg group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'var(--color-light)'}}>
            <h3 className="font-semibold mb-4" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>Connect</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm underline hover:no-underline transition-colors duration-300" style={{color: 'var(--color-accent-blue)'}}>
                LinkedIn
              </a>
              <a href="#" className="block text-sm underline hover:no-underline transition-colors duration-300" style={{color: 'var(--color-accent-blue)'}}>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="p-12 rounded-lg group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'var(--color-light)'}}>
          <h2 className="text-3xl font-semibold mb-8" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
            Send a Message
          </h2>
          <form className="space-y-8">
            <div>
              <label htmlFor="name" className="block font-semibold mb-3" style={{color: 'var(--color-dark)'}}>
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:-translate-y-1"
                style={{backgroundColor: 'var(--color-light)', color: 'var(--color-dark)'}}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-3" style={{color: 'var(--color-dark)'}}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:-translate-y-1"
                style={{backgroundColor: 'var(--color-light)', color: 'var(--color-dark)'}}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block font-semibold mb-3" style={{color: 'var(--color-dark)'}}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:-translate-y-1"
                style={{backgroundColor: 'var(--color-light)', color: 'var(--color-dark)'}}
                placeholder="What this is about"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-3" style={{color: 'var(--color-dark)'}}>
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:-translate-y-1"
                style={{backgroundColor: 'var(--color-light)', color: 'var(--color-dark)'}}
                placeholder="Your message..."
              />
            </div>
            <Button type="submit" variant="accent">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
