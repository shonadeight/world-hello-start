import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  BookOpen, 
  Award, 
  Clock, 
  Target,
  TrendingUp,
  ArrowLeft 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Train = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: '1',
      title: 'Timeline Investment Fundamentals',
      description: 'Learn the basics of timeline-based investing and portfolio management',
      duration: '2 hours',
      lessons: 8,
      completed: 3,
      difficulty: 'Beginner',
      category: 'Fundamentals'
    },
    {
      id: '2',
      title: 'Advanced Portfolio Strategies',
      description: 'Master advanced techniques for timeline optimization and risk management',
      duration: '4 hours',
      lessons: 12,
      completed: 0,
      difficulty: 'Advanced',
      category: 'Strategy'
    },
    {
      id: '3',
      title: 'AI-Powered Investment Analysis',
      description: 'Use artificial intelligence to enhance your investment decision making',
      duration: '3 hours',
      lessons: 10,
      completed: 7,
      difficulty: 'Intermediate',
      category: 'Technology'
    }
  ];

  const achievements = [
    {
      title: 'First Timeline Created',
      description: 'Created your first investment timeline',
      earned: true,
      icon: Target
    },
    {
      title: 'Portfolio Builder',
      description: 'Built a diversified portfolio of 5+ timelines',
      earned: true,
      icon: TrendingUp
    },
    {
      title: 'Learning Scholar',
      description: 'Completed 3 training courses',
      earned: false,
      icon: BookOpen
    },
    {
      title: 'Master Investor',
      description: 'Achieved 20%+ portfolio returns',
      earned: false,
      icon: Award
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
          <h1 className="text-3xl font-bold">Training Center</h1>
          <p className="text-muted-foreground">Enhance your investment skills and knowledge</p>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Learning Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Courses Started</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1</div>
              <div className="text-sm text-muted-foreground">Courses Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10</div>
              <div className="text-sm text-muted-foreground">Lessons Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2</div>
              <div className="text-sm text-muted-foreground">Achievements Earned</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Courses */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">
                          {course.category}
                        </Badge>
                        <Badge 
                          variant={
                            course.difficulty === 'Beginner' ? 'default' :
                            course.difficulty === 'Intermediate' ? 'secondary' :
                            'destructive'
                          }
                        >
                          {course.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{course.completed} of {course.lessons} lessons</span>
                      <span>{Math.round((course.completed / course.lessons) * 100)}%</span>
                    </div>
                    <Progress value={(course.completed / course.lessons) * 100} className="h-2" />
                  </div>

                  {/* Course Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.lessons} lessons
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    {course.completed === 0 ? 'Start Course' : 'Continue Learning'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className={achievement.earned ? 'bg-primary/5 border-primary/20' : 'opacity-60'}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${
                        achievement.earned 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        {achievement.earned && (
                          <Badge variant="default" className="mt-2 text-xs">
                            Earned
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Stats */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Learning Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Total Study Time</span>
                  <span className="font-semibold">12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Current Streak</span>
                  <span className="font-semibold">5 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Knowledge Score</span>
                  <span className="font-semibold text-primary">85%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};