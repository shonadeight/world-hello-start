import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Share2, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TimelineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock timeline data - in real app, fetch by id
  const timeline = {
    id: id,
    title: 'Tech Startup Investment',
    description: 'Early stage AI company with promising growth potential in the machine learning space.',
    type: 'financial',
    value: 25000,
    changePercent: 12.5,
    status: 'active',
    tags: ['AI', 'Startup', 'Series A'],
    createdAt: '2024-01-01',
    lastUpdated: '2024-01-15',
    owner: 'John Doe',
    timeline: [
      {
        date: '2024-01-01',
        title: 'Initial Investment',
        description: 'Made initial investment of $20,000',
        amount: 20000,
        type: 'investment'
      },
      {
        date: '2024-01-10',
        title: 'Additional Funding Round',
        description: 'Company raised Series A, increased valuation',
        amount: 5000,
        type: 'investment'
      },
      {
        date: '2024-01-15',
        title: 'Progress Update',
        description: 'Company reached 1M users milestone',
        amount: 0,
        type: 'milestone'
      }
    ]
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{timeline.title}</h1>
          <p className="text-muted-foreground">Created by {timeline.owner}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Timeline Info Card */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">{timeline.title}</CardTitle>
              <p className="text-muted-foreground mt-2">{timeline.description}</p>
            </div>
            <Badge variant={timeline.changePercent >= 0 ? 'default' : 'destructive'}>
              {timeline.changePercent >= 0 ? '+' : ''}{timeline.changePercent}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <div className="text-2xl font-bold">${timeline.value.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Current Value</div>
            </div>
            <div>
              <div className="text-lg font-semibold capitalize">{timeline.type}</div>
              <div className="text-sm text-muted-foreground">Timeline Type</div>
            </div>
            <div>
              <div className="text-lg font-semibold capitalize">{timeline.status}</div>
              <div className="text-sm text-muted-foreground">Status</div>
            </div>
            <div>
              <div className="text-lg font-semibold">{timeline.timeline.length}</div>
              <div className="text-sm text-muted-foreground">Timeline Events</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {timeline.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline Events */}
      <Card>
        <CardHeader>
          <CardTitle>Timeline Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timeline.timeline.map((event, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0">
                <div className="flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full mt-1 ${
                    event.type === 'investment' ? 'bg-green-500' : 
                    event.type === 'milestone' ? 'bg-blue-500' : 'bg-gray-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">{event.title}</h3>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{event.description}</p>
                  {event.amount > 0 && (
                    <Badge variant="outline">${event.amount.toLocaleString()}</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};