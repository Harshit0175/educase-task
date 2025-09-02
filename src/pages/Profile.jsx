import React from 'react'

const Profile = () => {
    userData = {
        username: "Marry Doe",
        email: "Marry@gmail.com",
        bio: "Lorem ipsum dolor sit amet, consetetur sadip scing elitr. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.",
        pictureSrc: "cat_profile.jpg",
        pictureName: "cat profile picture",
    }
    return (
        
            <div className=' min-h-screen w-screen bg-gray-300 flex items-center justify-center'>
                <div className='bg-white w-full max-w-md h-full md:h-[700px] rounded-xl flex flex-col '>
                    <div className='text-2xl p-6 font-semibold border-b border-gray-200 shadow-2xs pb-5'>Account Settings</div>

                   


                    


                </div>
            </div>
    
    )
}

export default Profile
