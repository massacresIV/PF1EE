import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export interface RacialTrait {
  id: string;
  name: string;
  prerequisites?: string;
  markdownContent: string;
  changes?: string;
}

interface RacialTraitTableProps {
  traits: RacialTrait[];
}

export default function RacialTraitTable({ traits }: RacialTraitTableProps) {
    const [search, setSearch] = useState("");
    const [selectedTraitId, setSelectedTraitId] = useState<string | null>(null);

    const filteredTraits = traits.filter((trait) => {
    const searchText = search.toLowerCase();
    return (
        trait.name.toLowerCase().includes(searchText) ||
        (trait.prerequisites ?? "").toLowerCase().includes(searchText) ||
        trait.markdownContent.toLowerCase().includes(searchText)
    );
    });

  const sortedTraits = filteredTraits.sort((a, b) => a.name.localeCompare(b.name));
  const selectedTrait = traits.find((t) => t.id === selectedTraitId);

  return (
    <div style={{ display: "flex", height: "80vh", gap: 20, overflow: "hidden" }}>
      {/* Sidebar list */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid #ddd",
          paddingRight: 16,
          overflowY: "auto",
        }}
      >
        <input
          type="text"
          placeholder="Search traits..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            marginBottom: 12,
            padding: "8px",
            fontSize: "1rem",
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", tableLayout: "auto", display: "table" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ccc" }}>
              <th style={{ textAlign: "left", padding: "10px", width: "100%"}}>Name</th>
            </tr>
          </thead>
          <tbody>
            {sortedTraits.map((trait) => (
              <tr
                key={trait.id}
                onClick={() => setSelectedTraitId(trait.id)}
                style={{
                  cursor: "pointer",
                  backgroundColor: selectedTraitId === trait.id ? "#b3d4fc" : "inherit",
                }}
              >
                <td style={{ padding: "6px" }}>{trait.name}</td>
              </tr>
            ))}
            {sortedTraits.length === 0 && (
              <tr>
                <td style={{ fontStyle: "italic", color: "#666", padding: "6px" }}>
                  No racial traits found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Detail panel */}
      <div
        style={{
          width: "50%",
          minWidth: 400,
          maxWidth: 600,
          flexShrink: 0,
          borderLeft: "2px solid #ddd",
          border: "2px solid #ccc",
          borderRadius: 4,
          padding: 12,
          overflowY: "auto",
          lineHeight: "1.4",
          wordWrap: "break-word",
          overflowWrap: "anywhere",
          boxSizing: "border-box",
          maxHeight: "fit-content",
        }}
      >
        {selectedTrait ? (
          <div>
            <h1>{selectedTrait.name}</h1>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ node, ...props }) => <p style={{ fontSize: 14, lineHeight: 1.6, margin: 5 }} {...props} />,
              }}
            >
              {selectedTrait.markdownContent}
            </ReactMarkdown>

            {selectedTrait.changes && (
              <div
                className="theme-admonition theme-admonition-info admonition_xJq3 alert alert--info"
                style={{ marginTop: 20 }}
              >
                <div
                  className="admonitionHeading_Gvgb"
                  style={{
                    fontWeight: "bold",
                    marginBottom: 8,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className="admonitionIcon_Rf37" style={{ marginRight: 8 }}>
                    <svg viewBox="0 0 14 16">
                      <path
                        fillRule="evenodd"
                        d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                      ></path>
                    </svg>
                  </span>
                  Changes
                </div>
                <div className="admonitionContent_BuS1">
                  <p>{selectedTrait.changes}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>Select a racial trait to see details</p>
        )}
      </div>
    </div>
  );
}