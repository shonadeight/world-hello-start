import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Edit, 
  Settings, 
  TrendingUp, 
  Users, 
  Star, 
  Calendar,
  MapPin,
  Mail,
  Globe
} from 'lucide-react';

export const Profile = () => {
  const user = {
    name: localStorage.getItem('userName') || 'John Doe',
    email: localStorage.getItem('userEmail') || 'john@example.com',
    avatar: '/placeholder.svg',
    title: 'Timeline Investor & Entrepreneur',
    location: 'San Francisco, CA',
    website: 'johndoe.com',
    joinDate: '2024-01-01',
    bio: 'Passionate about innovative investments and building meaningful timelines. Focus on AI, blockchain, and sustainable technologies.',
    stats: {
      portfolioValue: 125600,
      totalTimelines: 12,
      followersCount: 156,
      followingCount: 89,
      rating: 4.8,
      completedDeals: 23
    },
    achievements: [
      { title: 'Top Investor', description: 'Ranked in top 10% of investors', icon: Star },
      { title: 'Timeline Creator', description: '10+ successful timelines', icon: TrendingUp },
      { title: 'Community Leader', description: '100+ followers', icon: Users }
    ],
    recentActivity: [
      { date: '2024-01-15', action: 'Created new timeline', detail: 'Tech Startup Investment' },
      { date: '2024-01-14', action: 'Portfolio updated', detail: '+$2,500 value increase' },
      { date: '2024-01-13', action: 'Investment made', detail: 'Real Estate Development' }
    ]
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Profile Header */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex gap-2">
                <Button size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{user.title}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {user.email}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {user.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  {user.website}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Joined {user.joinDate}
                </div>
              </div>

              <p className="text-muted-foreground">{user.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        <Card>
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-primary">${(user.stats.portfolioValue / 1000).toFixed(0)}K</div>
            <div className="text-sm text-muted-foreground">Portfolio</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold">{user.stats.totalTimelines}</div>
            <div className="text-sm text-muted-foreground">Timelines</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold">{user.stats.followersCount}</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold">{user.stats.followingCount}</div>
            <div className="text-sm text-muted-foreground">Following</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold flex items-center justify-center gap-1">
              {user.stats.rating} <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold">{user.stats.completedDeals}</div>
            <div className="text-sm text-muted-foreground">Deals</div>
          </CardContent>
        </Card>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="achievements" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="timelines">My Timelines</TabsTrigger>
        </TabsList>

        <TabsContent value="achievements" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {user.achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Icon className="h-5 w-5 text-primary mr-2" />
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.detail}</p>
                    </div>
                    <Badge variant="outline">{activity.date}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timelines" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Timelines</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your timeline portfolio will be displayed here. Navigate to Dashboard to view all your timelines.
              </p>
              <Button className="mt-4">View Dashboard</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};