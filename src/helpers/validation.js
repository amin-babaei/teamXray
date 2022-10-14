import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
})
export const blogSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required')
        .min(4, 'Title must be at least 4 characters long'),
    description: Yup.string()
        .required('Description is required'),
    body: Yup.string()
        .required('Body is required')
        .min(4, 'Body must be at least 4 characters long'),
    imageUrl: Yup.string()
        .required('Image URL is required')
})

export const sendEmailtSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required')
})

export const applySchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    age: Yup.string().required('Age is required'),
    phone: Yup.string().required('Phone is required'),
    discord: Yup.string().required('Discord is required'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    familiar: Yup.string().required('How did you hear about us is required'),
    current_job: Yup.string().required('Current job is required'),
    yourself: Yup.string().required('Yourself is required'),
    willAdd: Yup.string().required('What will you Add is required'),
    practice: Yup.string().required('Practice is required'),
    experiences: Yup.string().required('Experiences is required'),
    english: Yup.string().required('English is required'),
    voucher: Yup.string().required('voucher for you is required'),
    mental: Yup.string().required('Mental is required'),
})
    