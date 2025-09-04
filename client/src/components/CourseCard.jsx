import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const CourseCard = ({ course, style }) => {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="feature-card" // Reusing your existing card style
      style={style}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="feature-title">{course.name}</h3>
          <p className="feature-description">{course.instructor}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {course.code}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-neutral-400">Progress:</p>
        <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-1">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-4 text-sm text-neutral-400 hover:text-white transition-colors">
        Go to course <ArrowRightIcon className="h-4 w-4 ml-2" />
      </div>
    </Link>
  );
};

export default CourseCard;

