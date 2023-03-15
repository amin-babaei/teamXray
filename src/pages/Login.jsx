import { Field, Form, Formik,ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import Social from '../components/common/Social'
import { loginSchema } from '../helpers/validation'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../helpers/Loading';
import { Helmet } from 'react-helmet-async';
import { userLogin } from './../app/features/user/userAction';
import { useEffect } from 'react'

const Login =() => {
  const { loading, userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async(values) => {
    dispatch(userLogin(values))
  }
  useEffect(() => {
    if (userInfo) {
      navigate("/",{ replace: true })
    }
  }, [navigate, userInfo])

  return (
    <main className='bg-black'>
       <Helmet>
        <meta charSet="utf-8" />
        <title>xrayTeam-Login</title>
        <meta name="description" content="login page in xray team" />
      </Helmet>
    <div className="containerr py-14">
        <section className="flex justify-center items-center ">
        {loading===true && <Loading/>}
          <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            handleSubmit(values)
          }}>
            <Form className="bg-black rounded-lg border border-white w-full sm:w-3/5 px-5 sm:px-16 py-10" >
                <Link to={"/"} className="w-40 block mb-10 mx-auto">
                    <img src="/images/logo.svg" alt="xrayteam"/>
                </Link>
            <div className="flex items-center mb-10 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center text-3xl font-main mx-4 mb-0 text-xred">login</p>
          </div>
          <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <div className="text-xred">{msg}</div>
                          )}
                        />
              <Field
                type="email"
                name='email'
                className="input focus:border-xred focus:border-b-4"
                placeholder="Email"
                autoComplete= "email"
              />
                <ErrorMessage
                            name="password"
                            render={(msg) => (
                              <div className="text-xred">{msg}</div>
                            )}
                          />
              <Field
                type="password"
                name='password'
                className="input focus:border-xred focus:border-b-4"
                placeholder="Password"
                autoComplete= "current-password"
              />
              <button
                type="submit"
                className="btn w-full focus:outline-none"
              >
                Submit
              </button>
              <Social/>
            </Form>
          </Formik>
        </section>
      </div>
    </main>
  )
}

export default Login