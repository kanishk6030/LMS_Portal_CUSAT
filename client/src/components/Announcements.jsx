import React from 'react';
import { MegaphoneIcon } from '@heroicons/react/24/solid';

const AnnouncementItem = ({ announcement, style }) => (
  <div
    className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex items-start space-x-4 feature-card" // Reusing card style for animation
    style={style}
  >
    <div className="bg-neutral-800 p-2 rounded-full">
      <MegaphoneIcon className="h-6 w-6 text-blue-500" />
    </div>
    <div>
      <p className="font-semibold text-white">{announcement.title}</p>
      <p className="text-sm text-neutral-400">{announcement.content}</p>
      <p className="text-xs text-neutral-500 mt-2">{announcement.date}</p>
    </div>
  </div>
);

const Announcements = ({ announcements }) => {
  return (
    <div className="space-y-4">
      {announcements.map((item, index) => (
        <AnnouncementItem 
          key={item.id} 
          announcement={item} 
          style={{ animationDelay: `${0.3 + index * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default Announcements;

