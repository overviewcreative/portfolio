/**
 * Decorative geometric elements inspired by mid-century modern and space age design
 */

export function GeometricAccents() {
  return (
    <>
      {/* Floating circles */}
      <div className="absolute top-12 right-20 w-24 h-24 rounded-full opacity-15 pointer-events-none" style={{borderColor: 'var(--color-accent-orange)'}}></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full opacity-10 pointer-events-none" style={{borderColor: 'var(--color-accent-orange)'}}></div>
      
      {/* Geometric lines */}
      <div className="absolute top-0 right-1/3 w-1 h-16 opacity-20 pointer-events-none" style={{backgroundColor: 'var(--color-accent-orange)'}}></div>
      <div className="absolute bottom-0 left-1/4 w-32 h-1 opacity-15 pointer-events-none" style={{backgroundColor: 'var(--color-accent-orange)'}}></div>
      
      {/* Diamond shapes */}
      <div 
        className="absolute top-1/3 left-12 w-6 h-6 opacity-20 pointer-events-none"
        style={{transform: 'rotate(45deg)', backgroundColor: 'var(--color-accent-orange)'}}
      ></div>
    </>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="w-2 h-2 bg-orange-500"></div>
      <div className="flex-1 h-px bg-orange-500 opacity-30"></div>
    </div>
  );
}
