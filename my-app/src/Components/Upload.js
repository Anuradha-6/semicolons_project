import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaCloudUploadAlt } from "react-icons/fa";

export const Upload = () => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };
  console.log(file);
  return (
    <>
      <h3 className="font-bold text-xl m-5">Upload</h3>
      <Card className="w-full m-auto max-w-[48rem] ">
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4">
            Upload CSV file here
          </Typography>
          {/* <Typography variant="h4" color="blue-gray" className="mb-2">
            Lyft launching cross-platform service this week
          </Typography> */}
          <Typography color="gray" className="mb-8 font-normal">
            <div className="text-center border-2 border-[#707070] border-dotted  mt-5 rounded w-[70%] mx-auto pb-7">
              <div
                className="m-auto max-w-[100%]"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <FaCloudUploadAlt
                  size={40}
                  style={{
                    color: "gray",
                    margin: "auto",
                    marginTop: "25px",
                    marginBottom: "15px",
                  }}
                ></FaCloudUploadAlt>
                <p className="font-semi-bold">Drag and drop files here</p>
                <div className="flex items-center mt-5">
                  <hr className="flex-grow border-t border-black ml-7" />
                  <span className="px-3">or</span>
                  <hr className="flex-grow border-t border-black mr-7" />
                </div>
                <input
                  type="file"
                  hidden
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                  accept=".csv"
                  ref={inputRef}
                ></input>
                <button
                  className="border-orange-500 border-2 hover:bg-orange-700 hover:text-white text-orange-500 bg-white  px-2 h-8 rounded m-[10px]"
                  onClick={() => {
                    inputRef.current.click();
                  }}
                >
                  Browse Files
                </button>
                {file != null && <div className="mb-3">{file.name}</div>}
              </div>
            </div>
          </Typography>
          <a href="#" className="inline-block">
            <button
              variant="text"
              className="bg-orange-700 text-white hover:bg-orange-500  px-2 h-8 rounded m-[10px]"
            >
              Submit
            </button>
          </a>
        </CardBody>
      </Card>
    </>
  );
};
