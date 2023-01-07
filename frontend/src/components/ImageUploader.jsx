import { Image } from "antd";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { useAdminContext } from "../contexts/AdminStateContext";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiImage } from "react-icons/fi";

function ImageUploader({ photo, setPhoto }) {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const { currentColor } = useAdminContext();

  const onChange = async (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList[0]);
    setImages(imageList);
    setPhoto(imageList[0]?.data_url);
  };
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        // onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <button
            className="rounded-md cursor-pointer border-dotted border-2 w-[200px] h-[200px] flex justify-center items-center"
            style={{
              borderColor: isDragging ? "red" : currentColor,
            }}
            onClick={!imageList.length && onImageUpload}
            {...dragProps}
          >
            {imageList.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  width={180}
                  height={180}
                  className="object-cover"
                  src={image["data_url"]}
                />

                <div className="absolute top-1 right-1 flex items-center gap-1">
                  <button onClick={() => onImageUpdate(index)}>
                    {<HiOutlineRefresh color={currentColor} size={20} />}
                  </button>
                  <button onClick={() => onImageRemove(index)}>
                    {<MdOutlineCancel color={currentColor} size={20} />}
                  </button>
                </div>
              </div>
            ))}
            {!imageList.length && <FiImage color={currentColor} size={40} />}
          </button>
        </div>
      )}
    </ImageUploading>
  );
}

export default ImageUploader;
