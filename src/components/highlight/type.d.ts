declare module 'prismjs/components/prism-core' {
  const Prism: {
    languages: Record<string, unknown>;
    highlight: (code: string, lang: unknown, id: string) => string;
  };
  export = Prism;
}
