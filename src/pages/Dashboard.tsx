import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Plus,
  SortAsc,
  TrendingUp,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('updated');
  const navigate = useNavigate();

  const mockTimelines = [
    {
      id: '1',
      title: 'Tech Startup Investment',
      description: 'Early stage AI company with promising growth potential',
      type: 'financial',
      value: 25000,
      changePercent: 12.5,
      status: 'active',
      tags: ['AI', 'Startup', 'Series A'],
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      title: 'Real Estate Development',
      description: 'Commercial property development in downtown area',
      type: 'assets',
      value: 45000,
      changePercent: -2.1,
      status: 'active',
      tags: ['Real Estate', 'Development'],
      lastUpdated: '2024-01-14'
    }
  ];

  const filteredTimelines = mockTimelines.filter(timeline => {
    const matchesSearch = timeline.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         timeline.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         timeline.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedType === 'all' || timeline.type === selectedType;

    return matchesSearch && matchesType;
  });

  const stats = [
    {
      title: 'Total Portfolio Value',
      value: '$125,600',
      change: '+8.5%',
      changeType: 'positive' as const,
      icon: TrendingUp
    },
    {
      title: 'Active Timelines',
      value: '12',
      change: '+2',
      changeType: 'positive' as const,
      icon: Clock
    },
    {
      title: 'Monthly Growth',
      value: '8.5%',
      change: '+1.2%',
      changeType: 'positive' as const,
      icon: TrendingUp
    }
  ];

  return (
    <div className="container mx-auto p-4 max-w-screen-xl">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Timeline Dashboard</h1>
          <p className="text-muted-foreground">Manage and track all your timelines</p>
        </div>
        <Button onClick={() => navigate('/create')}>
          <Plus className="h-4 w-4 mr-2" />
          Create Timeline
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search timelines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="financial">Financial</SelectItem>
            <SelectItem value="assets">Assets</SelectItem>
            <SelectItem value="intellectual">Intellectual</SelectItem>
            <SelectItem value="network">Network</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SortAsc className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="updated">Last Updated</SelectItem>
            <SelectItem value="value">Value</SelectItem>
            <SelectItem value="change">Performance</SelectItem>
            <SelectItem value="title">Title</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button
            variant={view === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setView('grid')}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={view === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setView('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Timeline Grid/List */}
      <div className={view === 'grid' ? 'grid gap-4 md:grid-cols-2 lg:grid-cols-3' : 'space-y-4'}>
        {filteredTimelines.map((timeline) => (
          <Card 
            key={timeline.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/timeline/${timeline.id}`)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{timeline.title}</CardTitle>
                <Badge variant={timeline.changePercent >= 0 ? 'default' : 'destructive'}>
                  {timeline.changePercent >= 0 ? '+' : ''}{timeline.changePercent}%
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{timeline.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">
                  ${timeline.value.toLocaleString()}
                </span>
                <Badge variant="outline" className="capitalize">
                  {timeline.type}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {timeline.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Updated {timeline.lastUpdated}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTimelines.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No timelines found matching your criteria.</p>
          <Button onClick={() => navigate('/create')}>
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Timeline
          </Button>
        </div>
      )}
    </div>
  );
};