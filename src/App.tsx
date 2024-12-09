import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './lib/store';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Team } from './pages/Team';
import { CodeEditor } from './pages/Editor';
import { Auth } from './components/Auth';

function App() {
  const user = useStore((state) => state.user);

  if (!user) {
    return <Auth />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/editor/:projectId" element={<CodeEditor />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;