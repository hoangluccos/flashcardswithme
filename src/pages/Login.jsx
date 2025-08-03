import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import LOGIN_IMAGE from "../assets/login_img.png";
import InputAdornment from "@mui/material/InputAdornment";
import { AccountCircle, VisibilityOff } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    fontSize: "1.1rem",
  },
  "& .MuiInputBase-input": {
    padding: "12px 14px",
  },
}));

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <Box className="flex flex-col justify-center items-center w-full h-screen bg-[#FDE8FE]">
      <Box className="flex justify-center items-center">
        <img src={LOGIN_IMAGE} alt="img_login" />
        <Typography variant="h2" className="font-bold">
          LOGIN
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack className="flex flex-col gap-3 w-[400px] mt-5">
          <Box className="flex flex-col gap-1">
            <Typography className="text-[1.2rem] font-bold">
              Username
            </Typography>
            <StyledTextField
              {...register("username", { required: "Username is required" })}
              type="text"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </Box>

          <Box className="flex flex-col gap-1">
            <Typography className="text-[1.2rem] font-bold">
              Password
            </Typography>
            <StyledTextField
              {...register("password", { required: "Password is required" })}
              type={showPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <RemoveRedEyeIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
          >
            Login
          </button>
        </Stack>
      </form>
    </Box>
  );
}

export default Login;
