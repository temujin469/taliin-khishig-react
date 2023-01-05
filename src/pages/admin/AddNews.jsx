import { Button, DatePicker, Upload } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { BsUpload } from "react-icons/bs";
import ImgCrop from "antd-img-crop";
import baseUrl from "../../utils/axios";
import AdminHeading from "../../components/admin/AdminHeading";
import MyInput from "../../components/MyInput";
import { useAdminContext } from "../../contexts/AdminStateContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { TagsInput } from "react-tag-input-component";
import { useMutation, useQueryClient } from "react-query";
import { MyButton } from "../../components/admin";
import { toast } from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import catchResponseErr from "../../utils/catchResponseErr";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

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

  const addNewsMutation = useMutation(
    async () => {
      const body = { photo, createdAt: date, content, title, tags };
      return await baseUrl.post("/news", body, {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("all-news");
        // clearState();
        toast.success("Амжилттай нийтэллээ");
      },
      onError: (err) => {
        toast.error(catchResponseErr(err));
        console.log(err);
      },
    }
  );

  const handleSubmit = () => {
    addNewsMutation.mutate();
  };

  return (
    <div>
      <AdminHeading category="Мэдээ" title="Мэдээ оруулах" />
      <MyInput
        title={"Гарчиг"}
        color={currentColor}
        onChange={setTitle}
        value={title}
      />
      <p className="text-base my-3 font-medium sm:text-lg text-slate-700 dark:text-light-gray">
        Шошго
      </p>
      <TagsInput
        value={tags}
        onChange={setTags}
        name="Шошго"
        placeHolder="Шошго"
      />
      <p className="text-base my-3 font-medium sm:text-lg text-slate-700 dark:text-light-gray">
        Зураг
      </p>
      <ImgCrop rotate grid aspect={1}>
        <Upload
          name="photo"
          action={`${import.meta.env.VITE_API_URL}/upload`}
          listType="picture"
          // fileList={fileList}
          onChange={handleUpload}
          // onPreview={onPreview}
        >
          <Button size="large" style={{ borderColor: currentColor }}>
            <div
              style={{ color: currentColor }}
              className="flex items-center gap-2"
            >
              <BsUpload />
              Зураг оруулах
            </div>
          </Button>
        </Upload>
      </ImgCrop>
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
    </div>
  );
};
export default AddNews;
