import React from 'react';
import { useParams } from 'react-router-dom';
import MonacoEditor from '@monaco-editor/react';
import { Split, Play, Download, Upload } from 'lucide-react';

export function CodeEditor() {
  const { projectId } = useParams();
  const [code, setCode] = React.useState('// Start coding here...');

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="bg-gray-900 border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">Project Name</h1>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-800 rounded-md">
                <Split className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-md text-green-500">
                <Play className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-800 rounded-md">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-md">
              <Upload className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-2">
        <div className="border-r border-gray-800">
          <MonacoEditor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true
            }}
          />
        </div>
        <div className="bg-gray-900 p-4">
          <div className="bg-black rounded-lg h-full p-4">
            <h2 className="text-sm font-semibold text-gray-400 mb-2">Preview</h2>
            {/* Preview content will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}