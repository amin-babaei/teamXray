import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Loading from "../../../helpers/Loading";
import { getAllApply } from './../../../services/apply';
import ApplyDrop from './ApplyDrop';
import { useDispatch, useSelector } from "react-redux";
import {loadingSpinner} from '../../../app/loadingSlice.js'

const AdminApply = () => {
  const [apply, setApply] = useState([]);
  const {loading} = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  useEffect(()=>{
    const getBlogList = async() => {
      dispatch(loadingSpinner(true));
      try{
        const {data} = await getAllApply();
        setApply(data.Applys);
        dispatch(loadingSpinner(false));
      }catch(error){
        console.log(error)
        dispatch(loadingSpinner(false));
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