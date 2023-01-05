import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useAdminContext } from "../../contexts/AdminStateContext";
import AdminHeading from "../../components/admin/AdminHeading";

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

  const { currentColor } = useAdminContext();

  return (
    <div>
      <AdminHeading title={"Админ нэмэх"} category="Админ" />
      <div className="flex justify-center">
        <div className="w-full max-w-[600px]">
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
                className={`block outline-2 w-full rounded-md bg-transparent outline py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                  errors.name ? "outline-red-500" : undefined
                }`}
                {...register("name")}
                placeholder="Нэр"
                style={{ transition: "all .15s ease", outline: currentColor }}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.name.message}
                </p>
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
                className={`block w-full outline-2 outline rounded-md bg-transparent py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                  errors.email ? "outline-red-500" : undefined
                }`}
                {...register("email")}
                placeholder="Email"
                style={{ transition: "all .15s ease", outline: currentColor }}
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
                className={`block w-full outline-2 outline bg-transparent rounded-md py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                  errors.password ? "outline-red-500" : undefined
                }`}
                {...register("password")}
                placeholder="Password"
                style={{ transition: "all .15s ease", outline: currentColor }}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="text-center mt-10">
              <button
                className={` text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-4 rounded-xl shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full`}
                type="submit"
                style={{
                  transition: "all .15s ease",
                  backgroundColor: currentColor,
                }}
              >
                Бүртгүүлэх
              </button>
            </div>
          </form>
          <div className="flex justify-end pt-3">
            <Link to="/admin/login" className="hover:underline gray-200">
              Аль хэдийн бүртгүүлсэн
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
