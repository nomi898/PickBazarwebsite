import { Button, Card, Input, TextField } from "@mui/material";
import React from "react";
import logo from "../../assets/images/reg-logo.webp";
import Divider from "@mui/material/Divider";
import { Link } from "react-router";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const initialRegisterFormValues = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialRegisterFormValues,
    resolver: yupResolver(registerSchema),
  });

  const registerSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* Responsive Card - full width on mobile, 1/3 width on desktop */}
      <Card
        className="bg-white mx-auto my-10"
        sx={{
          width: { xs: "95%", sm: "80%", md: "60%", lg: "33.333%" }, // Responsive width
          maxWidth: "500px", // Maximum width to prevent too wide on large screens
        }}
      >
        <div className="my-10">
          <div className="flex flex-col items-center my-7">
            {/* Responsive logo */}
            <img
              src={logo}
              alt="logo"
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "200px", // Control logo size
              }}
            />
            <p
              className="text-gray-500 italic my-7"
              style={{
                fontSize: "14px", // Consistent font size
              }}
            >
              Register new account
            </p>
          </div>
          <form onSubmit={handleSubmit(registerSubmit)}>
            {/* name textfield - responsive width */}
            <div
              className="flex justify-center my-5"
              style={{
                padding: "0 16px", // Add horizontal padding on mobile
              }}
            >
              <div style={{ width: "100%", maxWidth: "350px" }}>
                <p className="font-bold">Name</p>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      sx={{ width: "100%" }} // Full width of container
                      {...field}
                    />
                  )}
                />
                <p className="text-red-500">{errors?.name?.message}</p>
              </div>
            </div>
            {/* email textfield - responsive width */}
            <div
              className="flex justify-center my-5"
              style={{
                padding: "0 16px", // Add horizontal padding on mobile
              }}
            >
              <div style={{ width: "100%", maxWidth: "350px" }}>
                <p className="font-bold">Email</p>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      sx={{ width: "100%" }} // Full width of container
                      {...field}
                    />
                  )}
                />
                <p className="text-red-500">{errors?.email?.message}</p>
              </div>
            </div>
            {/* password textfield - responsive width */}
            <div
              className="flex justify-center my-5"
              style={{
                padding: "0 16px", // Add horizontal padding on mobile
              }}
            >
              <div style={{ width: "100%", maxWidth: "350px" }}>
                <p className="font-bold">Password</p>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      sx={{ width: "100%" }} // Full width of container
                      {...field}
                    />
                  )}
                />
                <p className="text-red-500">{errors?.password?.message}</p>
              </div>
            </div>
            {/* Responsive register button */}
            <div
              className="flex justify-center my-8"
              style={{
                padding: "0 16px", // Add horizontal padding on mobile
              }}
            >
              <div style={{ width: "100%", maxWidth: "350px" }}>
                <Button
                  type="submit"
                  sx={{
                    width: "100%", // Full width on all devices
                    py: 2,
                    bgcolor: "#009f7f",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  Register
                </Button>
              </div>
            </div>
            {/* divider - responsive margins */}
            <div
              className="flex items-center my-4"
              style={{
                margin: "16px 32px", // Responsive horizontal margins
              }}
            >
              <Divider sx={{ flex: 1 }} />
              <span className="px-4 text-gray-500">or</span>
              <Divider sx={{ flex: 1 }} />
            </div>
            {/* Responsive login link */}
            <div>
              <div
                className="flex justify-center"
                style={{
                  flexWrap: "wrap", // Wrap text on very small screens
                  padding: "0 16px",
                  textAlign: "center",
                }}
              >
                <div
                  className="text-gray-500 px-1"
                  style={{
                    fontSize: "16px", // Consistent font size
                  }}
                >
                  already have an account?{" "}
                </div>
                <Link
                  to="/signin"
                  className="text-[#009f7f] font-bold underline"
                  style={{
                    fontSize: "16px", // Consistent font size
                  }}
                >
                  login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;
