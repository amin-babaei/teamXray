import { MagnifyingGlass } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <MagnifyingGlass height="100" width="100" wrapperClass="MagnifyingGlass-wrapper" glassColor='#fff' color='#e15b64' />
    </div>
  )
}

export default Loading