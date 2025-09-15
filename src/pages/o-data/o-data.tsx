import React, { useEffect, useState } from "react";
import RenderTable from "../../components/table-renderer";
import Button from "../../components/btn";

interface Person {
  UserName: string;
  FirstName: string;
  LastName: string;
  Gender: string;
  Age?: number;
}

interface Column {
  id: string;
  columnName: string;
  hide: boolean;
  render: false | ((row: Person) => React.ReactNode);
}

interface OdataProps
{
  showForm: boolean;
  onCloseForm?: () => void;
}


const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("HTTP Error: " + response.status);
  }
  return response.json();
};

export default function Odata({ showForm, onCloseForm }: OdataProps) {
    const [data, setData] = useState<Person[]>([]);
    const [pageSize] = useState<number>(5);
    const [currPage, setCurrPage] = useState<number>(0);
    const [filter, setFilter] = useState<[string, string] | []>([]);
    const [sort, setSort] = useState<[string, string] | []>([]);
    const totalItems = 20; // hardcoded like original code
    const totalPages = Math.ceil(totalItems / pageSize);

    const columns: Column[] = [
        { id: "UserName", columnName: "UserName", hide: false, render: false },
        { id: "FirstName", columnName: "FirstName", hide: false, render: false },
        { id: "LastName", columnName: "LastName", hide: false, render: false },
        {
            id: "FullName",
            columnName: "FullName",
            hide: false,
            render: (row) => row.FirstName + " " + row.LastName,
        },
        { id: "Gender", columnName: "Gender", hide: false, render: false },
        { id: "Age", columnName: "Age", hide: false, render: false },
    ];

    useEffect(() => {
    const skip = currPage * pageSize;
    let siteUrl = `https://services.odata.org/v4/TripPinServiceRW/People?$count=true&$top=${pageSize}&$skip=${skip}`;

    if (filter.length === 2) {
        siteUrl += `&$filter=${filter[0]} eq '${filter[1]}'`;
    }
    if (sort.length === 2) {
        siteUrl += `&$orderby=${sort[0]} ${sort[1]}`;
    }

    fetchData(siteUrl)
        .then((json) => {
        setData(json.value || []);
        })
        .catch((err) => console.error(err));
    }, [currPage, pageSize, filter, sort]);

    const handleFilterSort = (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        const form = e.currentTarget;
        const filterField = (form.querySelector("#filterField") as HTMLSelectElement)
            .value;
        const filterValue = (form.querySelector("#filterValue") as HTMLInputElement)
            .value.trim();
        const sortField = (form.querySelector("#sortField") as HTMLSelectElement)
            .value;
        const sortDir = (form.querySelector("#sortDir") as HTMLSelectElement).value;

        setFilter(filterField && filterValue ? [filterField, filterValue] : []);
        setSort(sortField ? [sortField, sortDir] : []);
        setCurrPage(0);
    };

    return (
        <>
            {
                showForm &&
                <form id="filterSortForm" onSubmit={handleFilterSort}>
                    <select id="filterField" defaultValue="">
                        <option value="">--Filter Field--</option>
                        <option value="FirstName">FirstName</option>
                        <option value="LastName">LastName</option>
                    </select>
                    <input id="filterValue" type="text" placeholder="Filter value" />
                    <select id="sortField" defaultValue="">
                        <option value="">--Sort Field--</option>
                        <option value="FirstName">FirstName</option>
                        <option value="LastName">LastName</option>
                    </select>
                    <select id="sortDir" defaultValue="asc">
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                    </select>
                    <Button id="filt-sort-submit" label="Apply" className="filt-sort-submit pri-btn gen-btn" type="submit" onClick={onCloseForm} />
                </form>
            }
            
            <RenderTable colHeaders={columns} tableData={data} />

            <div className="o-data-btns">
                <button id="prevBtn" onClick={() => setCurrPage((p) => Math.max(p - 1, 0))} disabled={currPage === 0} className={`gen-btn pri-btn ${currPage === 0 ? "sec-btn" : "pri-btn"}`}>
                    Prev
                </button>

                <span id="pageInfo">
                    Page {currPage + 1} of {totalPages}
                </span>
                
                <button id="nextBtn" onClick={() => setCurrPage((p) => Math.min(p + 1, totalPages - 1))} disabled={currPage === totalPages - 1} className={`gen-btn pri-btn ${currPage === totalPages - 1 ? "sec-btn" : "pri-btn"}`}>
                    Next
                </button>
            </div>
        </>
    );
}
