export interface Project {
  id: string;
  title: string;
  simulation: string;
  stressTest: string;
  status?: string;
}

export interface Team {
  color: string;
  name: string;
  role: string;
  description: string;
  textColor: string;
}

export interface NavLink {
  label: string;
  href: string;
}
