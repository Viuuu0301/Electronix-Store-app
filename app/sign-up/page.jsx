'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [creatingUser, setCreatingUser] = useState(false)
  const [userCreated, setUserCreated] = useState(false)
  const [error, setError] = useState(false)

  async function handleFormSubmit(ev) {
    ev.preventDefault()
    setCreatingUser(true)
    setError(false)
    setUserCreated(false)
    const response = await fetch('/api/sign-up', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      setUserCreated(true)
    } else {
      setError(true)
    }
    setCreatingUser(false)
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <section className="max-w-3xl mx-auto border border-gray-500 bg-black/10 p-8 mt-8 rounded-lg w-full">
        <h1 className="text-center text-4xl font-semibold">Sign Up</h1>
        {userCreated && (
          <div className="my-4 text-center">
            User created.
            <br />
            Now you can{' '}
            <Link className="underline" href={'/login'}>
              Login &raquo;
            </Link>
          </div>
        )}
        {error && (
          <div className="my-4 text-center">
            An error has occurred.
            <br />
            Please try again later
          </div>
        )}
        <form
          className="space-y-4 md:space-y-6 mt-8"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              disabled={creatingUser}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@email.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              disabled={creatingUser}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light ">
                I accept the{' '}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            disabled={creatingUser}
            type="submit"
            className="px-4 py-2 border border-gray-500 rounded-md bg-black/50 hover:text-black hover:bg-white w-full text-center"
          >
            Create an account
          </button>
          <p className="text-sm font-light">
            Already have an account?{' '}
            <Link href="/login" className="font-medium">
              Login here
            </Link>
          </p>
        </form>
        <div className="my-4 text-center">or login with:</div>
        <button
          className="w-full text-center border border-gray-500 py-2 flex justify-center items-center gap-4 bg-white text-black rounded-lg"
          onClick={() => signIn('google', { callbackUrl: '/' })}
        >
          <Image src="/google.png" width={32} height={32} alt="" />
          Login with Google
        </button>
      </section>
    </div>
  )
}

export default SignUp
