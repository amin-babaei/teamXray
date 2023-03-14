import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../../helpers/Loading";
import { getAllApply } from './../../../services/apply';
import ApplyDrop from './ApplyDrop';

const AdminApply = () => {
  const [apply, setApply] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const getBlogList = async() => {
      setLoading(true)
      try{
        const {data} = await getAllApply();
        setApply(data.Applys);
        setLoading(false)
      }catch(error){
        console.log(error)
        setLoading(false)
      }
  };
  getBlogList()
  },[])

  return (
        <div className="containerr py-10 min-h-screen">
          <Helmet>
            <title>Admin-Apply</title>
          </Helmet>
          {loading===true && <Loading/>}
          {apply.map(item => (
            <ApplyDrop key={item._id} data={item}/>
          ))}

        </div>
    
  )
}

export default AdminApply