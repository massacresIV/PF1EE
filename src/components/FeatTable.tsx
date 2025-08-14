import { useState, useRef, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export interface Feat {
  id: string;
  name: string;
  categories: string[];
  prerequisites?: string;
  markdownContent: string;
  changes?: string;
}

interface FeatTableProps {
  feats: Feat[];
}

export default function FeatTable({ feats }: FeatTableProps) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedFeatId, setSelectedFeatId] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // On first load, check if there is a hash and select the feat
  useEffect(() => {
    if (window.location.hash) {
      const featIdFromHash = window.location.hash.slice(1);
      if (feats.some(f => f.id === featIdFromHash)) {
        setSelectedFeatId(featIdFromHash);
      }
    }
  }, [feats]);

  // Update URL hash whenever a feat is selected
  const handleSelectFeat = (id: string) => {
    setSelectedFeatId(id);
    window.location.hash = id; // changes hash without reload
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilter(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Extract unique categories for filter dropdown
  const allCategories = Array.from(
    new Set(feats.flatMap((f) => f.categories))
  ).sort();
  allCategories.unshift("All");

  // Filter feats by search and category
  const filteredFeats = feats.filter((feat) => {
    if (categoryFilter !== "All" && !feat.categories.includes(categoryFilter))
      return false;
    if (
      !feat.name.toLowerCase().includes(search.toLowerCase()) &&
      !(feat.prerequisites ?? "").toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  // Sort feats alphabetically by name
  const sortedFeats = filteredFeats.sort((a, b) => a.name.localeCompare(b.name));

  // Find selected feat details
  const selectedFeat = feats.find((f) => f.id === selectedFeatId);

  return (
    <div style={{ display: "flex", height: "80vh", gap: 20, overflow: "hidden" }}>
      {/* Sidebar with search, filter, and feat list */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid #ddd",
          paddingRight: 16,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <input
          type="text"
          placeholder="Search feats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            marginBottom: 12,
            padding: "8px",
            fontSize: "1rem",
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />

        <div style={{ width: "100%", overflowX: "auto", boxSizing: "border-box" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", tableLayout: "auto" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #ccc" }}>
                <th style={{ width: "30%", textAlign: "left", padding: "10px" }}>Name</th>
                <th style={{ width: "20%", textAlign: "left", padding: "10px", position: "relative" }}>
                  Feat Type{" "}
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      marginLeft: 4,
                      color: "#555",
                    }}
                    onClick={() => setShowFilter((prev) => !prev)}
                    title="Filter by category"
                  >
                    <FaFilter size={12} />
                  </button>

                  {showFilter && (
                    <div
                      ref={filterRef}
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        background: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: 4,
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                        zIndex: 10,
                        padding: 6,
                        marginTop: 4,
                        fontSize: "0.85rem",
                      }}
                    >
                      <div
                        style={{
                          padding: "4px 8px",
                          cursor: "pointer",
                          color: categoryFilter === "All" ? "#000" : "#555",
                          fontWeight: categoryFilter === "All" ? "bold" : "normal",
                        }}
                        onClick={() => {
                          setCategoryFilter("All");
                          setShowFilter(false);
                        }}
                      >
                        All
                      </div>
                      {allCategories
                        .filter((cat) => cat !== "All")
                        .map((cat) => (
                          <div
                            key={cat}
                            style={{
                              padding: "4px 8px",
                              cursor: "pointer",
                              color: categoryFilter === cat ? "#000" : "#555",
                              fontWeight: categoryFilter === cat ? "bold" : "normal",
                            }}
                            onClick={() => {
                              setCategoryFilter(cat);
                              setShowFilter(false);
                            }}
                          >
                            {cat}
                          </div>
                        ))}
                    </div>
                  )}
                </th>
                <th style={{ width: "50%", textAlign: "left", padding: "10px" }}>Prerequisites</th>
              </tr>
            </thead>
            <tbody>
              {sortedFeats.map((feat) => (
                <tr
                  key={feat.id}
                  onClick={() => handleSelectFeat(feat.id)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: selectedFeatId === feat.id ? "#8abb8c" : "inherit",
                    borderRadius: 4,
                  }}
                >
                  <td style={{ padding: "6px", textAlign: "left" }}>{feat.name}</td>
                  <td style={{ padding: "6px", textAlign: "left" }}>{feat.categories.join(", ")}</td>
                  <td style={{ padding: "6px", textAlign: "left" }}>{feat.prerequisites ?? "-"}</td>
                </tr>
              ))}
              {sortedFeats.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ fontStyle: "italic", color: "#666", padding: "6px" }}>
                    No feats found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail view */}
      <div
        style={{
          width: "50%",
          minWidth: 400,
          maxWidth: 600,
          maxHeight: 600,
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
        }}
      >
        {selectedFeat ? (
          <div>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ node, ...props }) => <p style={{ fontSize: 14, lineHeight: 1.6, margin: 5 }} {...props} />,
              }}
            >
              {selectedFeat.markdownContent}
            </ReactMarkdown>
            {selectedFeat.changes && (
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
                  <p>{selectedFeat.changes}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>Select a feat to see details</p>
        )}
      </div>
    </div>
  );
}
