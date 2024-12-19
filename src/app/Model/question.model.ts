export interface Question {
    id: number;
    title: string;
    subtitle?: string;
    type: 'text' | 'radio' | 'select' | 'date' | 'buttons';
    options?: string[];
    required?: boolean;
  }