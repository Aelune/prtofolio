'use client';
import MysticalCard from '../mysticalCard';

export default function ProjectCard({ projects }) {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-8">
      <div className="aspect-[3/4] rounded-xl p-2 flex flex-col justify-between gap-4 relative">

        {/* Grid layout with circular center */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 relative">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="min-h-[100px] border-2 rounded-2xl">
              <MysticalCard project={projects[i]} />
            </div>
          ))}

          {/* Spacer for circle in the middle */}
          <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="rounded-full overflow-hidden shadow-lg border-2  ">
              <MysticalCard project={projects[4]} />
            </div>
          </div>
        </div>

        {/* Bottom full-width card */}
        <div className="w-full mt-8 border-2 rounded-2xl">
          <MysticalCard project={projects[5]} />
        </div>
      </div>
    </div>
  );
}
