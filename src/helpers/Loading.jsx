import { MagnifyingGlass } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='fixed w-full min-h-screen text-center flex flex-col justify-center items-center bg-black z-50 top-0 left-0'>
      <MagnifyingGlass height="100" width="100" wrapperClass="MagnifyingGlass-wrapper" glassColor='#fff' color='#e15b64' />
    </div>
  )
}

export default Loading