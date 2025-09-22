import { useState } from "react";
import { showModal } from "./dojo-sort-filter-context";

interface Field {
  id: string;
  columnName: string;
}

interface DojoSortProps {
  fields: Field[];
  onApply?: (sorts: { column: string; order: string }[]) => void;
}

export function DojoSort({ fields, onApply }: DojoSortProps) {
  const { visibility, toggleVisibility } = showModal();

  const [sorts, setSorts] = useState<{ column: string; order: string }[]>([
    { column: "", order: "asc" },
  ]);

  const handleChange = (
    index: number,
    key: "column" | "order",
    value: string
  ) => {
    setSorts((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [key]: value } : s))
    );
  };

  const handleAdd = () => {
    setSorts((prev) => [...prev, { column: "", order: "asc" }]);
  };

  const handleRemove = (index: number) => {
    setSorts((prev) => prev.filter((_, i) => i !== index));
  };

  const handleApply = () => {
    if (onApply) {
      onApply(sorts);
    }
    toggleVisibility();
  };

  if (!visibility) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Sort Records</h3>

        {sorts.map((sort, idx) => (
          <div key={idx} className="sort-group">
            <div className="sort-entry">
              <label>Column:</label>
              <select
                value={sort.column}
                onChange={(e) => handleChange(idx, "column", e.target.value)}
              >
                <option value="">-- Select --</option>
                {fields.map((col) => (
                  <option key={col.id} value={col.id}>
                    {col.columnName}
                  </option>
                ))}
              </select>
            </div>

            <div className="sort-entry">
              <label>Order:</label>
              <select
                value={sort.order}
                onChange={(e) => handleChange(idx, "order", e.target.value)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            {sorts.length > 1 && (
              <button className="gen-btn pri-btn" onClick={() => handleRemove(idx)}>Remove</button>
            )}
          </div>
        ))}

        <div className="sort-actions">
          <button className="gen-btn pri-btn" onClick={handleAdd}>Add Sort</button>
        </div>

        <div className="sort-actions dojo-actions">
          <button className="gen-btn pri-btn" onClick={handleApply}>Apply</button>
          <button className="gen-btn pri-btn" onClick={toggleVisibility}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
