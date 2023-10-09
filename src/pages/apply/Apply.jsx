import { useState } from 'react'
import { Field, Form, Formik } from "formik";
import { createApply } from "../../services/apply";
import { toastError, toastSuccess } from "../../helpers/Toast";
import { applySchema } from "../../helpers/validation";
import { useNavigate } from "react-router-dom";
import Loading from "../../helpers/Loading";
import { Helmet } from "react-helmet-async";
import LableField from './LableField';
import { initialValues } from './values';

const Apply = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      const { status } = await createApply(values);
      if (status === 201) {
        toastSuccess("Apply sent successful");
        setLoading(false)
        navigate("/");
      }
    } catch (err) {
      setLoading(false)
      toastError("Please try again")
    }
  };

  return (
    <section className="bg-black py-16 section-over">
      <h1 className="text-center mb-16 text-white text-3xl font-main">
        Apply xray team
      </h1>
      <div className="containerr">
        {loading === true && <Loading />}
        <Formik
          initialValues={initialValues}
          validationSchema={applySchema}
          validateOnMount={true}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ isValid, dirty }) => (
            <Form className="mt-10">
              <Helmet>
                <meta charSet="utf-8" />
                <title>xrayTeam-Apply</title>
                <meta name="description" content="apply xray team" />
              </Helmet>
              <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div className='relative'>
                  <LableField name="firstName" lable="First Name"/>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="John"
                  />
                </div>
                <div className='relative'>
                  <LableField name="lastName" lable="Last Name"/>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="Doe"
                  />
                </div>
                <div className='relative'>
                  <LableField name="age" lable="Age"/>
                  <Field
                    type="number"
                    id="age"
                    name="age"
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="Age"
                  />
                </div>
                <div className='relative'>
                  <LableField name="phone" lable="Phone"/>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="09331127447"
                  />
                </div>
                <div className='relative'>
                  <LableField name="discord" lable="Discord"/>
                  <Field
                    type="text"
                    id="discord"
                    name="discord"
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="discord tag"
                  />
                </div>
                <div className="mb-6 relative">
                  <LableField name="email" lable="Email"/>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="john.doe@company.com"
                  />
                </div>
              </div>
              <div className="pb-6 relative">
                <LableField name="familiar" lable="How did you hear about us:"/>
                <Field
                  type="text"
                  id="familiar"
                  name="familiar"
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="your Answer"
                />
              </div>
              <div className="pb-6 relative">
                <LableField name="current_job" lable="What is your current job at the moment?"/>
                <Field
                  type="text"
                  id="current_job"
                  name="current_job"
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="your Answer"
                />
              </div>
              <div className="pb-6 relative">
                <LableField name="yourself" lable="Tell us more about yourself and your personality:"/>
                <Field
                  as="textarea"
                  type="text"
                  id="your_self"
                  name="yourself"
                  className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="your Answer"
                ></Field>
              </div>
              <div className="pb-6">
                <div className="block mb-2 text-sm font-medium text-gray-300">
                  How would you like to join us? (You can select both):
                </div>
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    name="join_us"
                    value="Team Member"
                    className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block p-2.5"
                    placeholder="your Answer"
                  />
                  <label className="block ml-2 text-md text-white">
                    Team Member
                  </label>
                </div>
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    name="join_us"
                    value="Content Creator"
                    className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block p-2.5"
                    placeholder="your Answer"
                  />
                  <label className="block ml-2 text-md text-white">
                    Content Creator
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 items-end gap-6 sm:grid-cols-2">
                <div className="pb-6 relative">
                  <LableField name="willAdd" lable="What will you Add to XRayTeam by joining us:"/>
                  <Field
                    as="textarea"
                    type="text"
                    id="willAdd"
                    name="willAdd"
                    className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="your Answer"
                  ></Field>
                </div>
                <div className="pb-6 relative">
                  <LableField name="practice" lable="Hours that you can participate in practice per day/week (Team
                    players only):"/>
                  <Field
                    type="text"
                    id="practice"
                    name="practice"
                    className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="your Answer"
                  ></Field>
                </div>
                <div className="pb-6 relative">
                  <LableField name="experiences" lable="Tell us more about your recent experiences, Social media,
                    E-Sports activities such as tournaments, records, etc:"/>
                  <Field
                    as="textarea"
                    type="text"
                    id="experiences"
                    name="experiences"
                    className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="your Answer"
                  ></Field>
                </div>
                <div className="pb-6 relative">
                  <LableField name="english" lable="Are you able to perform with a team or stream in English
                    language?"/>
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      id="Yes_English"
                      value="Yes_English"
                      name="english"
                      className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block p-2.5"
                      placeholder="your Answer"
                    />
                    <label
                      htmlFor="Yes_English"
                      className="block ml-2 text-md text-white"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      id="No_English"
                      value="No_English"
                      name="english"
                      className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block p-2.5"
                      placeholder="your Answer"
                    />
                    <label
                      htmlFor="No_English"
                      className="block ml-2 text-md text-white"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="pb-6 relative">
                <LableField name="voucher" lable="Can anyone in the community vouch for you?"/>
                <Field
                  type="text"
                  id="voucher"
                  name="voucher"
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full p-2.5"
                  placeholder="your Answer"
                />
              </div>
              <div className="pb-6 relative">
                <LableField name="mental" lable="Are you able to control your mental situation in any case and
                  respect your fellow colleagues in community and help them?"/>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="Yes_mental"
                    value="Yes_mental"
                    name="mental"
                    className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block p-2.5"
                    placeholder="your Answer"
                  />
                  <label
                    htmlFor="Yes_mental"
                    className="block ml-2 text-md text-white"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <Field
                    type="radio"
                    id="No_mental"
                    value="No_mental"
                    name="mental"
                    className="bg-gray-700 border resize-none border-gray-600 text-white text-sm rounded-lg block p-2.5"
                    placeholder="your Answer"
                  />
                  <label
                    htmlFor="No_mental"
                    className="block ml-2 text-md text-white"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="pb-6">
                  <label
                    htmlFor="youtube"
                    className="block mb-2 text-sm font-medium text-gray-300 "
                  >
                    YouTube
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-300 bg-gray-600 rounded-l-md border border-r-0 border-gray-600">
                      YouTube.com/c/
                    </span>
                    <Field
                      type="text"
                      id="youtube"
                      name="youtube"
                      className="bg-gray-700 border border-gray-600 text-white text-sm  block w-full p-2.5"
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="twitter"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Twitter
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-300 bg-gray-600 rounded-l-md border border-r-0 border-gray-600">
                      Twitter.com/
                    </span>
                    <Field
                      type="text"
                      id="twitter"
                      name="twitter"
                      className="bg-gray-700 border border-gray-600 text-white text-sm  block w-full p-2.5"
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="instagram"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Instagram
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-300 rounded-l-md border border-r-0 border-gray-600 bg-gray-600">
                      Instagram.com/
                    </span>
                    <Field
                      type="text"
                      id="instagram"
                      name="instagram"
                      className="bg-gray-700 border border-gray-600 text-white text-sm  block w-full p-2.5"
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="twitch"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Twitch
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm bg-gray-600 rounded-l-md border border-r-0 border-gray-600 text-gray-300">
                      Twitch.com/
                    </span>
                    <Field
                      type="text"
                      id="twitch"
                      name="twitch"
                      className="bg-gray-700 border border-gray-600 text-white text-sm  block w-full p-2.5"
                    />
                  </div>
                </div>
              </div>
              <button
                disabled={!(isValid && dirty)}
                type="submit"
                className={`text-black rounded-lg p-2 duration-300 font-bold block w-52 mx-auto mt-10 ${(isValid && dirty) ? 'bg-gray-200 hover:hover:opacity-80' : 'bg-gray-500'}`}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Apply;