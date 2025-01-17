import { LucideIcon } from 'lucide-react';

export interface Property {
  id: string;
  image: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  logo: string | LucideIcon;
}