export interface Timeline {
  id: string;
  title: string;
  description: string;
  type: 'profile' | 'project' | 'goal' | 'learning' | 'business';
  status: 'active' | 'completed' | 'paused' | 'draft';
  views: number;
  likes: number;
  followers: number;
  investment: number;
  roi: number;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  milestones: Milestone[];
  owner: {
    id: string;
    name: string;
    avatar: string;
  };
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed' | 'in-progress';
  dueDate: string;
  completedDate?: string;
}

export interface Investment {
  id: string;
  timelineId: string;
  investorId: string;
  amount: number;
  date: string;
  type: 'financial' | 'time' | 'expertise';
}