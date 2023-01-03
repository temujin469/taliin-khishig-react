import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Нэрээ оруулана уу").max(30),
  email: yup
    .string()
    .email("Имэйлэ зөв оруулана уу")
    .required("Имэйлэ оруулана уу"),
  password: yup.string().required("Нууц үгээ оруулана уу").min(6),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  async function handleRegister(data) {
    // await signup(dispatch, data)
  }

  return (
    <div className="flex md:items-center justify-center h-screen">
      <div className="w-full max-w-[600px] p-5">
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
              // className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                errors.name ? "border-red-500" : "border-primary"
              }`}
              {...register("name")}
              placeholder="Нэр"
              style={{ transition: "all .15s ease" }}
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
              // className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                errors.email ? "border-red-500" : "border-primary"
              }`}
              {...register("email")}
              placeholder="Email"
              style={{ transition: "all .15s ease" }}
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
              // className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                errors.password ? "border-red-500" : "border-primary"
              }`}
              {...register("password")}
              placeholder="Password"
              style={{ transition: "all .15s ease" }}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="text-center mt-10">
            <button
              className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-4 rounded-xl shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full"
              type="submit"
              style={{ transition: "all .15s ease" }}
            >
              Бүртгүүлэх
            </button>
          </div>
        </form>
        <div className="flex justify-end pt-3">
          <Link to="/admin/login" className="hover:underline text-primary">
            Аль хэдийн бүртгүүлсэн
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
