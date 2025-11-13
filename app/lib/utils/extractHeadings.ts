type Heading = {
  id: string;
  text: string;
  level: number;
};

type DocumentNode = {
  type: string;
  text?: string;
  level?: number;
  children?: DocumentNode[];
  [key: string]: any;
};

// Helper to generate slug from text
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Helper to extract text from document nodes
const extractText = (nodes: DocumentNode[]): string => {
  return nodes
    .map((node) => {
      if (node.type === 'text' && node.text) {
        return node.text;
      }
      if ('children' in node && Array.isArray(node.children)) {
        return extractText(node.children);
      }
      return '';
    })
    .join('');
};

// Extract headings from Keystatic document
export const extractHeadings = (document: any[]): Heading[] => {
  const headings: Heading[] = [];
  const seenIds = new Set<string>();

  const traverse = (nodes: any[]) => {
    nodes.forEach((node) => {
      if (
        node.type === 'heading' &&
        (node.level === 2 || node.level === 3)
      ) {
        const text = extractText(node.children);
        let id = slugify(text);

        // Ensure unique IDs
        let counter = 1;
        let uniqueId = id;
        while (seenIds.has(uniqueId)) {
          uniqueId = `${id}-${counter}`;
          counter++;
        }
        seenIds.add(uniqueId);

        headings.push({
          id: uniqueId,
          text,
          level: node.level,
        });
      }

      if ('children' in node && Array.isArray(node.children)) {
        traverse(node.children);
      }
    });
  };

  traverse(document);
  return headings;
};
