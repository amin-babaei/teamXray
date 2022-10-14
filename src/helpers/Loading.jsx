import { Fragment } from 'react'
import { Oval } from  'react-loader-spinner'

const Loading = () => {
    return (
        <Fragment>
        <div className='fixed w-full min-h-screen text-center flex justify-center items-center bg-black z-50 top-0 left-0'>
          <Oval color='#fff' width={100} secondaryColor="#fff"/>
        </div>
        </Fragment>
    )
}

export default Loading