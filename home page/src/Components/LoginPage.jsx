import React from 'react'
import LoginImage from '../assets/loginImage.png'
import GoogleIcon from '../assets/google.png'
import FacebookIcon from '../assets/facebook.png'
import AppleIcon from '../assets/apple.png'

const LoginPage = () => {
  return (
    <div>
        <div className='h-[80px] w-full flex justify-end items-center p-8'>
            <button className=' border left-auto px-5 py-4'>Log in</button>
        </div>
        <hr></hr>

        <section className=' flex'>
            <div className=' w-[65vw] flex justify-center'>

            {/* card for login ways  */}
            <div className=' w-[30vw] flex flex-col gap-4 justify-center'>
                <h1 className=' text-5xl font-bold'>Explore the world to experience the beauty of nature</h1>
                <p className=' text-lg mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus</p>
                <button className='w-full border rounded-full py-3 px-6 flex items-center justify-center gap-3'>
                    <img src={GoogleIcon}/>
                    <span>Continue with Google</span> 
                </button>
                <button className='w-full border rounded-full py-3 px-6 flex items-center justify-center gap-3'>
                    <img src={FacebookIcon}/>
                    <span>Continue with Facebook</span>
                </button>
                <button className='w-full border rounded-full py-3 px-6 flex items-center justify-center gap-3'>
                    <img src={AppleIcon}/>
                    <span>Continue with Apple</span>
                </button>
                <hr></hr>
                <button className='w-full border rounded-full py-3 px-6 flex items-center justify-center gap-3 bg-black text-white'>Signup with email</button>
                <p>By signing up, you agree to the Terms of Service and Privacy Policy, including cookie use.</p>
            </div>
            {/* card for login ways  */}
            
            </div>
            <img className=' w-[35vw]'src={LoginImage} alt='LoginImage'/>
        </section>
    </div>
  )
}

export default LoginPage