import React from 'react'

const HomePage = () => {
  return (
    <>
      <section className=' h-screen w-[40vw] m-10 mt-10 font-sans'>
        <div className=' text-left'>
            <h1 className='text-3xl font-bold text-[#3751FE] mb-32'>Digital</h1>
            <p className='text-3xl font-bold text-[#3751FE] mb-2'> Artificial Intelligence Driving </p>
            <p className='text-3xl font-bold text-[#3751FE]'>Results For The Travel Industry</p>
            <p className='mt-8'> Welcome  back! Please login to your account.</p>
        </div>

        <form className=' w-[30vw]'>
            <div className='flex flex-col mt-10 '>
                <p className=' text-slate-500'>Frame</p>
                <input type='text' placeholder='Email Address' required='true' className=' border p-4'/>
                <input type='password' placeholder='Password' required='true' className=' border p-4'/>
            </div>

            <div className=' flex justify-between mb-6 mt-3'>
                <div>
                  <input type='checkbox' id='remember'/>{' '}
                  <label htmlFor='remember'>Remember me</label>
                </div>
                <p> Forgot Password ?</p>
            </div>

            <div className='flex justify-between'>
                <button type='submit' className=' bg-[#3751FE] text-white px-6 py-3 rounded-md'>Login</button>
                <button className=' text-[#3751FE] px-5 py-3 rounded-md border-blue-700'>SignUp</button>
            </div>

        </form>

        <div className='mt-4 flex'>
            <p className=' mr-6'>or login with</p>
            <ul className=' text-[#3751FE] flex justify-around gap-6 '>
              <li className=' cursor-pointer'>Facebook</li>
              <li className=' cursor-pointer'>Linkedin</li>
              <li className=' cursor-pointer'>Google</li>
            </ul>
        </div>
      </section>

    </>
  )
}

export default HomePage