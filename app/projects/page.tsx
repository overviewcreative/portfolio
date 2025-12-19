import Link from 'next/link';
import { createAdminClient } from '@/lib/supabase';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  featured_image_url: string;
  featured_image_alt: string;
  category: string;
  tags: string[];
  accent_color: 'orange' | 'blue' | 'green';
}

async function getProjects(): Promise<Project[]> {
  try {
    const client = createAdminClient();
    const { data, error } = await client
      .from('projects')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  const accentColorMap = {
    orange: 'var(--color-accent-orange)',
    blue: 'var(--color-accent-blue)',
    green: 'var(--color-accent-green)',
  };

  return (
    <div className="min-h-screen section-dark">
      <div className="container-custom py-16 relative z-10" style={{}}>
        <div className="flex items-baseline gap-4 mb-4">
          <div className="w-3 h-3" style={{backgroundColor: 'var(--color-accent-green)'}}></div>
          <h1 className="text-6xl font-semibold" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-light)'}}>Projects</h1>
        </div>
        <p className="text-base" style={{color: 'var(--color-light)'}}>
          Check out some of my recent work and projects.
        </p>
      </div>

      <div className="container-custom py-16 relative z-10">
        {projects.length === 0 ? (
          <p style={{color: 'var(--color-light)'}}>No projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const accentColor = accentColorMap[project.accent_color];
              return (
                <Link key={project.id} href={`/projects/${project.slug}`}>
                  <div className="rounded-2xl overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col" style={{backgroundColor: 'rgba(255,255,255,0.18)'}}>
                    {/* Featured Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-dark">
                    <img
                      src={project.featured_image_url}
                      alt={project.featured_image_alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold mb-4 transition-colors duration-300" style={{fontFamily: "'Fraunces', serif", color: 'var(--color-light)'}}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 flex-grow" style={{color: 'var(--color-light)'}}>
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-110" style={{backgroundColor: accentColor, color: 'var(--color-light)'}}>
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
        )}
      </div>
    </div>
  );
}
