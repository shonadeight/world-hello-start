import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Bell, Settings, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const mockUser = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg"
  };

  return (
    <nav className="bg-card/95 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="px-3 h-14 flex items-center justify-between max-w-screen-xl mx-auto">
        {/* App Logo/Name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/70 rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">PT</span>
          </div>
          <span className="font-bold text-lg">PrimeTimelines</span>
        </div>

        {/* Right side - Notifications and Profile */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => navigate('/notifications')}
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-accent">
              3
            </Badge>
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="h-auto p-0">
                <Avatar>
                  <AvatarImage src={mockUser.avatar} />
                  <AvatarFallback>{mockUser.name?.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0" align="end">
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={mockUser.avatar} />
                    <AvatarFallback>{mockUser.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-medium truncate">{mockUser.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{mockUser.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => navigate('/profile')}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => navigate('/settings')}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => {
                    localStorage.removeItem('userEmail');
                    window.location.reload();
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};