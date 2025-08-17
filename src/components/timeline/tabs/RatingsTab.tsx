import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Star, ThumbsUp, MessageSquare, Flag, Filter } from 'lucide-react';

export const RatingsTab = () => {
  const ratingSummary = {
    averageRating: 4.6,
    totalReviews: 142,
    fiveStars: 89,
    fourStars: 32,
    threeStars: 15,
    twoStars: 4,
    oneStars: 2
  };

  const reviews = [
    {
      id: '1',
      reviewer: {
        name: 'Sarah Chen',
        avatar: '/placeholder.svg',
        title: 'Tech Investor'
      },
      rating: 5,
      title: 'Exceptional Investment Opportunity',
      comment: 'The SaaS startup timeline shows incredible potential. The team is experienced, the market is validated, and the execution has been flawless. Highly recommend investing.',
      timeline: 'SaaS Startup Launch',
      date: '2024-08-15',
      helpful: 23,
      verified: true
    },
    {
      id: '2',
      reviewer: {
        name: 'Dr. Marcus Johnson',
        avatar: '/placeholder.svg',
        title: 'Healthcare Tech Expert'
      },
      rating: 5,
      title: 'Innovative Approach to Professional Development',
      comment: 'The professional development journey is well-structured and shows real commitment to growth. The milestones are realistic and the progress tracking is excellent.',
      timeline: 'Professional Development Journey',
      date: '2024-08-12',
      helpful: 18,
      verified: true
    },
    {
      id: '3',
      reviewer: {
        name: 'Emma Rodriguez',
        avatar: '/placeholder.svg',
        title: 'Portfolio Manager'
      },
      rating: 4,
      title: 'Solid Investment Strategy',
      comment: 'Good diversification and risk management. The investment portfolio timeline shows thoughtful planning, though some sectors could use more attention.',
      timeline: 'Investment Portfolio Growth',
      date: '2024-08-10',
      helpful: 12,
      verified: false
    },
    {
      id: '4',
      reviewer: {
        name: 'James Wilson',
        avatar: '/placeholder.svg',
        title: 'Serial Entrepreneur'
      },
      rating: 5,
      title: 'Great Execution and Transparency',
      comment: 'Love the transparency in milestone tracking and regular updates. The business model is sound and the team delivers on their promises consistently.',
      timeline: 'SaaS Startup Launch',
      date: '2024-08-08',
      helpful: 31,
      verified: true
    },
    {
      id: '5',
      reviewer: {
        name: 'Lisa Zhang',
        avatar: '/placeholder.svg',
        title: 'Angel Investor'
      },
      rating: 4,
      title: 'Promising but Room for Improvement',
      comment: 'The open source contributions show dedication to the community. However, more focus on monetization strategy would be beneficial for long-term sustainability.',
      timeline: 'Open Source Contribution',
      date: '2024-08-05',
      helpful: 9,
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPercentage = (count: number, total: number) => {
    return Math.round((count / total) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Ratings & Reviews</h3>
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter Reviews
        </Button>
      </div>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Overall Rating</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{ratingSummary.averageRating}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {renderStars(Math.round(ratingSummary.averageRating))}
              </div>
              <p className="text-sm text-muted-foreground">
                Based on {ratingSummary.totalReviews} reviews
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Rating Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = ratingSummary[`${['five', 'four', 'three', 'two', 'one'][5 - stars]}Stars` as keyof typeof ratingSummary] as number;
              const percentage = getPercentage(count, ratingSummary.totalReviews);
              
              return (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-sm w-6">{stars}★</span>
                  <Progress value={percentage} className="flex-1 h-2" />
                  <span className="text-sm text-muted-foreground w-12">{count}</span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        <h4 className="text-base font-semibold">Recent Reviews</h4>
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={review.reviewer.avatar} />
                    <AvatarFallback>{review.reviewer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{review.reviewer.name}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">Verified</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{review.reviewer.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Flag className="h-4 w-4" />
                </Button>
              </div>

              <div>
                <h5 className="font-medium text-sm mb-1">{review.title}</h5>
                <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                <Badge variant="outline" className="text-xs">
                  Timeline: {review.timeline}
                </Badge>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Reply
                  </Button>
                </div>
                <span className="text-xs text-muted-foreground">
                  {review.helpful} found this helpful
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Review Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Review Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">94%</div>
              <div className="text-sm text-muted-foreground">Positive Reviews</div>
              <div className="text-xs text-muted-foreground mt-1">4-5 star ratings</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">87%</div>
              <div className="text-sm text-muted-foreground">Verified Reviews</div>
              <div className="text-xs text-muted-foreground mt-1">From verified investors</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">4.2</div>
              <div className="text-sm text-muted-foreground">Avg. Response Time</div>
              <div className="text-xs text-muted-foreground mt-1">Days to respond</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};