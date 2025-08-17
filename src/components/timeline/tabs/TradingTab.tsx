import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const TradingTab = () => {
  const tradingData = {
    totalPortfolioValue: 425000,
    todaysPnL: 12450,
    weeklyPnL: -3200,
    monthlyPnL: 18750,
    availableBalance: 85000,
    activePositions: 8
  };

  const positions = [
    {
      id: '1',
      timeline: 'SaaS Startup Launch',
      shares: 150,
      entryPrice: 125.50,
      currentPrice: 142.30,
      pnl: 2520,
      pnlPercentage: 13.4,
      type: 'long'
    },
    {
      id: '2',
      timeline: 'Green Tech Investment',
      shares: 200,
      entryPrice: 89.75,
      currentPrice: 87.20,
      pnl: -510,
      pnlPercentage: -2.8,
      type: 'long'
    },
    {
      id: '3',
      timeline: 'AI Healthcare Platform',
      shares: 75,
      entryPrice: 234.80,
      currentPrice: 267.45,
      pnl: 2449,
      pnlPercentage: 13.9,
      type: 'long'
    }
  ];

  const recentTrades = [
    {
      id: '1',
      timeline: 'Fintech Startup',
      action: 'buy',
      shares: 100,
      price: 156.70,
      timestamp: '2024-08-17 10:30:00',
      status: 'completed'
    },
    {
      id: '2',
      timeline: 'E-commerce Platform',
      action: 'sell',
      shares: 50,
      price: 89.25,
      timestamp: '2024-08-17 09:15:00',
      status: 'completed'
    },
    {
      id: '3',
      timeline: 'Renewable Energy',
      action: 'buy',
      shares: 200,
      price: 67.80,
      timestamp: '2024-08-16 16:45:00',
      status: 'pending'
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Trading Dashboard</h3>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Portfolio Value</p>
                <p className="text-2xl font-bold">{formatCurrency(tradingData.totalPortfolioValue)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's P&L</p>
                <p className={`text-2xl font-bold ${tradingData.todaysPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(tradingData.todaysPnL)}
                </p>
              </div>
              {tradingData.todaysPnL >= 0 ? (
                <TrendingUp className="h-8 w-8 text-green-600" />
              ) : (
                <TrendingDown className="h-8 w-8 text-red-600" />
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Available Balance</p>
                <p className="text-2xl font-bold">{formatCurrency(tradingData.availableBalance)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* P&L Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">P&L Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Weekly</span>
              </div>
              <div className={`text-lg font-bold ${tradingData.weeklyPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(tradingData.weeklyPnL)}
              </div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Monthly</span>
              </div>
              <div className={`text-lg font-bold ${tradingData.monthlyPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(tradingData.monthlyPnL)}
              </div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Active Positions</span>
              </div>
              <div className="text-lg font-bold">{tradingData.activePositions}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Positions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Active Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {positions.map((position) => (
              <div key={position.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{position.timeline}</h4>
                  <p className="text-xs text-muted-foreground">
                    {position.shares} shares @ {formatCurrency(position.entryPrice)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{formatCurrency(position.currentPrice)}</p>
                  <div className={`flex items-center gap-1 text-xs ${position.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {position.pnl >= 0 ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    <span>{formatCurrency(Math.abs(position.pnl))} ({Math.abs(position.pnlPercentage)}%)</span>
                  </div>
                </div>
                <div className="ml-4 flex gap-2">
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Sell
                  </Button>
                  <Button size="sm" variant="outline" className="h-7 text-xs">
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Trades */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTrades.map((trade) => (
              <div key={trade.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Badge variant={trade.action === 'buy' ? 'default' : 'secondary'}>
                    {trade.action.toUpperCase()}
                  </Badge>
                  <div>
                    <h4 className="font-medium text-sm">{trade.timeline}</h4>
                    <p className="text-xs text-muted-foreground">
                      {trade.shares} shares @ {formatCurrency(trade.price)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">{formatTime(trade.timestamp)}</p>
                  <Badge variant={trade.status === 'completed' ? 'default' : 'outline'} className="text-xs">
                    {trade.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};