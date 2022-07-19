export interface Example {
  component: unknown;
  source: {
    ts?: string;
    scss?: string;
    html?: string;
  };
}

export type Examples = Record<string, Example>;
