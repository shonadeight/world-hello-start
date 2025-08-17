import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Clock, CheckCircle, AlertCircle, User } from 'lucide-react';

export const FollowupsTab = () => {
  const followups = [
    {
      id: '1',
      type: 'investor_inquiry',
      title: 'Investment Interest in SaaS Startup',
      description: 'Sarah Chen is interested in investing $50,000 in your SaaS startup timeline.',
      priority: 'high',
      status: 'pending',
      createdAt: '2024-08-17 09:30:00',
      dueDate: '2024-08-20 17:00:00',
      contact: {
        name: 'Sarah Chen',
        avatar: '/placeholder.svg',
        email: 'sarah.chen@email.com'
      }
    },
    {
      id: '2',
      type: 'milestone_update',
      title: 'Milestone Progress Check',
      description: 'Update required for "Beta Launch" milestone in SaaS Startup timeline.',
      priority: 'medium',
      status: 'in_progress',
      createdAt: '2024-08-16 14:20:00',
      dueDate: '2024-08-18 12:00:00',
      contact: {
        name: 'Timeline System',
        avatar: '/placeholder.svg',
        email: 'system@timeline.com'
      }
    },
    {
      id: '3',
      type: 'collaboration_request',
      title: 'Partnership Proposal',
      description: 'Marcus Johnson wants to collaborate on the AI Healthcare Platform project.',
      priority: 'medium',
      status: 'pending',
      createdAt: '2024-08-15 11:45:00',
      dueDate: '2024-08-19 16:00:00',
      contact: {
        name: 'Dr. Marcus Johnson',
        avatar: '/placeholder.svg',
        email: 'marcus.johnson@healthtech.com'
      }
    },
    {
      id: '4',
      type: 'document_review',
      title: 'Investment Document Review',
      description: 'Please review and approve the investment terms document.',
      priority: 'high',
      status: 'completed',
      createdAt: '2024-08-14 16:30:00',
      dueDate: '2024-08-16 17:00:00',
      completedAt: '2024-08-15 10:30:00',
      contact: {
        name: 'Emma Rodriguez',
        avatar: '/placeholder.svg',
        email: 'emma.r@legalfirm.com'
      }
    },
    {
      id: '5',
      type: 'progress_report',
      title: 'Monthly Progress Report',
      description: 'Submit monthly progress report for all active timelines.',
      priority: 'low',
      status: 'overdue',
      createdAt: '2024-08-01 10:00:00',
      dueDate: '2024-08-15 23:59:00',
      contact: {
        name: 'Timeline System',
        avatar: '/placeholder.svg',
        email: 'system@timeline.com'
      }
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'in_progress': return 'text-blue-600';
      case 'pending': return 'text-yellow-600';
      case 'overdue': return 'text-red-600';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'overdue':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const formatDateTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTypeLabel = (type: string) => {
    return type.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Followups & Tasks</h3>
        </div>
        <Button size="sm">
          Create Task
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {followups.filter(f => f.status === 'pending').length}
            </div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {followups.filter(f => f.status === 'in_progress').length}
            </div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">
              {followups.filter(f => f.status === 'overdue').length}
            </div>
            <div className="text-sm text-muted-foreground">Overdue</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {followups.filter(f => f.status === 'completed').length}
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </CardContent>
        </Card>
      </div>

      {/* Followups List */}
      <div className="space-y-3">
        {followups.map((followup) => (
          <Card key={followup.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src={followup.contact.avatar} />
                    <AvatarFallback>
                      {followup.contact.name === 'Timeline System' ? (
                        <User className="h-4 w-4" />
                      ) : (
                        followup.contact.name.charAt(0)
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium text-sm">{followup.title}</h4>
                      <Badge variant={getPriorityColor(followup.priority)} className="text-xs">
                        {followup.priority}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {getTypeLabel(followup.type)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {followup.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>From: {followup.contact.name}</span>
                      <span>Created: {formatDateTime(followup.createdAt)}</span>
                      {followup.status !== 'completed' && (
                        <span>Due: {formatDateTime(followup.dueDate)}</span>
                      )}
                      {followup.completedAt && (
                        <span>Completed: {formatDateTime(followup.completedAt)}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`flex items-center gap-1 text-sm ${getStatusColor(followup.status)}`}>
                    {getStatusIcon(followup.status)}
                    <span className="capitalize">{followup.status.replace('_', ' ')}</span>
                  </div>
                  <div className="flex gap-2">
                    {followup.status === 'pending' && (
                      <>
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          Decline
                        </Button>
                      </>
                    )}
                    {followup.status === 'in_progress' && (
                      <Button size="sm" variant="outline" className="h-7 text-xs">
                        Complete
                      </Button>
                    )}
                    <Button size="sm" variant="ghost" className="h-7 text-xs">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};