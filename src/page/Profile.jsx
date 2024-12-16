import React,{useState,useEffect,useContext} from 'react'
import Navbar from '../components/Navbar/Nav';
import NavMobile from '../components/Navbar/NavMobile';
import BoxMenu from '../components/Profile/BoxMenu';
import BoxDataUser from '../components/Profile/BoxDataUser';
import IconProfile from '../components/Profile/IconProfile';
import { AuthContext } from "../context/AuthProvider";
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState(null); // เก็บข้อมูลผู้ใช้
  const [isEditing, setIsEditing] = useState(false); // โหมดแก้ไข
  const { backendUrl, token } = useContext(AuthContext);
  // ดึงข้อมูลผู้ใช้เมื่อเปิดหน้า
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/user/userinfo/`,
          { headers: { token } },); // ดึงข้อมูลจาก API
        setUserData(response.data.user); // เก็บข้อมูลใน state
        console.log(response.data.user)
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:', error);
      }
    };
    fetchUserData();
  }, []);

  // อัปเดตข้อมูลในฟอร์มหลังการแก้ไข
  const refreshUserData = async () => {
    try {
      const response = await axios.get('/api/user'); // ดึงข้อมูลใหม่
      setUserData(response.data);
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูลใหม่:', error);
    }
  };

  return (
    <>
      <Navbar />
      <NavMobile />
      <IconProfile onEditClick={() => setIsEditing(true)} />
      <div className="flex">
        <BoxMenu />
        {userData ? (
          <BoxDataUser
            userData={userData}
            isEditing={isEditing}
            onSave={() => {
              refreshUserData();
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <p>กำลังโหลดข้อมูล...</p>
        )}
      </div>
    </>
  );
}

export default Profile;