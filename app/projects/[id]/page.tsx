import Link from 'next/link';
import { createAdminClient } from '@/lib/supabase';
import { GeometricAccents } from '@/components/GeometricAccents';
import { Button } from '@/components/Button';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  challenge: string;
  category: string;
  tags: string[];
  featured_image_url: string;
  featured_image_alt: string;
  accent_color: 'orange' | 'blue' | 'green';
  quick_facts: { label: string; value: string }[];
  approach: { action: string; details: string }[];
  gallery: { url: string; caption: string; alt: string }[];
  video_embed_url?: string;
  video_embed_title?: string;
  links: { label: string; url: string }[];
}

async function getProject(slug: string): Promise<Project | null> {
  try {
    const client = createAdminClient();
    const { data, error } = await client
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

async function getProjectSlugs(): Promise<string[]> {
  try {
    const client = createAdminClient();
    const { data, error } = await client
      .from('projects')
      .select('slug')
      .eq('status', 'published');

    if (error || !data) {
      return [];
    }

    return data.map((p) => p.slug);
  } catch (error) {
    console.error('Error fetching project slugs:', error);
    return [];
  }
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({
    id: slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return (
      <div className="min-h-screen relative flex items-center justify-center" style={{backgroundColor: 'var(--color-light)'}}>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl font-semibold mb-4" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
            Project Not Found
          </h1>
          <p className="mb-8" style={{color: 'var(--color-dark)'}}>
            Sorry, we couldn't find that project.
          </p>
          <Link href="/projects">
            <Button variant="accent">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const accentColorMap = {
    orange: 'var(--color-accent-orange)',
    blue: 'var(--color-accent-blue)',
    green: 'var(--color-accent-green)',
  };

  const accentColor = accentColorMap[project.accent_color];

  return (
    <main>
      {/* Header Section */}
      <section className="py-8 border-b section-warm relative z-10" style={{borderColor: 'rgba(26, 35, 50, 0.1)'}}>
        <div className="container-custom">
          <Link href="/projects" className="text-sm mb-6 inline-block underline hover:no-underline transition-colors duration-300" style={{color: 'var(--color-accent-blue)'}}>
            ← Back to Projects
          </Link>
          <div className="flex items-baseline gap-4 mb-4">
            <div className="w-3 h-3" style={{backgroundColor: accentColor}}></div>
            <h1 className="text-5xl md:text-6xl font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
              {project.title}
            </h1>
          </div>
          <p className="text-base" style={{color: 'var(--color-dark)'}}>
            {project.description}
          </p>
          <div className="flex gap-2 flex-wrap mt-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 border text-xs font-medium rounded" style={{borderColor: accentColor, color: accentColor}}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative w-full h-96 overflow-hidden border-b z-10" style={{borderColor: 'rgba(26, 35, 50, 0.1)'}}>
        <img
          src={project.featured_image_url}
          alt={project.featured_image_alt}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Main Content - Alternating sections */}
      <section className="section-warm relative z-10">
        <div className="container-custom py-16">
          {/* Quick Facts */}
          <div className="mb-20">
            <div className="flex items-baseline gap-4 mb-8">
              <div className="w-3 h-3" style={{backgroundColor: accentColor}}></div>
              <h2 className="text-3xl font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
                Quick Facts
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.quick_facts.map((fact, idx) => (
                <div
                  key={idx}
                  className="border p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{backgroundColor: 'rgba(26, 35, 50, 0.02)', borderColor: 'rgba(26, 35, 50, 0.1)'}}
                >
                  <p className="text-xs font-semibold mb-3" style={{color: accentColor}}>
                    {fact.label}
                  </p>
                  <p className="text-lg font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
                    {fact.value}
                  </p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mb-20 border-l-2 pl-6" style={{borderColor: accentColor}}>
          <h2 className="text-3xl font-semibold mb-6" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
            Challenge
          </h2>
          <p className="text-base leading-relaxed max-w-3xl" style={{color: 'var(--color-dark)'}}>
            {project.challenge}
          </p>
        </div>
        </div>
      </section>

      {/* Approach & Before/After - Dark section */}
      <section className="section-dark relative z-10">
        <div className="container-custom py-16">
        {/* Approach Section */}
        <div className="mb-20 border-l-2 pl-6" style={{borderColor: accentColor}}>
          <h2 className="text-3xl font-semibold mb-6" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-light)'}}>
            Approach
          </h2>
          <div className="space-y-6">
            {project.approach.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-base mb-2" style={{color: 'var(--color-light)'}}>
                  {item.action}
                </h3>
                <p className="text-base leading-relaxed" style={{color: 'var(--color-light)'}}>
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Images Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-light)'}}>
            <div className="w-3 h-3" style={{backgroundColor: accentColor}}></div>
            Before & After
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'rgba(255,255,255,0.18)', borderColor: 'rgba(255,255,255,0.3)'}}>
              <p className="font-semibold text-sm mb-4" style={{color: 'var(--color-light)'}}>Before</p>
              <div className="h-64 border flex items-center justify-center" style={{backgroundColor: 'rgba(255,255,255,0.18)', borderColor: 'rgba(255,255,255,0.3)', borderStyle: 'dashed', borderRadius: '0.5rem'}}>
                <p className="text-xs text-center" style={{color: 'var(--color-light)'}}>
                  Image Placeholder<br/>1200 x 600
                </p>
              </div>
            </div>
            <div className="border p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: 'rgba(255,255,255,0.18)', borderColor: 'rgba(255,255,255,0.3)'}}>
              <p className="font-semibold text-sm mb-4" style={{color: 'var(--color-light)'}}>After</p>
              <div className="h-64 border flex items-center justify-center" style={{backgroundColor: 'rgba(255,255,255,0.18)', borderColor: 'rgba(255,255,255,0.3)', borderStyle: 'dashed', borderRadius: '0.5rem'}}>
                <p className="text-xs text-center" style={{color: 'var(--color-light)'}}>
                  Image Placeholder<br/>1200 x 600
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Gallery & Video - Light section */}
      <section className="section-warm relative z-10">
        <div className="container-custom py-16">
        {/* Video Embed */}
        {project.video_embed_url && (
          <div className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
              <div className="w-3 h-3" style={{backgroundColor: accentColor}}></div>
              Video
            </h2>
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden border rounded-lg" style={{borderColor: 'rgba(26, 35, 50, 0.1)'}}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={project.video_embed_url}
                title={project.video_embed_title}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        )}

        {/* Photo Gallery - Bento Box */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-dark)'}}>
              <div className="w-3 h-3" style={{backgroundColor: accentColor}}></div>
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
              {project.gallery.map((item, idx) => {
                // Bento box sizing pattern
                const colSpan = idx % 7 === 0 || idx % 7 === 4 ? 'md:col-span-2' : 'md:col-span-1';
                const rowSpan = idx % 7 === 0 || idx % 7 === 4 ? 'md:row-span-2' : 'md:row-span-1';
                
                return (
                  <div
                    key={idx}
                    className={`${colSpan} ${rowSpan} border overflow-hidden transition-all duration-300 hover:-translate-y-1 group relative rounded-lg`}
                    style={{backgroundColor: 'white', borderColor: 'rgba(26, 35, 50, 0.1)'}}
                  >
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Caption overlay - appears on hover */}
                    {item.caption && (
                      <div className="absolute inset-0 bg-black/60 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sm" style={{color: 'var(--color-light)'}}>
                          {item.caption}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        </div>
      </section>

      {/* Resources & Navigation - Dark section */}
      <section className="section-dark border-t relative z-10" style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}>
        <div className="container-custom py-16">
        {/* Links Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-light)'}}>
            <div className="w-3 h-3" style={{backgroundColor: accentColor}}></div>
            Resources
          </h2>
          <div className="flex gap-4 flex-wrap">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="border px-6 py-3 font-semibold text-sm rounded transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{borderColor: accentColor, color: accentColor}}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t pt-12" style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}>
          <div className="flex justify-between items-center">
            <Link href="/projects">
              <Button variant="outline">Back to Projects</Button>
            </Link>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
