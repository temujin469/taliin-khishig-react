import { DatePicker, Spin } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
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
import ImageUploader from "../../components/ImageUploader";
import { addNews } from "../../api/news";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const { currentColor, activeMenu } = useAdminContext();
  const { currentUser } = useAuthContext();

  const queryClient = useQueryClient();

  const clearState = () => {
    setTitle("");
    setContent("");
    setDate(new Date());
    setPhoto("");
    setTags([]);
  };

  const addNewsMutation = useMutation(addNews, {
    onSuccess: () => {
      setLoading(false);
      queryClient.invalidateQueries("all-news");
      // clearState();
      toast.success("Амжилттай нийтэллээ");
    },
    onError: (err) => {
      setLoading(false);
      toast.error(catchResponseErr(err));
      console.log(err);
    },
  });

  const handleSubmit = () => {
    setLoading(true);
    const body = { content, title, date, tags, photo };

    addNewsMutation.mutate({
      body: body,
      token: currentUser.token,
    });
  };

  return (
    <div>
      <Spin spinning={loading}>
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
export default AddNews;
