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
    <section className='bg-black py-16 font-xcontent section-over'>
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
          <div className='prose max-w-none prose-xl prose-headings:text-white prose-headings:uppercase prose-h1:md:text-3xl prose-h1:text-2xl prose-h2:text-2xl prose-p:text-gray-300 prose-p:text-lg prose-p:leading-10 prose-a:text-red-800 prose-a:font-main prose-li:text-white my-10' dangerouslySetInnerHTML={{ __html: post.body }}/>
          <p className='my-5 italic text-gray-300'>Published at: {new Date(post.createdAt).toLocaleDateString()}</p>
          <CopyUrl/>
        </main>
      ))}
      {(data?.blog.length === 0 || isError) && <h2 className="text-5xl text-center py-10 font-main">not found</h2>}
      </div>
    </section>
  )
}

export default SingleBlog