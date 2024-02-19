import { useState,useEffect } from "react";
import {useSelector } from "react-redux";
const DashPosts = () => {
    const {currentUser}  = useSelector((state) => state.user);
    const [userPosts, setUserPosts] = useState();
    useEffect(() => {
        
        const fetchPosts = async() => {
              try{
                 const response = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
                 const data = await response.json();
                 if (response.ok) { 
                    setUserPosts(data.posts);
                 }
              }catch(error) {
                console.log("error",error.message);
              }
        }

        fetchPosts();
    },[currentUser._id]);

   console.log(userPosts);

  return (
    <div className="w-full mx-auto min-h-screen p-4">
          <h1 className="text-2xl font-bold">Manage Posts</h1>
          <div className="">
               {userPosts && userPosts.map((each) => (
                   <div key={each.title}>
                        <p>{new Date(each.updatedAt).toLocaleDateString()}</p>
                        <img src={each.image} className="w-28"/>
                        <h2>{each.title}</h2>
                   </div>
               ))}
          </div>
    </div>
  )
}

export default DashPosts