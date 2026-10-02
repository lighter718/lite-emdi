export interface PricingPlan {
  id: string;
  badge: string;
  isPopular?: boolean;
  title: string;
  price: string;
  normalPrice: string;
  features: string[];
  buttonText: string;
  waMessage: string;
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
}

export interface ValuePillar {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}