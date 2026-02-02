// @ts-nocheck
import React from 'react';
import MainFramerComponent from '../framer/main';
import '../framer/styles.css';

const ExtractedDesign = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vistiq - Extracted Figma Design
          </h1>
          <p className="text-lg text-gray-600">
            This page displays the components extracted from your Framer project
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Project ID:</strong> 4e201a3d2d96ba3a<br />
              <strong>Components:</strong> 25 extracted<br />
              <strong>Design Tokens:</strong> 6 color themes
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Main Component Preview
            </h2>
            <MainFramerComponent.Responsive />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtractedDesign;
