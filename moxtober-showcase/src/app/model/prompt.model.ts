export interface Prompt {
  prompt: string;
  matt: {
    image: string;
    image2?: string;
    bullshit?: string[];
    description: string[];
  },
  albi: {
    image: string;
    image2?: string;
    bullshit?: string[];
    description: string[];
  }
}
