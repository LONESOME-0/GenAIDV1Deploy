import React,{useContext,useState,createContext, useEffect} from 'react'
import axios from 'axios'
import { AuthContext } from './AuthProvider'

export const CategoryContext = createContext()
const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { backendUrl } = useContext(AuthContext);
    const categoryData = async () => {
        try {
          const fetchData = await axios.get(backendUrl + "/api/category");
          setCategory(fetchData.data);
          setLoading(false);
          console.log("cate", fetchData);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
useEffect(() => {
    categoryData();
  }, []);

  return (
    <CategoryContext.Provider value={{ category, loading }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider