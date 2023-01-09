import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Spin } from "antd";

function Login() {
  const { login, currentUser, loading, err } = useContext(AuthContext);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Имэйлэ зөв оруулана уу")
      .required("Имэйлэ оруулана уу"),
    password: yup.string().required("Нууц үгээ оруулана уу").min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleLogin = async ({ email, password }) => {
    await login({ email, password });
  };

  const navigate = useNavigate();
  useEffect(() => {
    const checkUser = () => {
      currentUser && navigate("/");
    };
    checkUser();
  }, [currentUser]);

  return (
    <div className="sm:h-screen mt-10 sm:mt-0 flex justify-center md:items-center">
      <div className="w-full max-w-[600px] p-4">
        <div className="flex justify-center mb-10">
          <div className="flex items-center">
            <img src="/images/logo1.png" className="max-w-[70px]" />
            <p className="text-slate-700 font-semibold ">
              TALIIN KHISHIG MINING
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Имэйл
            </label>
            <input
              type="email"
              className={`block w-full bg-transparent outline-2 rounded-md outline py-[10px] px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                errors.email ? "outline-red-500" : "outline-primary"
              }`}
              {...register("email")}
              placeholder="Имэйл"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Нууц үг
            </label>
            <input
              type="password"
              className={`block w-full bg-transparent outline-2 outline rounded-md py-[10px] px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                errors.password ? "outline-red-500" : "outline-primary"
              }`}
              {...register("password")}
              placeholder="Нууц үг"
              style={{ transition: "all .15s ease" }}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="text-center mt-6">
            <Spin spinning={loading}>
              <button
                className="bg-primary h-[50px] text-white active:bg-gray-700 text-sm font-bold uppercase px-6 rounded-lg shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full"
                type="submit"
                style={{ transition: "all .15s ease" }}
              >
                {!loading ? "Нэвтрэх" : null}
              </button>
            </Spin>
          </div>
        </form>
        <div className="flex justify-end">
          <Link
            to={"/register"}
            className="text-slate-500 py-3 hover:underline"
          >
            Бүртгүүлэх
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
