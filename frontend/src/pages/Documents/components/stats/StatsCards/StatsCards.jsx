import "./StatsCards.css";

import {
  Files,
  Sparkles,
  Star,
  Layers3
} from "lucide-react";

import { mockFiles } from "../../../../../data/mockFiles";

function StatsCards() {

  const totalDocuments = mockFiles.length;

  const aiReady = mockFiles.filter(file => file.aiReady).length;

  const favorites = mockFiles.filter(file => file.favorite).length;

  const supportedTypes = new Set(
    mockFiles.map(file => file.type)
  ).size;

  const stats = [
    {
      title: "Total Documents",
      value: totalDocuments,
      icon: Files
    },
    {
      title: "AI Ready",
      value: aiReady,
      icon: Sparkles
    },
    {
      title: "Favorites",
      value: favorites,
      icon: Star
    },
    {
      title: "Supported Types",
      value: supportedTypes,
      icon: Layers3
    }
  ];

  return (
    <div className="stats-grid">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="stat-card"
          >

            <div className="stat-icon">

              <Icon size={22} />

            </div>

            <div className="stat-content">

              <h4>{item.title}</h4>

              <h2>{item.value}</h2>

            </div>

          </div>

        );

      })}

    </div>
  );

}

export default StatsCards;