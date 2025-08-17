import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Filter, SortAsc, SortDesc, X } from 'lucide-react';

interface SortOptionsProps {
  onSortChange: (field: string, order: 'asc' | 'desc') => void;
  onFilterChange: (filters: any) => void;
  currentSort: string;
  currentFilters: any;
}

export const SortOptions = ({ 
  onSortChange, 
  onFilterChange, 
  currentSort, 
  currentFilters 
}: SortOptionsProps) => {
  const sortOptions = [
    { label: 'Created Date', value: 'createdAt' },
    { label: 'Investment Amount', value: 'investment' },
    { label: 'ROI', value: 'roi' },
    { label: 'Views', value: 'views' },
    { label: 'Followers', value: 'followers' },
    { label: 'Progress', value: 'progress' },
  ];

  const filterOptions = [
    { label: 'Active', value: 'active', type: 'status' },
    { label: 'Completed', value: 'completed', type: 'status' },
    { label: 'Paused', value: 'paused', type: 'status' },
    { label: 'Profile', value: 'profile', type: 'type' },
    { label: 'Project', value: 'project', type: 'type' },
    { label: 'Business', value: 'business', type: 'type' },
    { label: 'Goal', value: 'goal', type: 'type' },
  ];

  const handleFilterToggle = (filterType: string, filterValue: string) => {
    const currentFiltersForType = currentFilters[filterType] || [];
    let newFilters;
    
    if (currentFiltersForType.includes(filterValue)) {
      newFilters = {
        ...currentFilters,
        [filterType]: currentFiltersForType.filter((f: string) => f !== filterValue)
      };
    } else {
      newFilters = {
        ...currentFilters,
        [filterType]: [...currentFiltersForType, filterValue]
      };
    }
    
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    onFilterChange({});
  };

  const getActiveFilterCount = () => {
    return Object.values(currentFilters).flat().length;
  };

  return (
    <div className="flex items-center gap-2">
      {/* Sort Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="whitespace-nowrap touch-manipulation">
            <SortAsc className="h-4 w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Sort</span>
            {currentSort && (
              <Badge variant="secondary" className="ml-2 h-4 px-1">
                1
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Sort by
          </div>
          <DropdownMenuSeparator />
          {sortOptions.map((option) => (
            <div key={option.value}>
              <DropdownMenuItem
                onClick={() => onSortChange(option.value, 'desc')}
                className="flex items-center justify-between"
              >
                <span>{option.label}</span>
                <SortDesc className="h-3 w-3" />
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onSortChange(option.value, 'asc')}
                className="flex items-center justify-between"
              >
                <span>{option.label}</span>
                <SortAsc className="h-3 w-3" />
              </DropdownMenuItem>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Filter Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="whitespace-nowrap touch-manipulation">
            <Filter className="h-4 w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Filter</span>
            {getActiveFilterCount() > 0 && (
              <Badge variant="secondary" className="ml-2 h-4 px-1">
                {getActiveFilterCount()}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="flex items-center justify-between px-2 py-1.5">
            <span className="text-xs font-medium text-muted-foreground">Filters</span>
            {getActiveFilterCount() > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="h-6 px-2 text-xs"
              >
                <X className="h-3 w-3 mr-1" />
                Clear
              </Button>
            )}
          </div>
          <DropdownMenuSeparator />
          
          <div className="px-2 py-1">
            <div className="text-xs font-medium text-muted-foreground mb-2">Status</div>
            {filterOptions.filter(f => f.type === 'status').map((filter) => (
              <div key={filter.value} className="flex items-center space-x-2 py-1">
                <input
                  type="checkbox"
                  id={filter.value}
                  checked={currentFilters.status?.includes(filter.value) || false}
                  onChange={() => handleFilterToggle('status', filter.value)}
                  className="h-3 w-3 rounded"
                />
                <label htmlFor={filter.value} className="text-xs">
                  {filter.label}
                </label>
              </div>
            ))}
          </div>
          
          <DropdownMenuSeparator />
          
          <div className="px-2 py-1">
            <div className="text-xs font-medium text-muted-foreground mb-2">Type</div>
            {filterOptions.filter(f => f.type === 'type').map((filter) => (
              <div key={filter.value} className="flex items-center space-x-2 py-1">
                <input
                  type="checkbox"
                  id={`type-${filter.value}`}
                  checked={currentFilters.type?.includes(filter.value) || false}
                  onChange={() => handleFilterToggle('type', filter.value)}
                  className="h-3 w-3 rounded"
                />
                <label htmlFor={`type-${filter.value}`} className="text-xs">
                  {filter.label}
                </label>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};