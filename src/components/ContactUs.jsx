import emailjs from '@emailjs/browser';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useRef } from 'react';
import { toastSuccess } from '../helpers/Toast';
import { sendEmailtSchema } from '../helpers/validation';
const ContactUs = () => {
  const form = useRef();
  const sendEmail = () => {
    emailjs.sendForm('service_wh4dxcl', 'template_y5vun3c', form.current, 'LXmB1SEQcsuxpVpRi')
      .then(() => {
          console.log('your message sent to aminbabaei_dev@yahoo.com');
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
      toastSuccess('Email sent successfully');
  };

  return (
    <section className="bg-xred py-10" id="contact">
      <h3 className="text-center text-3xl text-white">Contact Us</h3>
      <div className="containerr mt-14">
        <div className="flex justify-center items-center">
          <div className="bg-black rounded-lg w-full sm:w-3/5 px-5 sm:px-16 py-16">
            <Formik 
              initialValues={{
                name: '',
                email: '',
                subject:'',
                message: ''
              }}
            validationSchema={sendEmailtSchema}
            onSubmit={(values) => {
              sendEmail(values)
            }}
            >
              <Form className="lowercase" ref={form}>
                <ErrorMessage
                           name="name"
                           render={(msg) => (
                             <div className="text-xred">{msg}</div>
                           )}
                         />
                <Field
                  type="text"
                  className="input focus:border-xred focus:border-b-4"
                  placeholder="Name"
                  name='name'
                />
                  <ErrorMessage
                              name="email"
                              render={(msg) => (
                                <div className="text-xred">{msg}</div>
                              )}
                            />
                <Field
                  type="email"
                  className="input focus:border-xred focus:border-b-4"
                  placeholder="Email"
                  name='email'
                />
                  <ErrorMessage
                              name="subject"
                              render={(msg) => (
                                <div className="text-xred">{msg}</div>
                              )}
                            />
                <Field
                  type="text"
                  className="input focus:border-xred focus:border-b-4"
                  placeholder="Subject"
                  name='subject'
                />
                    <ErrorMessage
                                 name="message"
                                 render={(msg) => (
                                   <div className="text-xred">{msg}</div>
                                 )}
                               />
                  <Field
                    as="textarea"
                    className="resize-none p-2 rounded-md my-5 w-full h-32 bg-black border outline-none focus:border-xred"
                    placeholder="type your message here"
                    name='message'
                  ></Field>
                <button
                  type="submit"
                  className="btn w-full focus:outline-none"
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
