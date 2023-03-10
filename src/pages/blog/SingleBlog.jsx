import { useParams } from 'react-router-dom'
import BreadCrumb from '../../helpers/BreadCrumb';
import Loading from '../../helpers/Loading';
import CopyUrl from '../../helpers/CopyUrl';
import { Helmet } from 'react-helmet-async';
import { useGetBlogQuery } from '../../app/features/blogSlice';

const SingleBlog = () => {
  const {title} = useParams()
  const { data, isLoading, isError } = useGetBlogQuery(title);

  return (
    <section className='bg-black py-16 font-xcontent min-h-screen'>
      <Helmet>
        <title>{title.split("-").join(" ")}</title>
      </Helmet>
      <div className="containerr">
      {isLoading && <Loading/>}
      {data?.blog.map(post => (
        <main key={post._id}>
          <header className='w-full sm:mb-12 sm:flex justify-between items-baseline'>
            <h1 className='text-2xl font-extrabold md:w-[35rem] md:text-3xl leading-10'>{post.title.split('-').join(' ')}</h1>
            <BreadCrumb title={post.title}/>
          </header>
          <img src={`${process.env.REACT_APP_BASE_URL}/${post.imageUrl}`} alt="" className='w-full h-60 sm:h-[31rem]'/>
          <p className='text-lg leading-10 text-justify my-10'>{post.body}</p>
          <p className='my-5'>Published : {new Date(post.createdAt).toLocaleDateString()}</p>
          <CopyUrl/>
        </main>
      ))}
      {(data?.blog.length === 0 || isError) && <h2 className="text-5xl text-center py-10 font-main">not found</h2>}
      </div>
    </section>
  )
}

export default SingleBlog