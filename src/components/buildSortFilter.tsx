import Button from "./btn";
import { useState } from "react";

interface BuildSortFilterProps
{
    isOpen: boolean;
    title: "Sort" | "Filter";
    onClose: () => void;
    onApply: (selected: { [key: string]: string }) => void;
    fields: { id: string; columnName: string }[];
}

export default function BuildSortFilter({isOpen, title, onClose, onApply, fields} : BuildSortFilterProps)
{
    const [selected, setSelected] = useState<{ [key: string]: string }>({});

    if (!isOpen) return null;

    const handleChange = (field: string, value: string) => 
    {
        setSelected((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h2>{title}</h2>

                <div className="modal-body">
                    {title === "Filter" && (
                    <>
                        <div className="filter-entry">
                            <label>Column:</label>
                            <select value={selected["column"] || ""} onChange={(e) => handleChange("column", e.target.value)}>
                                <option value="">-- Select --</option>
                                {
                                    fields.map((col) => (
                                        <option key={col.id} value={col.id}>
                                        {col.columnName}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="filter-entry">
                            <label>Relation:</label>
                            <select value={selected["relation"] || "equals"} onChange={(e) => handleChange("relation", e.target.value)}>
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
                                value={selected["filt_value"] || ""}
                                onChange={(e) => handleChange("filt_value", e.target.value)}
                                placeholder="Enter Value"
                            />
                        </div>
                    </>
                    )}

                    {title === "Sort" && (
                    <>
                        <div className="sort-entry">
                            <label>Column:</label>
                            <select value={selected["column"] || ""} onChange={(e) => handleChange("column", e.target.value)}>
                                <option value="">-- Select --</option>
                                {
                                    fields.map((col) => (
                                        <option key={col.id} value={col.id}>
                                        {col.columnName}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="sort-entry">
                            <label>Order:</label>
                            <select value={selected["order"] || "asc"} onChange={(e) => handleChange("order", e.target.value)}>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                    </>
                    )}
                </div>

                <div className="modal-footer">
                    <Button onClick={onClose} className="gen-btn sec-btn" id="sort-btn" type="button" label="Cancel" />
                    <Button onClick={() => onApply(selected)} className="sort-btn gen-btn pri-btn" id="sort-btn" type="button" label="Apply" />
                </div>

            </div>
        </div>
    );
}
