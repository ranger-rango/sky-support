import { useState } from "react";
import { showModal } from "./dojo-sort-filter-context";

interface Field {
  id: string;
  columnName: string;
}

interface DojoFilterProps {
  fields: Field[];
  onApply?: (filters: { column: string; relation: string; filt_value: string }[]) => void;
}

export function DojoFilter({ fields, onApply }: DojoFilterProps) {
  const { visibility, toggleVisibility } = showModal();

  const [filters, setFilters] = useState<
    { column: string; relation: string; filt_value: string }[]
  >([{ column: "", relation: "equals", filt_value: "" }]);

  const handleChange = (
    index: number,
    key: "column" | "relation" | "filt_value",
    value: string
  ) => {
    setFilters((prev) =>
      prev.map((f, i) => (i === index ? { ...f, [key]: value } : f))
    );
  };

  const handleAdd = () => {
    setFilters((prev) => [
      ...prev,
      { column: "", relation: "equals", filt_value: "" },
    ]);
  };

  const handleRemove = (index: number) => {
    setFilters((prev) => prev.filter((_, i) => i !== index));
  };

  const handleApply = () => {
    if (onApply) {
      onApply(filters);
    }
    toggleVisibility();
  };

  if (!visibility) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Filter Records</h3>

        {filters.map((filter, idx) => (
          <div key={idx} className="filter-group">
            <div className="filter-entry">
              <label>Column:</label>
              <select
                value={filter.column}
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

            <div className="filter-entry">
              <label>Relation:</label>
              <select
                value={filter.relation}
                onChange={(e) => handleChange(idx, "relation", e.target.value)}
              >
                <option value="equals">Equals</option>
                <option value="contains">Contains</option>
                <option value="starts with">Starts With</option>
                <option value="ends with">Ends With</option>
              </select>
            </div>

            <div className="filter-entry">
              <label>Filter Value:</label>
              <input
                type="text"
                value={filter.filt_value}
                onChange={(e) => handleChange(idx, "filt_value", e.target.value)}
                placeholder="Enter Value"
              />
            </div>

            {filters.length > 1 && (
              <button className="gen-btn pri-btn" onClick={() => handleRemove(idx)}>Remove</button>
            )}
          </div>
        ))}

        <div className="filter-actions">
          <button className="gen-btn pri-btn" onClick={handleAdd}>Add Filter</button>
        </div>

        <div className="filter-actions dojo-actions">
          <button className="gen-btn pri-btn" onClick={handleApply}>Apply</button>
          <button className="gen-btn pri-btn" onClick={toggleVisibility}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
