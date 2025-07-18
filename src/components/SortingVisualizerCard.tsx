import React from 'react';
import { Link } from 'react-router-dom';

const SortingVisualizerCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-surface0 m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Sorting Algorithm Visualizer</div>
        <p className="text-text mb-3">
          A visual representation of different sorting algorithms. Watch as the algorithms sort arrays in real-time and compare their efficiency.
        </p>
        <Link 
          to="/sorting-visualizer" 
          className="inline-block bg-mauve hover:bg-mauve/80 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          View Visualizer
        </Link>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-overlay0 rounded-full px-3 py-1 text-sm font-semibold text-text mr-2 mb-2">
          #React
        </span>
        <span className="inline-block bg-overlay0 rounded-full px-3 py-1 text-sm font-semibold text-text mr-2 mb-2">
          #Algorithms
        </span>
        <span className="inline-block bg-overlay0 rounded-full px-3 py-1 text-sm font-semibold text-text mr-2 mb-2">
          #Animation
        </span>
      </div>
    </div>
  );
};

export default SortingVisualizerCard;