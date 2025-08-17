import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FileText, Image, Video, Archive, Download, Eye, Share2, Trash2, Search, Upload, Filter } from 'lucide-react';

export const FilesTab = () => {
  const files = [
    {
      id: '1',
      name: 'Business Plan v2.1.pdf',
      type: 'pdf',
      size: '2.4 MB',
      uploadedAt: '2024-08-15 14:30:00',
      uploadedBy: 'John Doe',
      category: 'documents',
      timeline: 'SaaS Startup Launch',
      downloads: 23,
      isPublic: true
    },
    {
      id: '2',
      name: 'Product Demo Video.mp4',
      type: 'video',
      size: '45.2 MB',
      uploadedAt: '2024-08-14 09:15:00',
      uploadedBy: 'Sarah Chen',
      category: 'media',
      timeline: 'SaaS Startup Launch',
      downloads: 67,
      isPublic: true
    },
    {
      id: '3',
      name: 'Financial Projections.xlsx',
      type: 'spreadsheet',
      size: '1.1 MB',
      uploadedAt: '2024-08-12 16:45:00',
      uploadedBy: 'John Doe',
      category: 'documents',
      timeline: 'Investment Portfolio',
      downloads: 12,
      isPublic: false
    },
    {
      id: '4',
      name: 'UI Mockups.zip',
      type: 'archive',
      size: '8.7 MB',
      uploadedAt: '2024-08-10 11:20:00',
      uploadedBy: 'Emma Rodriguez',
      category: 'design',
      timeline: 'SaaS Startup Launch',
      downloads: 34,
      isPublic: false
    },
    {
      id: '5',
      name: 'Team Photo.jpg',
      type: 'image',
      size: '3.2 MB',
      uploadedAt: '2024-08-08 13:00:00',
      uploadedBy: 'Marcus Johnson',
      category: 'media',
      timeline: 'Professional Development',
      downloads: 8,
      isPublic: true
    },
    {
      id: '6',
      name: 'Investment Agreement.pdf',
      type: 'pdf',
      size: '1.8 MB',
      uploadedAt: '2024-08-05 10:30:00',
      uploadedBy: 'Legal Team',
      category: 'legal',
      timeline: 'Investment Portfolio',
      downloads: 45,
      isPublic: false
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
      case 'document':
      case 'spreadsheet':
        return <FileText className="h-4 w-4 text-red-600" />;
      case 'image':
        return <Image className="h-4 w-4 text-green-600" />;
      case 'video':
        return <Video className="h-4 w-4 text-blue-600" />;
      case 'archive':
        return <Archive className="h-4 w-4 text-yellow-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'documents': return 'default';
      case 'media': return 'secondary';
      case 'design': return 'outline';
      case 'legal': return 'destructive';
      default: return 'secondary';
    }
  };

  const formatFileSize = (size: string) => size;

  const formatDateTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Files & Documents</h3>
        </div>
        <Button size="sm">
          <Upload className="h-4 w-4 mr-2" />
          Upload File
        </Button>
      </div>

      {/* File Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">{files.length}</div>
            <div className="text-sm text-muted-foreground">Total Files</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">
              {files.reduce((acc, file) => acc + file.downloads, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Downloads</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">
              {files.filter(f => f.isPublic).length}
            </div>
            <div className="text-sm text-muted-foreground">Public Files</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">62.4 MB</div>
            <div className="text-sm text-muted-foreground">Total Size</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Files List */}
      <div className="space-y-3">
        {files.map((file) => (
          <Card key={file.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {getFileIcon(file.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm truncate">{file.name}</h4>
                      <Badge variant={getCategoryColor(file.category)} className="text-xs">
                        {file.category}
                      </Badge>
                      {file.isPublic ? (
                        <Badge variant="outline" className="text-xs">Public</Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">Private</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{formatFileSize(file.size)}</span>
                      <span>Uploaded by {file.uploadedBy}</span>
                      <span>{formatDateTime(file.uploadedAt)}</span>
                      <span>{file.downloads} downloads</span>
                      <span>Timeline: {file.timeline}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* File Categories Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">File Distribution by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-3 border rounded-lg">
              <FileText className="h-6 w-6 mx-auto mb-2 text-red-600" />
              <div className="font-medium">Documents</div>
              <div className="text-sm text-muted-foreground">
                {files.filter(f => f.category === 'documents').length} files
              </div>
            </div>
            <div className="text-center p-3 border rounded-lg">
              <Image className="h-6 w-6 mx-auto mb-2 text-green-600" />
              <div className="font-medium">Media</div>
              <div className="text-sm text-muted-foreground">
                {files.filter(f => f.category === 'media').length} files
              </div>
            </div>
            <div className="text-center p-3 border rounded-lg">
              <Archive className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
              <div className="font-medium">Design</div>
              <div className="text-sm text-muted-foreground">
                {files.filter(f => f.category === 'design').length} files
              </div>
            </div>
            <div className="text-center p-3 border rounded-lg">
              <FileText className="h-6 w-6 mx-auto mb-2 text-purple-600" />
              <div className="font-medium">Legal</div>
              <div className="text-sm text-muted-foreground">
                {files.filter(f => f.category === 'legal').length} files
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};