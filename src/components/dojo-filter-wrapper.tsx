import { DojoFilter } from "./dojo-filter";
import { showModal } from "./dojo-sort-filter-context";

export function FilterWrapper({fields, onApply,}: { fields: { id: string; columnName: string }[]; onApply: (filters: { column: string; relation: string; filt_value: string }[]) => void;})
{
  const { toggleVisibility } = showModal();
  return (
    <>
      <button onClick={toggleVisibility} className="gen-btn pri-btn">Filter</button>
      <DojoFilter fields={fields} onApply={onApply} />
    </>
  );
}