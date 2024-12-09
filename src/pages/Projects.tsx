import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, FolderGit2 } from 'lucide-react';
import type { Project } from '../types';

export function Projects() {
  const projects: Project[] = []; // This will be populated from your state management later

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <button className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <FolderGit2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-300 mb-2">No projects yet</h2>
          <p className="text-gray-400">Create your first project to get started</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/editor/${project.id}`}
              className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{project.collaborators.length} members</span>
                <span>Updated {new Date(project.updatedAt).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}