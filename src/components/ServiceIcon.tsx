import React from 'react';
import {
  Wrench,
  Droplets,
  Disc,
  CircleDot,
  Settings2,
  Activity,
  Cpu,
  HardDrive,
  BatteryCharging,
  Wind,
  ShieldCheck,
  DollarSign,
  Zap,
  Cog,
  Award,
  CalendarCheck,
  Eye,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ExternalLink,
  Calendar,
  Send,
  Check,
  Quote,
  Sparkles
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const ServiceIcon: React.FC<IconProps> = ({ name, className = '', size = 24 }) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
    Wrench,
    Droplets,
    Disc,
    CircleDot,
    Settings2,
    Activity,
    Cpu,
    HardDrive,
    BatteryCharging,
    Wind,
    ShieldCheck,
    DollarSign,
    Zap,
    Cog,
    Award,
    CalendarCheck,
    Eye,
    CheckCircle,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Clock,
    Star,
    ChevronDown,
    ChevronUp,
    Menu,
    X,
    ExternalLink,
    Calendar,
    Send,
    Check,
    Quote,
    Sparkles
  };

  const Component = iconMap[name] || Wrench; // Fallback to Wrench
  return <Component className={className} size={size} />;
};
export default ServiceIcon;
