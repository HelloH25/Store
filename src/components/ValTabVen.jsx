import { useMemo } from "react";


const useColumns = () => {
    const columns = useMemo(
        () => [
            { 
                Header: 'Ventas',
                columns:[
                    {
                        Header: "ID",
                        accessor: "id"
                    },
                    {
                        Header: "Producto",
                        accessor: "name"
                    },
                    {
                        Header: "Cantidad",
                        accessor: "cant"
                    },
                    {
                        Header: "Vr. Unitario",
                        accessor: "vrUni"
                    }
                ]
            }
        ],
        []
    );
    return columns;
}

const useRows = () => {

    const rows = useMemo(
    () => [
        {
        id: "Audi",
        name: "A3",
        cant: "Sedan, Convertible",
        vrUni: "2015"
        },
        {
        id: "Audi",
        name: "A3",
        cant: "Wagon",
        vrUni: "2013"
        },
        {
        id: "Audi",
        name: "A3 Sportback e-tron",
        cant: "Wagon",
        vrUni: "2016"
        },
        {
        id: "Audi",
        name: "A4",
        cant: "Sedan, Convertible",
        vrUni: "2006"
        },
        {
        id: "Audi",
        name: "A4",
        cant: "Sedan, Wagon",
        vrUni: "2001"
        },
        {
        id: "Audi",
        name: "A4 allroad",
        cant: "Wagon",
        vrUni: "2019"
        },
        {
        id: "Audi",
        name: "A5",
        cant: "Coupe",
        vrUni: "2008"
        },
        {
        id: "Audi",
        name: "A5 Sport",
        cant: "Convertible, Coupe",
        vrUni: "2017"
        },
        {
        id: "Audi",
        name: "Q3",
        cant: "SUV",
        vrUni: "2020"
        },
        {
        id: "Audi",
        name: "R8",
        cant: "Coupe",
        vrUni: "2008"
        },
        {
        id: "Audi",
        name: "TT",
        cant: "Coupe",
        vrUni: "2019"
        },
        {
        id: "Audi",
        name: "Q7",
        cant: "SUV",
        vrUni: "2015"
        },
        {
        id: "Audi",
        name: "Q8",
        cant: "SUV",
        vrUni: "2019"
        },
        {
        id: "Audi",
        name: "Cabriolet",
        cant: "Convertible, Coupe",
        vrUni: "1996"
        }
    ],
    []
    );

    return rows;
}

export {useColumns}
export {useRows}