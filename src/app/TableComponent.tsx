import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../app/globals.css";
const TableComponent = () => {
  type Country = {
    TIMESTAMP: string;
    PURCHASE_ID: string;
    MAIL: string;
    NAME: string;
    SOURCE: string;
    STATUS: string;
  };

  const [countries, setcountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");
  const [filtercountries, setfilteredcountries] = useState<Country[]>([]);
  const getcountries = async () => {
    try {
      const response = await fetch(
        "https://testapi.io/api/satwik16/https://testapi.io/api/satwik16/resource/project"
      );
      const data1 = await response.json();
      setcountries(data1);
      setfilteredcountries(data1);
      console.log(countries);
    } catch (error) {
      console.log(error);
    }
  };

  const coloumn = [
    {
      name: "TIMESTAMP",
      selector: (row: any) => row.TIMESTAMP,
    },
    {
      name: "PURCHASE ID",
      selector: (row: any) => row.PURCHASE_ID,
    },
    {
      name: "MAIL",
      selector: (row: any) => row.MAIL,
    },

    {
      name: "NAME",
      selector: (row: any) => row.NAME,
      sortable: true,
    },
    {
      name: "SOURCE",
      selector: (row: any) => row.SOURCE,
    },
    {
      name: "STATUS",
      selector: (row: any) => row.STATUS,
    },

    {
      name: "SELECT",
      selector: (row: any) => (
        <button
          className="btn btn-primary"
          onClick={(e) => {
            alert(row.NAME);
          }}
        >
          SELECT
        </button>
      ),
    },
  ];
  useEffect(() => {
    getcountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      //  console.log(country.NAME);
      return country.NAME.toLowerCase().match(search.toLowerCase());
    });
    console.log(result);
    setfilteredcountries(result);
  }, [search]);
  return (
    <>
      {/* <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-azHcGLA3W7o1os-rj_fF0LukcadNsgioSyeVugpirfCtsTVXk5TKdhBealwJGSCgTsA&usqp=CAU"></img> */}
      <DataTable
        title="RESULT LIST"
        columns={coloumn}
        data={filtercountries}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        highlightOnHover
        selectableRowsHighlight
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="search here by NAME"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </>
  );
};

export default TableComponent;
