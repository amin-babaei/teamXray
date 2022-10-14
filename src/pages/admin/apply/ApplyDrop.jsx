import { Disclosure } from '@headlessui/react'
const ApplyDrop = ({data}) => {

  return (
    <Disclosure>
        {({ open }) => (
            <>
      <Disclosure.Button className="mb-3 py-2 pl-5 w-full text-left bg-gray-700 border border-gray-600 rounded flex items-center justify-between">
        {data.firstName} {data.lastName} request to join
        <i className={`${open ? 'fas fa-angle-up' : 'fas fa-angle-down'} pr-5`}></i>
      </Disclosure.Button>
      <Disclosure.Panel className="text-white border-b border-gray-200 rounded mb-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 justify-around py-5 text-center">
            <p>firstName : {data.firstName}</p>
            <p>lastName : {data.lastName}</p>
            <p>Age : {data.age}</p>
            <p>phone : {data.phone}</p>
            <p>discord : {data.discord}</p>
            <p>Email : {data.email}</p>
            <p>familiar : {data.familiar}</p>
            <p>current job : {data.current_job}</p>
            <p>yourself : {data.yourself}</p>
            {data.join_us && <p>how join ? {data.join_us.map((item,index) => <span key={index} className="px-1">{ item }</span>)}</p>}
            <p>will Add : {data.willAdd}</p>
            <p>practice : {data.practice}</p>
            <p>experiences : {data.experiences}</p>
            <p>english : {data.english}</p>
            <p>voucher : {data.voucher}</p>
            <p>mental : {data.mental}</p>
            {data.youtube && <p>youtube : {data.youtube}</p>}
            {data.twitch && <p>twitch : {data.twitch}</p>}
            {data.instagram && <p>instagram : {data.instagram}</p>}
            {data.twitter && <p>twitter : {data.twitter}</p>}
        </div>
      </Disclosure.Panel>
        </>
        )}
    </Disclosure>
  )
}

export default ApplyDrop
