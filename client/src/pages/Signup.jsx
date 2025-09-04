import React from 'react'
import { SignupFormDemo } from '../components/SignupFormDemo'
import { LoginForm } from '../components/LoginForm'

function Signup() {
  return (
    <>
      <div className='relative w-full h-screen bg-background flex items-center justify-center'>
        <SignupFormDemo />
        {/* <LoginForm /> */}
      </div>
    </>
  )
}

export default Signup