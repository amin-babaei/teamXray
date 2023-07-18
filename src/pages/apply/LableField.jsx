import { ErrorMessage, useField } from "formik"

const LableField = ({ name, lable }) => {
  const [, meta] = useField(name);
  const error = meta.touched && meta.error;
  return (
    <>
      <label
        htmlFor={name}
        className={`block mb-2 text-sm font-medium ${error ? "text-black" : "text-gray-300"}`}
      >
        {lable}
      </label>
      <ErrorMessage
        name={name}
        render={(msg) => <div className="absolute bg-xred p-2 -top-4 text-white font-bold text-sm">
          {msg}
          <div className='h-1 w-full bg-black absolute top-8 left-3'></div>
        </div>}
      />
    </>
  )
}

export default LableField