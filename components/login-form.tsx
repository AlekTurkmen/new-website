'use client'

import GoogleSignIn from '@/components/GoogleSignIn'
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/shadcn/card";

export function LoginForm() {
  // const router = useRouter();

  // const handleBackToHome = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   router.push('/');
  // };

  // async function handleGoogleLogin() {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //   });

  //   if (error) {
  //     console.error('Error logging in with Google:', error.message);
  //   } else {
  //     console.log('Redirecting to Google OAuth...');
  //   }
  // }

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Welcome to Relevancy</h2>
        <p className="text-gray-400">
          Sign up or log in to your account to continue.
        </p>
      </div>
      
      <div className="w-full max-w-sm">
        <GoogleSignIn />
      </div>

      <div className="text-center text-sm text-gray-400">
        By signing up you agree to our{" "}
        <Link href="/terms" className="underline hover:text-gray-300">
          Terms of Service
        </Link>
          <br />
        {" "}and{" "}
        <Link href="/privacy" className="underline hover:text-gray-300">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}