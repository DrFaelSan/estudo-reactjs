import { ReactGrid, Column, Row, Id } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import { useState } from "react";

interface Trimestre {
  id: number;
  codigoTrimestre: string;
  descricao: string;
  dataInicial: string;
  dataFinal: string;
}

const border = {
  bottom: {
    style: "none",
  },
  left: {
    style: "none",
  },
  right: {
    style: "none",  
  },
  top: {
    style: "none",
  },
}

const style = {
  color: "#000",
  background:"#fff",
  overflow: "hidden",
  paddingLeft: "2.5rem"
}

const headerRow: Row = {
  rowId: "header",
  reorderable: true,
  cells: [
    { type: "header", text: "Id",className:"bg-black", style: {...style, border: { bottom: {width: "1px", color: "#000"}, top: {style: "none"}}} },
    { type: "header", text: "Trimestre", style: {...style, border: { bottom: {width: "1px", color: "#000"}, top: {style: "none"}}}},
    { type: "header", text: "Descrição", style: {...style, border: { bottom: {width: "1px", color: "#000"}, top: {style: "none"}}} },
    { type: "header", text: "Data Inicial", style: {...style, border: { bottom: {width: "1px", color: "#000"}, top: {style: "none"}}} },
    { type: "header", text: "Data Final", style: {...style, border: { bottom: {width: "1px", color: "#000"}, top: {style: "none"}}} }
  ]
};

const getRows = (trimestre: Trimestre[]): Row[] => [
  headerRow,
  ...trimestre.map<Row>((trimestre, idx) => ({
    rowId: idx,
    cells: [
      { type: "text", text: trimestre.id.toString() , style: {...style, border} },
      { type: "text", text: trimestre.codigoTrimestre, style: {...style, border}  },
      { type: "text", text: trimestre.descricao, style: {...style, border} },
      { type: "text", text: trimestre.dataFinal, style: {...style, border} },
      { type: "text", text: trimestre.dataFinal, style: {...style, border} },
    ]
  }))
];

const getTrimestres = (): Trimestre[] => [
  {id: 1, codigoTrimestre: 'T01/2023', descricao: "Primeiro Trimestre de 2023", dataInicial: "01/01/2023", dataFinal: "31/03/2023"},
  {id: 2, codigoTrimestre: 'T01/2023', descricao: "Primeiro Trimestre de 2023", dataInicial: "01/01/2023", dataFinal: "31/03/2023"},
  {id: 3, codigoTrimestre: 'T01/2023', descricao: "Primeiro Trimestre de 2023", dataInicial: "01/01/2023", dataFinal: "31/03/2023"},
  {id: 4, codigoTrimestre: 'T01/2023', descricao: "Primeiro Trimestre de 2023", dataInicial: "01/01/2023", dataFinal: "31/03/2023"},
  {id: 5, codigoTrimestre: 'T01/2023', descricao: "Primeiro Trimestre de 2023", dataInicial: "01/01/2023", dataFinal: "31/03/2023"},
  {id: 6, codigoTrimestre: 'T01/2023', descricao: "Primeiro Trimestre de 2023", dataInicial: "01/01/2023", dataFinal: "31/03/2023"},
  {id: 7, codigoTrimestre: 'T01/2023', descricao: "Primeiro Trimestre de 2023", dataInicial: "01/01/2023", dataFinal: "31/03/2023"},
];

const getColumns = (): Column[] => [
  { columnId: "id", width: 150, resizable: true },
  { columnId: "codigoTrimestre", width: 150, resizable: true },
  { columnId: "descricao", width: 700, resizable: true },
  { columnId: "dataInicial", width: 150, resizable: true },
  { columnId: "dataFinal", width: 150, resizable: true },
];

export default function TrimestreList() {
  const [trimestre] = useState<Trimestre[]>(getTrimestres());
  const [columns, setColumns] = useState<Column[]>(getColumns());

  const rows = getRows(trimestre);

  const handleColumnResize = (ci: Id, width: number) => {
    setColumns((prevColumns) => {
      const columnIndex = prevColumns.findIndex(el => el.columnId === ci);
      const resizedColumn = prevColumns[columnIndex];
      const updatedColumn = { ...resizedColumn, width };
      prevColumns[columnIndex] = updatedColumn;
      return [...prevColumns];
    });
  }

  return (
    <div className='flex flex-col min-h-full'>
      <div className='flex flex-row justify-start items-center p-2 px-5 text-left gap-2'>
        <span className='text-[#868686] font-medium text-1xl'>Home /{' '}</span>
        <span className='text-green-950 font-medium text-1xl'>Trimestres</span>
        </div>
        <div className='flex flex-row justify-end items-center'>
          <button className='bg-green-950 h-12 w-20 font-semibold text-white rounded-md'>Novo</button>
        </div>
        <div className='flex flex-1 min-h-full min-w-full py-5 px-2 overflow-hidden'>
          <ReactGrid 
          rows={rows} 
          columns={columns} 
          onColumnResized={handleColumnResize} 
          enableFullWidthHeader
          />
        </div>
    </div>
  )
}