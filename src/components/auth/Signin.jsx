import { Button, Card, Input, TextField } from '@mui/material'
import React from 'react'
import logo from '../../assets/images/reg-logo.webp'
import Divider from '@mui/material/Divider';
import { Link } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const siginSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

const siginFormValues={
    email:"",
    password:"",
}
const Signin = () => {
  
  const { 
    control,
    handleSubmit,
    formState: { errors },
    } = useForm({
    defaultValues: 
        siginFormValues, 
        resolver: yupResolver(siginSchema),
    });
  const SiginSubmit=(data)=>{
    console.log(data);
  }
return (
<div >
  <Card  className='bg-white mx-auto my-10 w-1/3'>
        <div className='my-10'>
            <div className='flex flex-col items-center my-7'> 
                <img src={logo} alt="logo" />
                <p className='text-gray-500 italic my-7'>Login to dashboard</p>
            </div>
            
        <form onSubmit={handleSubmit(SiginSubmit)}>

        {/* email textfield  */}
        <div className='flex justify-center my-5 '>
        <div>
            <p className='font-bold'>Email</p>
            <Controller
                name="email"
                control={control}
                 render={({ field }) => <TextField sx={{ width: 350 }} {...field} />}
           />
           <p className='text-red-500'>{errors?.email?.message}</p>
            </div>
        </div>
        {/* password textfield  */}
        <div className='flex justify-center my-5'>
        <div>
            <p className='font-bold'>Password</p>
            <Controller
                name="password"
                control={control}
                 render={({ field }) => <TextField sx={{ width: 350 }} {...field} />}
           />
            <p className='text-red-500'>{errors?.password?.message}</p> 
            </div>
        </div>

        <div className='flex justify-center my-8'>
             <div>
                    <Button type='submit' sx={{px:17, py:2, bgcolor:'#009f7f',fontWeight:'bold'}}  variant="contained">
                        Login
                    </Button>
            </div>
        </div>
        {/* divider  */}
        <div className="flex items-center my-4 mx-13">
            < Divider sx={{ flex: 1 }} />
            <span className="px-4 text-gray-500">or</span>
            <Divider sx={{ flex: 1 }} />
        </div>
        <div>
            <div className='flex justify-center'>
                <div className='text-gray-500 text-lg px-1'>Don't have any account? </div>
                <Link to='/register' className='text-[#009f7f] font-bold underline text-lg'>
                   Register as Shop <br /> Owner
                </Link>
            </div>
        </div>
        </form>
        </div>

  </Card>
</div>

)
}
export default Signin
