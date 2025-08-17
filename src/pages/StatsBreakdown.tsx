import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar,
  BarChart3,
  PieChart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const StatsBreakdown = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for stats breakdown
  const statsData = {
    timeline: {
      id: id,
      title: 'Tech Startup Investment',
      currentValue: 25000,
      initialValue: 20000,
      totalReturn: 5000,
      returnPercentage: 25,
      period: '6 months'
    },
    performance: {
      monthly: [
        { month: 'Jan', value: 20000, change: 0 },
        { month: 'Feb', value: 21000, change: 5 },
        { month: 'Mar', value: 22500, change: 7.1 },
        { month: 'Apr', value: 23200, change: 3.1 },
        { month: 'May', value: 24100, change: 3.9 },
        { month: 'Jun', value: 25000, change: 3.7 }
      ],
      metrics: {
        bestMonth: { month: 'March', return: 7.1 },
        worstMonth: { month: 'January', return: 0 },
        volatility: 'Low',
        sharpeRatio: 1.8
      }
    },
    allocation: [
      { category: 'Technology', percentage: 60, value: 15000 },
      { category: 'AI/ML', percentage: 25, value: 6250 },
      { category: 'Infrastructure', percentage: 10, value: 2500 },
      { category: 'Other', percentage: 5, value: 1250 }
    ],
    riskMetrics: {
      riskLevel: 'Medium',
      beta: 1.2,
      maxDrawdown: '-5.2%',
      valueAtRisk: '$1,200'
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Statistics Breakdown</h1>
          <p className="text-muted-foreground">{statsData.timeline.title}</p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${statsData.timeline.currentValue.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Return</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              +${statsData.timeline.totalReturn.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +{statsData.timeline.returnPercentage}% since inception
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Best Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              +{statsData.performance.metrics.bestMonth.return}%
            </div>
            <p className="text-xs text-muted-foreground">
              {statsData.performance.metrics.bestMonth.month}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.riskMetrics.riskLevel}</div>
            <p className="text-xs text-muted-foreground">
              Beta: {statsData.riskMetrics.beta}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
          <TabsTrigger value="timeline">Timeline Events</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {statsData.performance.monthly.map((month, index) => (
                    <div key={month.month} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 text-center font-medium">{month.month}</div>
                        <div className="text-lg font-semibold">${month.value.toLocaleString()}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        {month.change > 0 ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : month.change < 0 ? (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        ) : null}
                        <Badge 
                          variant={month.change > 0 ? 'default' : month.change < 0 ? 'destructive' : 'secondary'}
                        >
                          {month.change > 0 ? '+' : ''}{month.change}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
                    <div className="text-xl font-semibold">{statsData.performance.metrics.sharpeRatio}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Volatility</div>
                    <div className="text-xl font-semibold">{statsData.performance.metrics.volatility}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="allocation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Portfolio Allocation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {statsData.allocation.map((item) => (
                  <div key={item.category} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="font-medium">{item.category}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold">${item.value.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                      </div>
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div 
                          className="h-2 bg-primary rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Risk Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Risk Level</span>
                      <Badge variant="secondary">{statsData.riskMetrics.riskLevel}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Beta</span>
                      <span className="font-semibold">{statsData.riskMetrics.beta}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Drawdown</span>
                      <span className="font-semibold text-red-600">{statsData.riskMetrics.maxDrawdown}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Value at Risk (95%)</span>
                      <span className="font-semibold">{statsData.riskMetrics.valueAtRisk}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Risk Assessment</h3>
                  <p className="text-muted-foreground text-sm">
                    This timeline shows medium risk characteristics with a beta of {statsData.riskMetrics.beta}, 
                    indicating moderate correlation with market movements. The maximum drawdown of {statsData.riskMetrics.maxDrawdown} 
                    suggests reasonable downside protection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Timeline Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 pb-4 border-b">
                  <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">Initial Investment</h3>
                      <span className="text-sm text-muted-foreground">Jan 1, 2024</span>
                    </div>
                    <p className="text-muted-foreground">Made initial investment of $20,000</p>
                  </div>
                </div>
                
                <div className="flex gap-4 pb-4 border-b">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">Company Milestone</h3>
                      <span className="text-sm text-muted-foreground">Mar 15, 2024</span>
                    </div>
                    <p className="text-muted-foreground">Company reached 1M users milestone</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">Funding Round</h3>
                      <span className="text-sm text-muted-foreground">May 20, 2024</span>
                    </div>
                    <p className="text-muted-foreground">Series A funding completed, valuation increased</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};