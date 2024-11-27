import React from 'react';
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-top justify-center px-4">
      <LoginForm />
      <header className="row-start-1 gap-6 text-white flex-wrap items-center justify-left">  
        <a
          href="/onboarding"
          className="items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer"
        >
          To Onboarding →
        </a>
      </header>
    </div>
  )
} 