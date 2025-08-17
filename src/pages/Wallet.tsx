import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Wallet as WalletIcon, 
  Plus, 
  Minus, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard,
  Bitcoin,
  DollarSign,
  TrendingUp,
  ArrowLeft 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Wallet = () => {
  const navigate = useNavigate();

  const walletData = {
    totalBalance: 25600,
    availableBalance: 18400,
    lockedBalance: 7200,
    currencies: [
      { symbol: 'USD', name: 'US Dollar', balance: 18400, icon: DollarSign },
      { symbol: 'BTC', name: 'Bitcoin', balance: 0.15, icon: Bitcoin },
      { symbol: 'ETH', name: 'Ethereum', balance: 2.8, icon: TrendingUp }
    ]
  };

  const transactions = [
    {
      id: '1',
      type: 'deposit',
      amount: 5000,
      currency: 'USD',
      description: 'Bank transfer deposit',
      timestamp: '2024-01-15 10:30 AM',
      status: 'completed'
    },
    {
      id: '2',
      type: 'investment',
      amount: -2500,
      currency: 'USD',
      description: 'Tech Startup Investment',
      timestamp: '2024-01-14 2:15 PM',
      status: 'completed'
    },
    {
      id: '3',
      type: 'withdrawal',
      amount: -1000,
      currency: 'USD',
      description: 'Bank withdrawal',
      timestamp: '2024-01-13 9:45 AM',
      status: 'completed'
    },
    {
      id: '4',
      type: 'dividend',
      amount: 150,
      currency: 'USD',
      description: 'Real Estate Development returns',
      timestamp: '2024-01-12 11:20 AM',
      status: 'completed'
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
          <h1 className="text-3xl font-bold">Wallet</h1>
          <p className="text-muted-foreground">Manage your funds and transactions</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Deposit
          </Button>
          <Button variant="outline">
            <Minus className="h-4 w-4 mr-2" />
            Withdraw
          </Button>
        </div>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <WalletIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${walletData.totalBalance.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all currencies</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${walletData.availableBalance.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Ready for investment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Locked Balance</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              ${walletData.lockedBalance.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">In active investments</p>
          </CardContent>
        </Card>
      </div>

      {/* Currency Balances */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Currency Balances</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {walletData.currencies.map((currency) => {
              const Icon = currency.icon;
              return (
                <div 
                  key={currency.symbol} 
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{currency.symbol}</div>
                      <div className="text-sm text-muted-foreground">{currency.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      {currency.symbol === 'USD' ? '$' : ''}{currency.balance}
                      {currency.symbol !== 'USD' ? ` ${currency.symbol}` : ''}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Transactions */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="deposit">Deposits</TabsTrigger>
          <TabsTrigger value="withdrawal">Withdrawals</TabsTrigger>
          <TabsTrigger value="investment">Investments</TabsTrigger>
          <TabsTrigger value="dividend">Returns</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div 
                    key={transaction.id} 
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'deposit' || transaction.type === 'dividend' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {transaction.type === 'deposit' || transaction.type === 'dividend' ? (
                          <ArrowDownLeft className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                      </div>
                      
                      <div>
                        <div className="font-semibold capitalize">{transaction.description}</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.timestamp}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`font-semibold ${
                        transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                      </div>
                      <Badge 
                        variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tab contents would filter transactions by type */}
        {['deposit', 'withdrawal', 'investment', 'dividend'].map((type) => (
          <TabsContent key={type} value={type} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{type} History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions
                    .filter(t => t.type === type)
                    .map((transaction) => (
                      <div 
                        key={transaction.id} 
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-full ${
                            transaction.type === 'deposit' || transaction.type === 'dividend' 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-red-100 text-red-600'
                          }`}>
                            {transaction.type === 'deposit' || transaction.type === 'dividend' ? (
                              <ArrowDownLeft className="h-4 w-4" />
                            ) : (
                              <ArrowUpRight className="h-4 w-4" />
                            )}
                          </div>
                          
                          <div>
                            <div className="font-semibold">{transaction.description}</div>
                            <div className="text-xs text-muted-foreground">
                              {transaction.timestamp}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className={`font-semibold ${
                            transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                          </div>
                          <Badge 
                            variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
