declare module '*.html' {
  const resource: string;
  export = resource;
}

declare module '*?example' {
  const source: {
    ts?: string;
    sass?: string;
    html?: string;
  };
  export = source;
}
