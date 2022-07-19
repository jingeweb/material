export function getIndentedSource(source: string) {
  let lines = source.split('\n');
  let matches;

  while (lines.length && lines[0].trim() === '') {
    lines.shift();
  }
  while (lines.length && lines[lines.length - 1].trim() === '') {
    lines.pop();
  }

  if (lines.length === 0) {
    return '';
  }
  const indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;

  if (indentation) {
    lines = lines.map((line) => {
      line = line.replace(indentation, '');

      return line.replace(/\t/g, '  ');
    });

    return lines.join('\n').trim();
  }

  return source;
}
