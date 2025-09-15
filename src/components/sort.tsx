// Sort.tsx
import React, { useEffect, useState } from "react";
import Button from "./btn";
import BuildSortFilter from "./buildSortFilter";

interface SortProps {
    fields: { id: string; columnName: string }[];
}

export default function Sort({ fields }: SortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [criteria, setCriteria] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const saved = localStorage.getItem("sortCriteria");
    if (saved) {
      setCriteria(JSON.parse(saved));
    }
  }, []);

  const handleApply = (selected: { [key: string]: string }) => {
    setCriteria(selected);
    localStorage.setItem("sortCriteria", JSON.stringify(selected));
    setIsOpen(false);
  };

  const handleCancel = () => {
    setCriteria({});
    localStorage.removeItem("sortCriteria");
  };

  return (
    <>
      <Button
        className="sort-btn gen-btn pri-btn"
        id="sort-btn"
        type="button"
        label="Sort"
        onClick={() => setIsOpen(true)}
      />
      {Object.keys(criteria).length > 0 && (
        <Button
          className="cancel-sort-btn gen-btn sec-btn"
          id="cancel-sort"
          type="button"
          label="Cancel Sort"
          onClick={handleCancel}
        />
      )}

      <BuildSortFilter
        isOpen={isOpen}
        title="Sort"
        fields={fields}
        onClose={() => setIsOpen(false)}
        onApply={handleApply}
      />
    </>
  );
}
