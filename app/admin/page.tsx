'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';

export default function AdminProjectsPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: [] as string[],
    featured: false,
    featuredImageUrl: '',
    featuredImageAlt: '',
    challenge: '',
    accentColor: 'orange' as 'orange' | 'blue' | 'green',
    quickFacts: [{ label: '', value: '' }],
    approach: [{ action: '', details: '' }],
    gallery: [{ url: '', caption: '', alt: '' }],
    videoEmbedUrl: '',
    videoEmbedTitle: '',
    links: [{ label: '', url: '' }],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [uploadingImages, setUploadingImages] = useState<{ [key: string]: boolean }>({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImages((prev) => ({ ...prev, [field]: true }));
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', field);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setFormData((prev) => ({
        ...prev,
        [field]: data.url,
      }));
      setMessage(`Image uploaded successfully!`);
    } catch (err) {
      setError('Failed to upload image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploadingImages((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    section?: string,
    index?: number,
    field?: string
  ) => {
    const { name, value, type } = e.target as any;

    if (section && index !== undefined && field) {
      setFormData((prev) => {
        const updated = { ...prev };
        (updated as any)[section][index][field] = value;
        return updated;
      });
    } else if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else if (name.includes('tags')) {
      setFormData((prev) => ({
        ...prev,
        tags: value.split(',').map((tag: string) => tag.trim()),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const addField = (section: string) => {
    setFormData((prev) => {
      const updated = { ...prev };
      const field = (updated as any)[section];
      if (Array.isArray(field)) {
        if (section === 'quickFacts') {
          field.push({ label: '', value: '' });
        } else if (section === 'approach') {
          field.push({ action: '', details: '' });
        } else if (section === 'gallery') {
          field.push({ url: '', caption: '', alt: '' });
        } else if (section === 'links') {
          field.push({ label: '', url: '' });
        }
      }
      return updated;
    });
  };

  const removeField = (section: string, index: number) => {
    setFormData((prev) => {
      const updated = { ...prev };
      (updated as any)[section].splice(index, 1);
      return updated;
    });
  };

  const submitProject = async () => {
    try {
      setIsLoading(true);
      setError('');
      setMessage('');

      // Validate required fields
      if (!formData.title || !formData.description || !formData.category || !formData.featuredImageUrl) {
        setError('Please fill in all required fields and upload featured image');
        return;
      }

      const projectData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        tags: formData.tags,
        featured: formData.featured,
        featuredImageUrl: formData.featuredImageUrl,
        featuredImageAlt: formData.featuredImageAlt,
        challenge: formData.challenge,
        approach: formData.approach.filter((item) => item.action || item.details),
        quickFacts: formData.quickFacts.filter((item) => item.label || item.value),
        gallery: formData.gallery.filter((item) => item.url),
        ...(formData.videoEmbedUrl && {
          videoEmbedUrl: formData.videoEmbedUrl,
          videoEmbedTitle: formData.videoEmbedTitle || 'Project Video',
        }),
        links: formData.links.filter((item) => item.label || item.url),
        accentColor: formData.accentColor,
      };

      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}: Failed to create project`);
      }

      const result = await response.json();
      setMessage('Project created successfully! ID: ' + result.id);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: '',
        tags: [],
        featured: false,
        featuredImageUrl: '',
        featuredImageAlt: '',
        challenge: '',
        accentColor: 'orange',
        quickFacts: [{ label: '', value: '' }],
        approach: [{ action: '', details: '' }],
        gallery: [{ url: '', caption: '', alt: '' }],
        videoEmbedUrl: '',
        videoEmbedTitle: '',
        links: [{ label: '', url: '' }],
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create project');
      console.error('Submit error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen"
        style={{
          backgroundColor: 'var(--color-light)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2332' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="container-custom py-16 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-12">
              <Link href="/projects">
                <Button variant="outline">← BACK TO PROJECTS</Button>
              </Link>
            </div>

            <h1 className="text-4xl font-bold font-mono mb-2" style={{ color: 'var(--color-dark)' }}>
              CREATE PROJECT
            </h1>
            <p className="font-mono text-sm mb-12" style={{ color: 'var(--color-dark)' }}>
              All sections are optional except where marked required
            </p>

            {/* Basic Info */}
            <div className="border-4 p-8 mb-8" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark)' }}>
              <h2 className="text-xl font-bold font-mono mb-6" style={{ color: 'var(--color-dark)' }}>
                BASIC INFORMATION *
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block font-mono font-bold text-sm mb-2" style={{ color: 'var(--color-dark)' }}>
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Project title"
                    className="w-full border-2 p-3 font-mono"
                    style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold text-sm mb-2" style={{ color: 'var(--color-dark)' }}>
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Brief project description"
                    rows={3}
                    className="w-full border-2 p-3 font-mono"
                    style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono font-bold text-sm mb-2" style={{ color: 'var(--color-dark)' }}>
                      Category *
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      placeholder="e.g., BRANDING"
                      className="w-full border-2 p-3 font-mono"
                      style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                    />
                  </div>

                  <div>
                    <label className="block font-mono font-bold text-sm mb-2" style={{ color: 'var(--color-dark)' }}>
                      Accent Color *
                    </label>
                    <select
                      name="accentColor"
                      value={formData.accentColor}
                      onChange={handleInputChange}
                      className="w-full border-2 p-3 font-mono"
                      style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                    >
                      <option value="orange">Orange</option>
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono font-bold text-sm mb-2" style={{ color: 'var(--color-dark)' }}>
                    Tags * (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags.join(', ')}
                    onChange={handleInputChange}
                    placeholder="BRANDING, DESIGN, STRATEGY"
                    className="w-full border-2 p-3 font-mono"
                    style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="w-5 h-5 border-2"
                    style={{ borderColor: 'var(--color-dark)' }}
                  />
                  <label className="font-mono font-bold text-sm" style={{ color: 'var(--color-dark)' }}>
                    Featured on home page
                  </label>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="border-4 p-8 mb-8" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark)' }}>
              <h2 className="text-xl font-bold font-mono mb-6" style={{ color: 'var(--color-dark)' }}>
                FEATURED IMAGE *
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block font-mono font-bold text-sm mb-2" style={{ color: 'var(--color-dark)' }}>
                    Upload Image *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'featuredImageUrl')}
                      disabled={uploadingImages.featuredImageUrl}
                      className="flex-1 border-2 p-3 font-mono"
                      style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                    />
                    {uploadingImages.featuredImageUrl && <span className="text-xs font-mono">Uploading...</span>}
                  </div>
                  {formData.featuredImageUrl && (
                    <div className="mt-4">
                      <img src={formData.featuredImageUrl} alt="Featured" className="max-w-xs max-h-48 object-cover border-2" style={{borderColor: 'var(--color-dark)'}} />
                      <p className="text-xs font-mono mt-2" style={{color: 'var(--color-dark)'}}>✓ Image uploaded</p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-mono font-bold text-sm mb-2" style={{ color: 'var(--color-dark)' }}>
                    Alt Text *
                  </label>
                  <input
                    type="text"
                    name="featuredImageAlt"
                    value={formData.featuredImageAlt}
                    onChange={handleInputChange}
                    placeholder="Descriptive alt text"
                    className="w-full border-2 p-3 font-mono"
                    style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                  />
                </div>
              </div>
            </div>

            {/* Challenge */}
            <div className="border-4 p-8 mb-8" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark)' }}>
              <h2 className="text-xl font-bold font-mono mb-6" style={{ color: 'var(--color-dark)' }}>
                CHALLENGE *
              </h2>

              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleInputChange}
                placeholder="Describe the challenge or problem..."
                rows={5}
                className="w-full border-2 p-3 font-mono"
                style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
              />
            </div>

            {/* Quick Facts */}
            <div className="border-4 p-8 mb-8" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark)' }}>
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="text-xl font-bold font-mono" style={{ color: 'var(--color-dark)' }}>
                  QUICK FACTS
                </h2>
                <button
                  onClick={() => addField('quickFacts')}
                  className="border-2 px-4 py-2 font-mono font-bold text-xs transition-all duration-300 hover:scale-105"
                  style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}
                >
                  + ADD FACT
                </button>
              </div>

              <div className="space-y-4">
                {formData.quickFacts.map((fact, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-4 pb-4 border-b-2" style={{ borderColor: 'var(--color-dark)' }}>
                    <input
                      type="text"
                      value={fact.label}
                      onChange={(e) => handleInputChange(e, 'quickFacts', idx, 'label')}
                      placeholder="Label (e.g., TIMELINE)"
                      className="border-2 p-3 font-mono text-sm"
                      style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                    />
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={fact.value}
                        onChange={(e) => handleInputChange(e, 'quickFacts', idx, 'value')}
                        placeholder="Value (e.g., 5 months)"
                        className="flex-1 border-2 p-3 font-mono text-sm"
                        style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                      />
                      {formData.quickFacts.length > 1 && (
                        <button
                          onClick={() => removeField('quickFacts', idx)}
                          className="border-2 px-3 font-mono font-bold text-xs"
                          style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div className="border-4 p-8 mb-8" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark)' }}>
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="text-xl font-bold font-mono" style={{ color: 'var(--color-dark)' }}>
                  APPROACH
                </h2>
                <button
                  onClick={() => addField('approach')}
                  className="border-2 px-4 py-2 font-mono font-bold text-xs transition-all duration-300 hover:scale-105"
                  style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}
                >
                  + ADD STEP
                </button>
              </div>

              <div className="space-y-4">
                {formData.approach.map((item, idx) => (
                  <div key={idx} className="pb-4 border-b-2" style={{ borderColor: 'var(--color-dark)' }}>
                    <input
                      type="text"
                      value={item.action}
                      onChange={(e) => handleInputChange(e, 'approach', idx, 'action')}
                      placeholder="Action/Step title"
                      className="w-full border-2 p-3 font-mono text-sm mb-3"
                      style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                    />
                    <div className="flex gap-2">
                      <textarea
                        value={item.details}
                        onChange={(e) => handleInputChange(e, 'approach', idx, 'details')}
                        placeholder="Details about this step"
                        rows={2}
                        className="flex-1 border-2 p-3 font-mono text-sm"
                        style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                      />
                      {formData.approach.length > 1 && (
                        <button
                          onClick={() => removeField('approach', idx)}
                          className="border-2 px-3 font-mono font-bold text-xs"
                          style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="border-4 p-8 mb-8" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark)' }}>
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="text-xl font-bold font-mono" style={{ color: 'var(--color-dark)' }}>
                  GALLERY
                </h2>
                <button
                  onClick={() => addField('gallery')}
                  className="border-2 px-4 py-2 font-mono font-bold text-xs transition-all duration-300 hover:scale-105"
                  style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}
                >
                  + ADD IMAGE
                </button>
              </div>

              <div className="space-y-4">
                {formData.gallery.map((item, idx) => (
                  <div key={idx} className="pb-4 border-b-2" style={{ borderColor: 'var(--color-dark)' }}>
                    <input
                      type="text"
                      value={item.url}
                      onChange={(e) => handleInputChange(e, 'gallery', idx, 'url')}
                      placeholder="Image URL"
                      className="w-full border-2 p-3 font-mono text-sm mb-3"
                      style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                    />
                    <input
                      type="text"
                      value={item.alt}
                      onChange={(e) => handleInputChange(e, 'gallery', idx, 'alt')}
                      placeholder="Alt text"
                      className="w-full border-2 p-3 font-mono text-sm mb-3"
                      style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                    />
                    <div className="flex gap-2">
                      <textarea
                        value={item.caption}
                        onChange={(e) => handleInputChange(e, 'gallery', idx, 'caption')}
                        placeholder="Caption (optional, shows on hover)"
                        rows={2}
                        className="flex-1 border-2 p-3 font-mono text-sm"
                        style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                      />
                      {formData.gallery.length > 1 && (
                        <button
                          onClick={() => removeField('gallery', idx)}
                          className="border-2 px-3 font-mono font-bold text-xs"
                          style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Embed */}
            <div className="border-4 p-8 mb-8" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark)' }}>
              <h2 className="text-xl font-bold font-mono mb-6" style={{ color: 'var(--color-dark)' }}>
                VIDEO EMBED (Optional)
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block font-mono font-bold text-sm mb-2" style={{ color: 'var(--color-dark)' }}>
                    Video Embed URL
                  </label>
                  <input
                    type="text"
                    name="videoEmbedUrl"
                    value={formData.videoEmbedUrl}
                    onChange={handleInputChange}
                    placeholder="https://www.youtube.com/embed/..."
                    className="w-full border-2 p-3 font-mono"
                    style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                  />
                </div>

                <div>
                  <label className="block font-mono font-bold text-sm mb-2" style={{ color: 'var(--color-dark)' }}>
                    Video Title
                  </label>
                  <input
                    type="text"
                    name="videoEmbedTitle"
                    value={formData.videoEmbedTitle}
                    onChange={handleInputChange}
                    placeholder="Project Overview"
                    className="w-full border-2 p-3 font-mono"
                    style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                  />
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="border-4 p-8 mb-8" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark)' }}>
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="text-xl font-bold font-mono" style={{ color: 'var(--color-dark)' }}>
                  LINKS (Optional)
                </h2>
                <button
                  onClick={() => addField('links')}
                  className="border-2 px-4 py-2 font-mono font-bold text-xs transition-all duration-300 hover:scale-105"
                  style={{ borderColor: 'var(--color-accent-orange)', color: 'var(--color-accent-orange)' }}
                >
                  + ADD LINK
                </button>
              </div>

              <div className="space-y-4">
                {formData.links.map((link, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-4 pb-4 border-b-2" style={{ borderColor: 'var(--color-dark)' }}>
                    <input
                      type="text"
                      value={link.label}
                      onChange={(e) => handleInputChange(e, 'links', idx, 'label')}
                      placeholder="Label (e.g., Visit Site)"
                      className="border-2 p-3 font-mono text-sm"
                      style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                    />
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={link.url}
                        onChange={(e) => handleInputChange(e, 'links', idx, 'url')}
                        placeholder="URL"
                        className="flex-1 border-2 p-3 font-mono text-sm"
                        style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                      />
                      {formData.links.length > 1 && (
                        <button
                          onClick={() => removeField('links', idx)}
                          className="border-2 px-3 font-mono font-bold text-xs"
                          style={{ borderColor: 'var(--color-dark)', color: 'var(--color-dark)' }}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Messages */}
            {error && (
              <div className="mb-8 p-4 border-2 bg-red-50" style={{borderColor: 'red', color: 'red'}}>
                <p className="font-mono text-sm">{error}</p>
              </div>
            )}
            {message && (
              <div className="mb-8 p-4 border-2 bg-green-50" style={{borderColor: 'green', color: 'green'}}>
                <p className="font-mono text-sm">{message}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="mb-12">
              <button
                onClick={submitProject}
                disabled={isLoading}
                className="w-full border-4 py-4 font-mono font-bold text-base transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 disabled:opacity-50"
                style={{
                  backgroundColor: 'var(--color-accent-orange)',
                  borderColor: 'var(--color-accent-orange)',
                  color: 'white',
                }}
              >
                {isLoading ? 'SAVING...' : 'SAVE PROJECT'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
