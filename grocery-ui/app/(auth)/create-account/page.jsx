"use client"
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function CreateAccount() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onCreateAccount=()=>{
    GlobalApi.registerUser(username,email,password).then(resp=>{
      console.log(resp.data.user)
      console.log(resp.data.jwt)
    })
  }
  return (
    <div className="flex items-baseline justify-center my-10">
      <div
        className="flex flex-col items-center justify-center 
      p-10 bg-blue-200 border border-gray-200 shadow-lg shadow-gray-500 rounded-xl"
      >
        <Image src="/logo_final_1.png" width={200} height={200} alt="logo" />
        <h2 className="font-bold text-3xl">Create Account</h2>
        <h2 className="text-gray-500">Enter your Email and Password to Create an account
        </h2>
        <div className="w-full flex flex-col gap-5 mt-7">
            <Input placeholder='Username'
            onchange={(e)=>setUsername(e.target.value)}
            />
            <Input placeholder='name@example.com'
            onchange={(e)=>setEmail(e.target.value)}
            />
            <Input type='password' 
            placeholder='Password'
            onchange={(e)=>setPassword(e.target.value)}
            />
            <Input type='Confirm password' 
            placeholder='Confirm Password'
            onchange={(e)=>setPassword(e.target.value)}
            />
            <Button className="bg-blue-500" onClick={()=>onCreateAccount()}
              disabled={(username||email||password)}
              >Create an Account</Button>
            <p>Already have an account?
                <Link href={'/sign-in'} className="text-blue-500 italic"> Click here to Sign In</Link>
            </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
