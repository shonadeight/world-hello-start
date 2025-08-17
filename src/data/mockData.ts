import { Timeline } from '@/types/timeline';

export const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: '/placeholder.svg',
  bio: 'Entrepreneur and investor focused on sustainable technology solutions.',
};

export const mockTimelines: Timeline[] = [
  {
    id: '1',
    title: 'Professional Development Journey',
    description: 'Building expertise in AI and machine learning through continuous learning and practical projects.',
    type: 'profile',
    status: 'active',
    views: 1250,
    likes: 89,
    followers: 156,
    investment: 45000,
    roi: 18.5,
    createdAt: '2024-01-15',
    updatedAt: '2024-08-10',
    tags: ['AI', 'Machine Learning', 'Career Growth'],
    milestones: [
      {
        id: '1',
        title: 'Complete AI Certification',
        description: 'Finish Stanford AI certification program',
        status: 'completed',
        dueDate: '2024-06-30',
        completedDate: '2024-06-28'
      },
      {
        id: '2',
        title: 'Build ML Portfolio Project',
        description: 'Create a comprehensive machine learning project showcase',
        status: 'in-progress',
        dueDate: '2024-09-15'
      }
    ],
    owner: mockUser
  },
  {
    id: '2',
    title: 'SaaS Startup Launch',
    description: 'Building and launching a B2B SaaS platform for project management.',
    type: 'business',
    status: 'active',
    views: 890,
    likes: 67,
    followers: 89,
    investment: 125000,
    roi: 15.2,
    createdAt: '2024-02-20',
    updatedAt: '2024-08-12',
    tags: ['SaaS', 'Startup', 'B2B'],
    milestones: [
      {
        id: '3',
        title: 'MVP Development',
        description: 'Complete minimum viable product',
        status: 'completed',
        dueDate: '2024-05-01',
        completedDate: '2024-04-28'
      },
      {
        id: '4',
        title: 'Beta Launch',
        description: 'Launch beta version with 100 users',
        status: 'in-progress',
        dueDate: '2024-08-30'
      }
    ],
    owner: mockUser
  },
  {
    id: '3',
    title: 'Investment Portfolio Growth',
    description: 'Strategic investment in emerging technologies and sustainable ventures.',
    type: 'goal',
    status: 'active',
    views: 567,
    likes: 43,
    followers: 78,
    investment: 85000,
    roi: 22.1,
    createdAt: '2024-03-10',
    updatedAt: '2024-08-14',
    tags: ['Investment', 'Portfolio', 'Growth'],
    milestones: [
      {
        id: '5',
        title: 'Diversify Portfolio',
        description: 'Invest in 5 different sectors',
        status: 'in-progress',
        dueDate: '2024-12-31'
      }
    ],
    owner: mockUser
  },
  {
    id: '4',
    title: 'Open Source Contribution',
    description: 'Contributing to major open source projects and maintaining personal repositories.',
    type: 'project',
    status: 'active',
    views: 420,
    likes: 32,
    followers: 45,
    investment: 12000,
    roi: 8.7,
    createdAt: '2024-04-05',
    updatedAt: '2024-08-16',
    tags: ['Open Source', 'Development', 'Community'],
    milestones: [
      {
        id: '6',
        title: 'Major PR Acceptance',
        description: 'Get a significant pull request accepted to a major project',
        status: 'completed',
        dueDate: '2024-07-15',
        completedDate: '2024-07-12'
      }
    ],
    owner: mockUser
  }
];