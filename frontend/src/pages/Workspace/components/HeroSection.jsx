import "./HeroSection.css";

import { Sparkles, ArrowRight } from "lucide-react";

import { Button } from "../../../components/ui";

import { currentUser } from "../../../data/user";

function HeroSection() {
  return (
    <section className="hero-section">

      <div className="hero-content">

        <div className="hero-badge">

          <Sparkles size={16} />

          <span>AI Powered Knowledge Workspace</span>

        </div>

        <h1>

          Welcome back,
          <span> {currentUser.name}</span>

        </h1>

        <p>

          Upload your documents, organize your knowledge, and ask intelligent
          questions across PDFs, Word, Excel, CSV, and more—all from one
          workspace.

        </p>

        <div className="hero-actions">

          <Button>

            Get Started

            <ArrowRight size={18} />

          </Button>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;