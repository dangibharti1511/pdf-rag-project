import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Star,
  BarChart3,
  Settings
} from "lucide-react";

export const navigationItems = [
  {
    id: 1,
    title: "Workspace",
    icon: LayoutDashboard,
    path: "/"
  },
  {
    id: 2,
    title: "Documents",
    icon: FileText,
    path: "/documents"
  },
  {
    id: 3,
    title: "AI Chat",
    icon: MessageSquare,
    path: "/chat"
  },
  {
    id: 4,
    title: "Favorites",
    icon: Star,
    path: "/favorites"
  },
  {
    id: 5,
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics"
  },
  {
    id: 6,
    title: "Settings",
    icon: Settings,
    path: "/settings"
  }
];