import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAdminContext } from "../../contexts/AdminStateContext";
import AdminHeading from "../../components/admin/AdminHeading";
import { Spin } from "antd";
import { useMutation, useQueryClient } from "react-query";
import baseUrl from "../../utils/axios";
import { toast } from "react-hot-toast";

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
    .oneOf([yup.ref("password"), null], "нууц үг таарахгүй байна"),
});

function RegisterAdmin() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const queryClient = useQueryClient();

  const registerMutate = useMutation(
    async (body) => {
      return await baseUrl.post("/users/register", body);
    },
    {
      onSuccess: () => {
        setLoading(false);
        toast.success("Та амжилттай бүртгэгдлээ");
        queryClient.invalidateQueries("all-users");
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
    registerMutate.mutate({
      ...body,
      role: "admin",
      password: body.confirmPassword,
    });
  };

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
                className={`block outline-2 w-full rounded-md bg-transparent outline py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                  errors.name ? "outline-red-500" : undefined
                }`}
                {...register("name")}
                placeholder="Нэр"
                style={{ outline: currentColor }}
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
                className={`block w-full outline-2 outline rounded-md bg-transparent py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                  errors.email ? "outline-red-500" : undefined
                }`}
                {...register("email")}
                placeholder="Email"
                style={{ outline: currentColor }}
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
                  className={`block w-full outline-2 outline bg-transparent rounded-md py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                    errors.password ? "outline-red-500" : undefined
                  }`}
                  {...register("password")}
                  placeholder="Password"
                  style={{ outline: currentColor }}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <input
                type="password"
                className={`block w-full outline-2 outline bg-transparent rounded-md py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${
                  errors.confirmPassword ? "outline-red-500" : undefined
                }`}
                {...register("confirmPassword")}
                placeholder="Password"
                style={{ outline: currentColor }}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="text-center mt-10">
              <Spin spinning={loading}>
                <button
                  className={` text-white h-[50px] active:bg-gray-700 text-sm font-bold uppercase px-6 rounded-xl shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full`}
                  type="submit"
                  style={{
                    backgroundColor: currentColor,
                  }}
                >
                  {!loading ? "Бүртгүүлэх" : null}
                </button>
              </Spin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterAdmin;
