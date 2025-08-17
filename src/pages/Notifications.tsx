import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  Check, 
  Trash2, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  AlertCircle,
  ArrowLeft 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: '1',
      type: 'investment',
      title: 'Portfolio Update',
      message: 'Your Tech Startup Investment increased by 12.5%',
      timestamp: '2 hours ago',
      read: false,
      icon: TrendingUp
    },
    {
      id: '2',
      type: 'social',
      title: 'New Follower',
      message: 'Sarah Johnson started following your timeline',
      timestamp: '4 hours ago',
      read: false,
      icon: Users
    },
    {
      id: '3',
      type: 'message',
      title: 'New Message',
      message: 'You have a new message from your AI assistant',
      timestamp: '6 hours ago',
      read: true,
      icon: MessageSquare
    },
    {
      id: '4',
      type: 'alert',
      title: 'Timeline Alert',
      message: 'Real Estate Development timeline requires attention',
      timestamp: '1 day ago',
      read: true,
      icon: AlertCircle
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="lg:hidden">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">
            {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All notifications read'}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline" size="sm">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
      </div>

      {/* Notification Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            All
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-1 text-xs">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="investment">Investment</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="message">Messages</TabsTrigger>
          <TabsTrigger value="alert">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <Card 
                  key={notification.id} 
                  className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                    !notification.read ? 'border-primary bg-primary/5' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${
                        notification.type === 'investment' ? 'bg-green-100 text-green-600' :
                        notification.type === 'social' ? 'bg-blue-100 text-blue-600' :
                        notification.type === 'message' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                            <span className="text-sm text-muted-foreground">
                              {notification.timestamp}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{notification.message}</p>
                      </div>

                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Filter tabs would show filtered notifications */}
        {['investment', 'social', 'message', 'alert'].map((type) => (
          <TabsContent key={type} value={type} className="mt-6">
            <div className="space-y-4">
              {notifications
                .filter(n => n.type === type)
                .map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <Card 
                      key={notification.id} 
                      className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                        !notification.read ? 'border-primary bg-primary/5' : ''
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-full ${
                            notification.type === 'investment' ? 'bg-green-100 text-green-600' :
                            notification.type === 'social' ? 'bg-blue-100 text-blue-600' :
                            notification.type === 'message' ? 'bg-purple-100 text-purple-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold">{notification.title}</h3>
                              <div className="flex items-center gap-2">
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                )}
                                <span className="text-sm text-muted-foreground">
                                  {notification.timestamp}
                                </span>
                              </div>
                            </div>
                            <p className="text-muted-foreground">{notification.message}</p>
                          </div>

                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {notifications.length === 0 && (
        <Card className="mt-6">
          <CardContent className="text-center py-12">
            <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Notifications</h3>
            <p className="text-muted-foreground">
              You're all caught up! Check back later for updates.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};