import { useMemo, useState, useEffect } from 'react'
import Navbar from 'Components/Navbar'
import Table from 'Components/Table'
import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { columns } from 'Interfaces/TableColumns'
import { calculateTotalHours } from 'Functions/CalculateTotalHours'
import axios from 'axios'


function App() {
  const [employees, setEmployees] = useState<[]>([]);

  useEffect(() => {
    let subscribe = true;

    const fetchEmployees = async () => {
      const tokenEndPoint = 'https://identity.prod.jibble.io/connect/token';
      const headersData = {
        grant_type: 'client_credentials',
        client_id: '57412860-41ed-49c7-be79-de879dd1f923',
        client_secret: 'hunQZ671YRAehnHEfZvCfwWQp3ZPBowVNdMPxCphad0emu5J',
      };
  
      try {
        const tokenResponse = await axios.post(tokenEndPoint, new URLSearchParams(headersData));
        const accessToken = tokenResponse.data.access_token;
  
        const endpoint = `https://time-attendance.prod.jibble.io/v1/TimesheetsSummary?period=Custom&date=2023-08-01&endDate=2023-08-08`;
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const timesheetsData = response.data.value || [];
        console.log('Timesheets Data:', timesheetsData);
        // Modified Transformation
        const empData = timesheetsData.map((item: any) => {
          const totalHours = calculateTotalHours(item.daily);
          return {
            personId: item.personId,
            fullName: item.person.fullName,
            pictureUrl: item.person.pictureUrl,
            code: item.person.code,
            totalHours: totalHours.toFixed(2),
            status: item.person.status,
            start: item.daily[0].date,
            end: item.daily[item.daily.length - 1].date
          };
        })
        console.log(empData)
        if(subscribe){
          setEmployees(empData);
        }
      }catch (error) {
        console.error('Error fetching data:', error);
        setEmployees([]);
      }
    }

    fetchEmployees();

    return () => {
      subscribe = false;
    }
  }, [])

  const data = useMemo(() => employees, [])
  
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
