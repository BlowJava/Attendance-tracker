import React, { useMemo } from 'react'
import {   
  Table as ShadTable,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'

type Props = {
  caption: string,
  table: any,
}

const Table = ({ caption, table }: Props) => {

  return (
    <ShadTable>
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
      {table.getHeaderGroups().map((headerGroup: any) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => <TableHead key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>)}
            </TableRow>
          ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row: any) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell: any) => (
              <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </ShadTable>
  )
}

export default Table