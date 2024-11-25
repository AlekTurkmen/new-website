'use client'

import React from 'react'

const GoogleSignIn = () => {
  // const supabase = getSupabaseClient()

  // const handleGoogleSignIn = async () => {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //     options: {
  //       redirectTo: `${window.location.origin}/auth/callback`
  //     }
  //   })

  //   if (error) {
  //     console.error('Error signing in with Google:', error.message)
  //   }
  // }

  return (
    <div className="flex justify-center items-center">
      <button
        // onClick={handleGoogleSignIn}
        className="px-4 py-2 border flex gap-2 border-slate-700 bg-white rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
      >
        <img 
          className="w-6 h-6" 
          src="https://www.svgrepo.com/show/475656/google-color.svg" 
          loading="lazy" 
          alt="google logo"
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  )
}

export default GoogleSignIn 