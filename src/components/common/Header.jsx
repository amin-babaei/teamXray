const Header = () => {
  return (
    <header className='bg-header w-full h-screen bg-left font-main'>
        <div className="containerr">
          <div className="flex flex-col justify-center">
            <div className="mt-48">
              <h1 className='text-3xl sm:text-5xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-gray-700'>Xray Team</h1>
              <h2 className='text-2xl sm:text-3xl mb-20'>special iranian e-sport team</h2>
              <ul className='text-3xl leading-[50px] -tracking-tighter'>
                <li>WE PRACTICE</li>
                <li>WE SWEAT</li>
                <li className='underline decoration-wavy'> WE WIN</li>
              </ul>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header