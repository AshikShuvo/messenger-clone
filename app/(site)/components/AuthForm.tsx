'use client'
import {useCallback, useState} from "react";
import {AuthVariant} from "@/app/types/auth";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import { BsGithub, BsGoogle  } from 'react-icons/bs';
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/inputs/Button";
import AuthSocialButton from "@/app/(site)/components/AuthSocialButton";

const AuthForm=()=>{
    const [authVariant,setAuthVariant]=useState<AuthVariant>("LOGIN");
    const [isLoading,setIsLoading]=useState<boolean>(false);

    const toggleVariant=useCallback(()=>{
        if(authVariant==="LOGIN"){
            setAuthVariant("Register");
        }else {
            setAuthVariant("LOGIN");
        }
    },[authVariant])

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    }=useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true);
        if(authVariant==="Register"){
        //     axios register
        }
        if(authVariant==="LOGIN"){
        //     axios login
        }
        setIsLoading(false)
    }
    const socialAction=(state:string)=>{
        setIsLoading(true);
    //     axios social sign in
    }


    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-ms'>
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10"
            >
                <form  className="space-y-6"  onSubmit={handleSubmit(onSubmit)}>
                    {authVariant === "Register" && (
                        <Input
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                            id="name"
                            label="Name"
                        />
                    )}
                    <Input
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        id="email"
                        label="Email address"
                        type="email"
                    />
                    <Input
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        id="password"
                        label="Password"
                        type="password"
                    />
                    <div>
                        <Button disabled={isLoading} fullWidth type="submit">
                            {authVariant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center ">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div  className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">
                                    Or continue with
                                </span>
                        </div>
                    </div>
                        <div className="mt-6 flex gap-2">
                            <AuthSocialButton
                                icon={BsGithub}
                                onClick={() => socialAction('github')}
                            />
                            <AuthSocialButton
                                icon={BsGoogle}
                                onClick={() => socialAction('google')}
                            />
                    </div>
                    </div>
                <div
                    className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500 "
                >
                    <div>
                        {authVariant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="underline cursor-pointer"
                    >
                        {authVariant === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>
                </div>
                </div>
            </div>
    )
}

export default AuthForm;