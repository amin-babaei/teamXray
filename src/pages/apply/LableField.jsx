import { ErrorMessage, useField } from "formik"

const LableField = ({ name, lable }) => {
  const [field, meta] = useField(name);
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
        render={(msg) => <div className={`absolute bg-xred p-2 ${field.name === "experiences" ? "top-1" : "-top-4"} text-white font-bold text-sm`}>
          {msg}
          <div className='h-3 w-3 rotate-45 bg-xred absolute top-7 left-2'></div>
        </div>}
      />
    </>
  )
}

export default LableField