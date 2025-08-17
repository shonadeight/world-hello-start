import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Timeline } from '@/types/timeline';
import { Heart, Eye, Users, TrendingUp, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TimelineCardProps {
  timeline: Timeline;
}

export const TimelineCard = ({ timeline }: TimelineCardProps) => {
  const navigate = useNavigate();
  
  const completedMilestones = timeline.milestones.filter(m => m.status === 'completed').length;
  const totalMilestones = timeline.milestones.length;
  const progressPercentage = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleCardClick = () => {
    navigate(`/timeline/${timeline.id}`);
  };

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={handleCardClick}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={timeline.owner.avatar} />
              <AvatarFallback>{timeline.owner.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-sm font-medium line-clamp-1">{timeline.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{timeline.owner.name}</p>
            </div>
          </div>
          <Badge variant={timeline.status === 'active' ? 'default' : 'secondary'} className="text-xs">
            {timeline.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {timeline.description}
        </p>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {timeline.type}
          </Badge>
          {timeline.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span>{completedMilestones}/{totalMilestones} milestones</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <DollarSign className="h-3 w-3" />
              <span>Investment</span>
            </div>
            <p className="font-medium">{formatCurrency(timeline.investment)}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              <span>ROI</span>
            </div>
            <p className="font-medium text-green-600">+{timeline.roi}%</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{timeline.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              <span>{timeline.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{timeline.followers}</span>
            </div>
          </div>
          <Button size="sm" variant="outline" className="h-7 text-xs">
            Invest
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};