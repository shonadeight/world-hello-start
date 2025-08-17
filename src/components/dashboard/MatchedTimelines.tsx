import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Target, TrendingUp, Users, Star } from 'lucide-react';

export const MatchedTimelines = () => {
  const matchedOpportunities = [
    {
      id: '1',
      title: 'Green Tech Startup',
      description: 'Revolutionary solar energy storage solution seeking strategic investors.',
      matchScore: 95,
      potentialROI: 35.2,
      riskLevel: 'Medium',
      category: 'CleanTech',
      owner: {
        name: 'Sarah Chen',
        avatar: '/placeholder.svg',
        rating: 4.8
      },
      investment: 250000,
      currentInvestors: 24
    },
    {
      id: '2',
      title: 'AI Healthcare Platform',
      description: 'Machine learning platform for early disease detection and diagnosis.',
      matchScore: 88,
      potentialROI: 42.1,
      riskLevel: 'High',
      category: 'HealthTech',
      owner: {
        name: 'Dr. Marcus Johnson',
        avatar: '/placeholder.svg',
        rating: 4.9
      },
      investment: 180000,
      currentInvestors: 18
    },
    {
      id: '3',
      title: 'Sustainable Fashion Brand',
      description: 'Eco-friendly clothing line using recycled materials and ethical manufacturing.',
      matchScore: 82,
      potentialROI: 28.7,
      riskLevel: 'Low',
      category: 'Fashion',
      owner: {
        name: 'Emma Rodriguez',
        avatar: '/placeholder.svg',
        rating: 4.6
      },
      investment: 75000,
      currentInvestors: 31
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'High': return 'text-red-600';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-4">
      {matchedOpportunities.map((opportunity) => (
        <Card key={opportunity.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={opportunity.owner.avatar} />
                  <AvatarFallback>{opportunity.owner.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{opportunity.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-muted-foreground">{opportunity.owner.name}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{opportunity.owner.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  <Target className="h-3 w-3 mr-1" />
                  {opportunity.matchScore}% Match
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {opportunity.description}
            </p>
            
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{opportunity.category}</Badge>
              <Badge variant="outline" className={getRiskColor(opportunity.riskLevel)}>
                {opportunity.riskLevel} Risk
              </Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="flex items-center gap-1 text-muted-foreground mb-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>Potential ROI</span>
                </div>
                <p className="font-medium text-green-600">+{opportunity.potentialROI}%</p>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Investment Goal</div>
                <p className="font-medium">{formatCurrency(opportunity.investment)}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-muted-foreground mb-1">
                  <Users className="h-3 w-3" />
                  <span>Investors</span>
                </div>
                <p className="font-medium">{opportunity.currentInvestors}</p>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Match Score</div>
                <p className="font-medium text-primary">{opportunity.matchScore}%</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t">
              <Button size="sm" className="flex-1">
                Invest Now
              </Button>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
              <Button variant="ghost" size="sm">
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};