import { Button, DatePicker, Spin, Upload } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { BsUpload } from "react-icons/bs";
import ImgCrop from "antd-img-crop";
import baseUrl from "../../utils/axios";
import AdminHeading from "../../components/admin/AdminHeading";
import MyInput from "../../components/MyInput";
import { useAdminContext } from "../../contexts/AdminStateContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useMutation, useQueryClient } from "react-query";
import { MyButton } from "../../components/admin";
import { toast } from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import catchResponseErr from "../../utils/catchResponseErr";
import ImageUploader from "../../components/ImageUploader";
import { addProject } from "../../api/projects";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState("");

  const { currentColor, activeMenu } = useAdminContext();
  const { currentUser } = useAuthContext();

  const queryClient = useQueryClient();

  const handleUpload = (info) => {
    Promise.resolve(info).then((res) => {
      return setPhoto(res?.file?.response?.filename);
    });
  };

  const clearState = () => {
    setTitle("");
    setContent("");
    setDate(new Date());
    setPhoto("");
    setTags([]);
  };

  const addProjectMutation = useMutation(addProject, {
    onSuccess: () => {
      setLoading(false);
      queryClient.invalidateQueries("all-projects");
      // clearState();
      toast.success("Амжилттай нэмлээ");
    },
    onError: (err) => {
      setLoading(false);
      toast.error(catchResponseErr(err));
      console.log(err);
    },
  });

  const handleSubmit = () => {
    setLoading(true);
    const body = { content, title, subTitle, date, photo };

    addProjectMutation.mutate({
      body: body,
      token: currentUser.token,
    });
  };
  return (
    <div>
      <Spin spinning={loading}>
        <AdminHeading category="Төсөл" title="Төсөл оруулах" />
        <MyInput
          title={"Гарчиг"}
          color={currentColor}
          onChange={setTitle}
          value={title}
        />
        <MyInput
          title={"Дэд гарчиг"}
          color={currentColor}
          onChange={setSubTitle}
          value={subTitle}
        />
        <p className="text-base my-3 font-medium sm:text-lg text-slate-700 dark:text-light-gray">
          Зураг
        </p>
        <ImageUploader photo={photo} setPhoto={setPhoto} />

        <p className="text-base my-3 font-medium sm:text-lg text-slate-700 dark:text-light-gray">
          Агуулга
        </p>
        <div className={activeMenu ? `md:max-w-[calc(100vw-470px)]` : ""}>
          <ReactQuill
            theme="snow"
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                  { list: "ordered" },
                  { list: "bullet" },
                  { indent: "-1" },
                  { indent: "+1" },
                ],
                ["link", "image"],
                ["clean"],
              ],
            }}
            value={content}
            onChange={setContent}
          />
        </div>
        <p className="text-base my-3 font-medium sm:text-lg text-slate-700 dark:text-light-gray">
          Огноо
        </p>
        <DatePicker
          size="large"
          onChange={(_, dateString) => setDate(dateString)}
          style={{ borderColor: currentColor, marginBottom: 20 }}
        />
        <MyButton
          color="white"
          bgColor={currentColor}
          text="Нийтлэх"
          borderRadius="10px"
          width="full"
          onPress={handleSubmit}
        />
      </Spin>
    </div>
  );
};
export default AddProject;
