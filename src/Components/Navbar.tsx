const Navbar = () => {
  return (
    <nav className='p-4'>
      
      <div className="flex justify-between">
        <h1 className='text-4xl select-none'>Attendance Tracker</h1>
        <div className=''>
          <ul className='flex flex-row gap-4 text-lg'>
            <a href="#"><li className='rounded-sm  hover:bg-gray-200 ease-in duration-150 px-3 py-2'>Employee</li></a>
            <a href="#"><li className='rounded-sm hover:bg-gray-200 ease-in duration-150 px-6 py-2'>OJT</li></a>
            <a href="#"><li className='rounded-sm hover:bg-gray-200 ease-in duration-150 px-6 py-2'>Tite</li></a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar