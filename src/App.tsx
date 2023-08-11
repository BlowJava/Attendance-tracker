import { useState, useEffect, useMemo } from 'react'
import Navbar from 'Components/Navbar'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import mockJSON from './MOCK_DATA.json'

function App() {

  const data = useMemo(() => mockJSON, [])

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
      footer: 'ID'
    },
    {
      header: 'First Name',
      accessorKey: 'first',
      footer: 'First Name'
    },
    {
      header: 'Last Name',
      accessorKey: 'last',
      footer: 'Last Name'
    },
    {
      header: 'Hours',
      accessorKey: 'hours',
      footer: 'Hours'
    },
    {
      header: 'from',
      accessorKey: 'start',
      footer: 'from'
    },
    {
      header: 'to',
      accessorKey: 'end',
      footer: 'to'
    },
  ]

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <div className=''>
        <Navbar/>

        <table>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>)}
            </tr>
          ))}
        </table>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </div>
    </>
  )
}

export default App
