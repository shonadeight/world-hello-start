import { Button } from '@/components/ui/button';
import {
  Plus,
  MessageSquare,
  User,
  TrendingUp,
  Wallet
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: TrendingUp, label: 'Portfolio', path: '/' },
    { icon: Plus, label: 'Create', path: '/create' },
    { icon: MessageSquare, label: 'Assistant', path: '/assistant' },
    { icon: Wallet, label: 'Wallet', path: '/wallet' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/98 backdrop-blur-md border-t border-border/50 z-50 lg:hidden">
      <div className="flex items-center justify-around px-1 py-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/portfolio');
          const Icon = item.icon;

          return (
            <Button
              key={item.path}
              variant={isActive ? 'default' : 'ghost'}
              size="sm"
              className={`flex-1 flex flex-col gap-1 h-12 px-2 ${
                isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => navigate(item.path)}
            >
              <Icon className="h-4 w-4" />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};