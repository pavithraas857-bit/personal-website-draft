export interface TileTheme {
  gradientFrom: string;
  gradientTo: string;
  svgIcon: string;
  accentColor: string;
}

export interface Tile {
  id: string;
  type: "experience" | "project";
  title: string;
  organization: string;
  location: string;
  dateRange: string;
  theme: TileTheme;
  bullets: string[];
  tags: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  note?: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  type: "award" | "publication";
  link?: string;
  description?: string;
}
