import React, { useEffect, useState } from "react";
import Button from "./btn";
import BuildSortFilter from "./buildSortFilter";

interface FilterProps {
    fields: { id: string; columnName: string }[];
}

export default function Filter({ fields }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [criteria, setCriteria] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const saved = localStorage.getItem("filterCriteria");
    if (saved) {
      setCriteria(JSON.parse(saved));
    }
  }, []);

  const handleApply = (selected: { [key: string]: string }) => {
    setCriteria(selected);
    localStorage.setItem("filterCriteria", JSON.stringify(selected));
    setIsOpen(false);
  };

  const handleCancel = () => {
    setCriteria({});
    localStorage.removeItem("filterCriteria");
  };

  return (
    <>
      <Button
        className="filter-btn gen-btn pri-btn"
        id="filter-btn"
        type="button"
        label="Filter"
        onClick={() => setIsOpen(true)}
      />
      {Object.keys(criteria).length > 0 && (
        <Button
          className="cancel-filter-btn gen-btn sec-btn"
          id="cancel-filter"
          type="button"
          label="Cancel Filter"
          onClick={handleCancel}
        />
      )}

      <BuildSortFilter
        isOpen={isOpen}
        title="Filter"
        fields={fields}
        onClose={() => setIsOpen(false)}
        onApply={handleApply}
      />
    </>
  );
}
