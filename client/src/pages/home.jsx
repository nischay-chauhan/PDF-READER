import { useState } from "react";
import { uploadFile } from "../utils/api";
import DataPage from "./data";
const HomePage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setLoading(true);

    try {
      const response = await uploadFile(file);
      console.log(response);
      if(response.success) {
        setResponse(response);
        setShowModal(true); 
        console.log(response);
      }else{
        alert(response.message)
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className={`flex-1 overflow-y-auto p-4 ${showModal ? "hidden" : ""}`}>
        <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisi
          sit amet eros dignissim gravida. Cras auctor velit sed felis pharetra,
          id tincidunt nisi consectetur. Sed vel ultrices purus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Maecenas vestibulum, felis at cursus tristique, ante
          lorem ultricies urna, at dignissim justo quam ac mauris. Nam posuere,
          magna sit amet ullamcorper suscipit, massa lorem convallis nunc, non
          mattis libero ante nec purus. Integer bibendum aliquam elit, id
          finibus libero eleifend ut. Vestibulum ut faucibus quam, in fringilla
          lorem. Integer quis orci non purus auctor lobortis eget eu nulla. Sed
          eget dapibus lorem, vitae convallis ipsum. Donec fermentum eros non
          felis tristique, nec dignissim est sollicitudin. Praesent vel elit eu
          elit tempor pretium eget eget ante. Sed malesuada mi eu magna
          sollicitudin, quis iaculis risus venenatis. Aliquam tempus, magna vel
          tempus ultricies, urna elit consequat ex, at vestibulum elit mi eget
          lectus. Phasellus volutpat sapien id mi accumsan consectetur. Mauris
          dictum convallis arcu, at fermentum nulla consectetur nec. Cras
          lacinia auctor orci nec luctus. Nullam vel dapibus elit. Sed ultricies
          urna et purus posuere, at dapibus ligula pretium. Ut congue, magna id
          lacinia laoreet, lacus turpis venenatis odio, et molestie ipsum quam
          vel est. Ut malesuada felis a velit rutrum, sed mattis libero maximus.
          Vivamus quis leo quis ipsum dictum ultricies. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Proin consequat sapien sed elit pulvinar, eu tincidunt sem
          varius. Integer id metus justo. Morbi eget aliquet lorem. Aenean
          tempor, lacus ac mattis sollicitudin, metus sem sollicitudin. Nam
          euismod mauris nec fringilla tincidunt. Fusce eget sapien a lectus
          varius suscipit in ut ex. Nullam id mol
        </p>
      </div>
      <div className="bg-white fixed bottom-0 left-0 right-0 mx-auto mb-12 w-3/4 p-4 flex justify-between items-center shadow-md">
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png"
          className="flex-1 mr-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleFileChange}
        />
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${
            loading ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
          {response && response.success && (
              <div className="mb-24 p-4 shadow-lg">
                <DataPage data={response}  onClose={handleCloseModal} />
              </div>
          )}
    </div>
  );
};

export default HomePage;
