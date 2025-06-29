import { visit } from "unist-util-visit";

export function remarkDirectiveToDiv() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        const data = node.data || (node.data = {});
        const hast = h('div', { className: node.name }, allChildren(node));
        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    });
  };
}

// Helper to flatten children nodes - you can simplify or customize as needed
function allChildren(node: any) {
  if (!node.children) return {};
  // Convert children to a ReactMarkdown-friendly format or leave as is
  return {};
}

// A small helper for creating HAST nodes (you can import from 'hastscript' if preferred)
function h(tagName: string, props: any, children?: any) {
  return {
    type: "element",
    tagName,
    properties: props,
    children: children || [],
  };
}