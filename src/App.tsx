import { useMemo } from 'react'
import Navbar from 'Components/Navbar'
import Table from 'Components/Table'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import mockJSON from './MOCK_DATA.json'
import { columns } from 'Interfaces/TableColumns'

function App() {

  const data = useMemo(() => mockJSON, [])
  
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      <div className=''>
        <Navbar/>

        <Table caption='sdasdasd' table={table}/>
        
      </div>
    </>
  )
}

export default App
