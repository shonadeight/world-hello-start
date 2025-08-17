import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Star, 
  Users, 
  DollarSign,
  ArrowLeft 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Marketplace = () => {
  const navigate = useNavigate();

  const marketplaceItems = [
    {
      id: '1',
      title: 'AI Healthcare Startup',
      description: 'Revolutionary medical AI platform seeking Series A funding',
      type: 'equity',
      minInvestment: 5000,
      targetAmount: 2000000,
      raisedAmount: 850000,
      rating: 4.8,
      backers: 23,
      category: 'Healthcare',
      riskLevel: 'Medium',
      expectedReturn: '15-25%'
    },
    {
      id: '2',
      title: 'Green Energy Project',
      description: 'Solar farm development in emerging markets',
      type: 'debt',
      minInvestment: 1000,
      targetAmount: 5000000,
      raisedAmount: 3200000,
      rating: 4.5,
      backers: 156,
      category: 'Energy',
      riskLevel: 'Low',
      expectedReturn: '8-12%'
    },
    {
      id: '3',
      title: 'Real Estate Development',
      description: 'Luxury residential complex in downtown area',
      type: 'real-estate',
      minInvestment: 10000,
      targetAmount: 10000000,
      raisedAmount: 4500000,
      rating: 4.2,
      backers: 45,
      category: 'Real Estate',
      riskLevel: 'Medium',
      expectedReturn: '12-18%'
    }
  ];

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="lg:hidden">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <p className="text-muted-foreground">Discover investment opportunities</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search opportunities..."
            className="pl-10"
          />
        </div>
        
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="energy">Energy</SelectItem>
            <SelectItem value="real-estate">Real Estate</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Investment Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="equity">Equity</SelectItem>
            <SelectItem value="debt">Debt</SelectItem>
            <SelectItem value="real-estate">Real Estate</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Risk Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Risk Levels</SelectItem>
            <SelectItem value="low">Low Risk</SelectItem>
            <SelectItem value="medium">Medium Risk</SelectItem>
            <SelectItem value="high">High Risk</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Marketplace Items */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {marketplaceItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="capitalize">
                      {item.type}
                    </Badge>
                    <Badge variant="secondary">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>${item.raisedAmount.toLocaleString()} raised</span>
                  <span>{Math.round((item.raisedAmount / item.targetAmount) * 100)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${(item.raisedAmount / item.targetAmount) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Target: ${item.targetAmount.toLocaleString()}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-muted-foreground">Min Investment</div>
                  <div className="font-semibold">${item.minInvestment.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Expected Return</div>
                  <div className="font-semibold text-green-600">{item.expectedReturn}</div>
                </div>
              </div>

              {/* Rating and Backers */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{item.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{item.backers} backers</span>
                </div>
              </div>

              {/* Risk Level */}
              <div className="flex items-center justify-between mb-4">
                <Badge 
                  variant={
                    item.riskLevel === 'Low' ? 'default' : 
                    item.riskLevel === 'Medium' ? 'secondary' : 
                    'destructive'
                  }
                  className="text-xs"
                >
                  {item.riskLevel} Risk
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button className="flex-1">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Invest
                </Button>
                <Button variant="outline" size="sm">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline">
          Load More Opportunities
        </Button>
      </div>
    </div>
  );
};