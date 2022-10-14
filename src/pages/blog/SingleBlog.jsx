/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { getBlog } from './../../services/blog';
import { loadingSpinner } from '../../app/loadingSlice';
import { useDispatch,useSelector } from 'react-redux';
import BreadCrumb from '../../helpers/BreadCrumb';
import Loading from '../../helpers/Loading';
import CopyUrl from '../../helpers/CopyUrl';
import { Helmet } from 'react-helmet-async';
import config from '../../services/config.json'

const SingleBlog = () => {
  const {loading} = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  const [data,setData] = useState([])
  const {title} = useParams()
  
  useEffect(()=>{
    const fetch = async ()=>{
      dispatch(loadingSpinner(true));
      try {
        const {data} = await getBlog(title)
        setData(data.blog)
        dispatch(loadingSpinner(false));
      } catch (error) {
        console.log(error);
        dispatch(loadingSpinner(false));
      }
    }
    fetch()
  },[])
  return (
    <section className='bg-black py-16 font-xcontent'>
      <Helmet>
        <title>{title.split("-").join(" ")}</title>
      </Helmet>
      <div className="containerr">
      {loading===true && <Loading/>}
      {data.map(post => (
        <main key={post._id}>
          <header className='w-full sm:mb-12 sm:flex justify-between items-baseline'>
            <h1 className='text-2xl font-extrabold md:w-[35rem] md:text-3xl leading-10'>{post.title.split('-').join(' ')}</h1>
            <BreadCrumb title={post.title}/>
          </header>
          <img src={`${config.serverapi}/${post.imageUrl}`} alt="" className='w-full h-60 sm:h-[31rem]'/>
          <p className='text-lg leading-10 text-justify my-10'>{post.body}</p>
          <p className='my-5'>Published : {new Date(post.createdAt).toLocaleDateString()}</p>
          <CopyUrl/>
        </main>
      ))}
      </div>
    </section>
  )
}

export default SingleBlog