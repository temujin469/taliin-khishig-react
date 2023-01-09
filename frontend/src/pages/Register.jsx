import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import baseUrl from "../utils/axios";
import { toast } from "react-hot-toast";
import { Spin } from "antd";
import catchResponseErr from "../utils/catchResponseErr";

function Register() {
  const [loading, setLoading] = useState(false);
  const schema = yup.object().shape({
    name: yup.string().required("Нэрээ оруулана уу").max(30),
    email: yup
      .string()
      .email("Имэйлэ зөв оруулана уу")
      .required("Имэйлэ оруулана уу"),
    password: yup
      .string()
      .required("Нууц үгээ оруулана уу")
      .min(6)
      .when("oldPassword", (oldPassword, field) =>
        oldPassword ? field.required() : field
      ),
    confirmPassword: yup
      .string()
      .required("Нууц үгээ давтан оруулана уу")
      // .when("password", (password, field) =>
      //   password
      //     ? field
      //         .required("Нууц үгээ давтан оруулана уу")
      //         .oneOf([yup.ref("password")], "нууц үг таарахгүй байна")
      //     : field
      // ),
      .oneOf([yup.ref("password"), null], "нууц үг таарахгүй байна"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const registerMutate = useMutation(
    async (body) => {
      return await baseUrl.post("/users/register", body);
    },
    {
      onSuccess: () => {
        setLoading(false);
        toast.success("Та амжилттай бүртгэгдлээ");
        navigate("/login");
      },
      onError: (err) => {
        setLoading(false);
        toast.error(catchResponseErr(err));
        console.log(err);
      },
    }
  );

  const handleRegister = (body) => {
    setLoading(true);
    registerMutate.mutate({ ...body, password: body.confirmPassword });
  };

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

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Нэр
            </label>
            <input
              type="text"
              className={`block outline-2 w-full py-[10px] rounded-md bg-transparent outline py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                errors.name ? "outline-red-500" : "outline-primary"
              }`}
              {...register("name")}
              placeholder="Нэр"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>
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
            <div className="mb-5">
              <input
                type="password"
                className={`block w-full bg-transparent outline-2 outline rounded-md py-[10px] px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                  errors.password ? "outline-red-500" : "outline-primary"
                }`}
                {...register("password")}
                placeholder="Нууц үг"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <input
              type="password"
              className={`block w-full bg-transparent outline-2 outline rounded-md py-[10px] px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                errors.confirmPassword ? "outline-red-500" : "outline-primary"
              }`}
              {...register("confirmPassword")}
              placeholder="Нууц үг"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="text-center mt-6">
            <Spin spinning={loading}>
              <button
                className="bg-primary h-[50px] text-white active:bg-gray-700 text-sm font-bold uppercase px-6 rounded-lg shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full"
                type="submit"
              >
                {!loading ? "Бүртгүүлэх" : null}
              </button>
            </Spin>
          </div>
        </form>
        <div className="flex justify-end">
          <Link to={"/login"} className="text-slate-500 py-3 hover:underline">
            Аль хэдийн бүртгүүлсэн
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
