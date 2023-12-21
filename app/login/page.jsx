'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginInProgress, setLoginInProgress] = useState(false)
  async function handleFormSubmit(ev) {
    ev.preventDefault()
    setLoginInProgress(true)

    await signIn('credentials')

    setLoginInProgress(false)
  }
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <section className="max-w-3xl mx-auto border border-gray-500 bg-black/10 p-8 mt-8 rounded-lg w-full">
        <h1 className="text-center text-4xl font-semibold">Log In</h1>
        <form
          className="space-y-4 md:space-y-6 mt-8"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@email.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={loginInProgress}
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
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              disabled={loginInProgress}
            />
          </div>
          <button
            disabled={loginInProgress}
            type="submit"
            className="px-4 py-2 border border-gray-500 rounded-md bg-black/50 hover:text-black hover:bg-white text-center w-full"
          >
            Log In
          </button>
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

export default Login
