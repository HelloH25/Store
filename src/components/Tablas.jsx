import React from 'react'
import { useState } from 'react';
import { useTable, useGlobalFilter, usePagination,  useSortBy, useAsyncDebounce } from 'react-table'
import { useColumns, useRows} from './ValTabVen';
import { BiFirstPage, BiLastPage} from 'react-icons/bi'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import '../styles/tablas.css'
const CarsFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
    const totalCarsAvailable = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);


  
    const onFilterChange = useAsyncDebounce(
      (value) => setGlobalFilter(value || undefined),
      200
    );
  
    const handleInputChange = (e) => {
      setValue(e.target.value);
      onFilterChange(e.target.value);
    };
  
    return (
      <span className="cars-filter">
        busca por id o nombre &nbsp;{" "}
        <input
          size={40}
          value={value || ""}
          onChange={handleInputChange}
          placeholder={`${totalCarsAvailable} modelos disponibles...`}
        />
      </span>
    );
  }


const Tablas = () => {
    const columns = useColumns();
    const data = useRows();
    const table = useTable({columns,data, initialState: {pageSize: 5, pageIndex: 0}}, useGlobalFilter,  useSortBy, usePagination);
   

    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { globalFilter },
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    }= table; // para leer la tabla
      

    return (
        <div>
             <div className="container">
      {/* Añadimos las propiedades a nuestra tabla nativa */}
                <table {...getTableProps()}>
                    <thead>
                      <tr>
                            <th colSpan={4}>
                                <CarsFilter
                                preGlobalFilteredRows={preGlobalFilteredRows}
                                globalFilter={globalFilter}
                                setGlobalFilter={setGlobalFilter}
                                />
                            </th>
                        </tr>
                    {
                        // Recorremos las columnas
                        headerGroups.map((headerGroup) => (
                        // Añadimos las propiedades al conjunto de columnas
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                            // Recorremos cada columna del conjunto para acceder a su información
                            headerGroup.headers.map((column) => (
                                // Añadimos las propiedades a cada celda de la cabecera
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                        ? column.isSortedDesc
                                            ? "desc"
                                            : "asc"
                                        : ""
                                    }>
                                        {column.render("Header")}
                                    </th>

                            ))
                            }
                        </tr>
                        ))
                    }
                    </thead>
                    {/* Añadimos las propiedades al cuerpo de la tabla */}
                    <tbody {...getTableBodyProps()}>
                    {
                        // Recorremos las filas
                        page.map((row) => {
                        // Llamamos a la función que prepara la fila previo renderizado
                        prepareRow(row);
                        return (
                            // Añadimos las propiedades a la fila
                            <tr {...row.getRowProps()}>
                            {
                                // Recorremos cada celda de la fila
                                row.cells.map((cell) => {
                                // Añadimos las propiedades a cada celda de la fila
                                return (
                                    <td {...cell.getCellProps()}>
                                    {
                                        // Pintamos el contenido de la celda
                                        cell.render("Cell")
                                    }
                                    </td>
                                );
                                })
                            }
                            </tr>
                        );
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <span>
                    Página&nbsp;
                    <strong>
                        {pageIndex + 1} de {pageOptions.length}
                    </strong>{" "}
                </span>
                <div>
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        <BiFirstPage className="page-controller" />
                    </button>{" "}
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <MdKeyboardArrowLeft className="page-controller" />
                    </button>{" "}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        <MdKeyboardArrowRight className="page-controller" />
                    </button>{" "}
                    <button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        <BiLastPage className="page-controller" />
                    </button>{" "}
                </div>
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                    {[5, 10, 15].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                        {pageSize !== 15 ? `Mostrar ${pageSize}` : `Mostrar todo`}
                        </option>
                    ))}
                </select>
            </div>
    </div>
  );
    
    
}

export default Tablas

