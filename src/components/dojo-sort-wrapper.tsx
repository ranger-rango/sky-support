import { DojoSort } from "./dojo-sort";
import { showModal } from "./dojo-sort-filter-context";

export function SortWrapper({fields, onApply,}: { fields: { id: string; columnName: string }[]; onApply: (sorts: { column: string; order: string }[]) => void;})
{
  const { toggleVisibility } = showModal();
  return (
    <>
      <button onClick={toggleVisibility} className="gen-btn pri-btn">Sort</button>
      <DojoSort fields={fields} onApply={onApply} />
    </>
  );
}
