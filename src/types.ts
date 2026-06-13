export interface Service {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  iconName: string; // Resolves to LucideIcon
  category: 'maintenance' | 'repairs' | 'tires' | 'diagnostics';
  estimatedTime: string;
  basePrice: string;
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatarLetter: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
  closed: boolean;
}

export interface BookingRequest {
  fullName: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  preferredDate: string;
  preferredTime: string;
  serviceType: string;
  additionalNotes?: string;
}

export interface EstimateRequest {
  fullName: string;
  email: string;
  phone: string;
  vehicleType: 'sedan' | 'suv' | 'truck' | 'hybrid';
  services: string[]; // Service IDs
  notes?: string;
  totalEstimatedRange?: string;
}
