import React from "react";
import { Modal, Button,Form,FloatingLabel} from "react-bootstrap";
import { useState } from "react";
import "./Add.css";
import { uploadVideoAPI } from "../../service/allAPI";

function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })

  const getYoutubeLink=(e)=>{
    const{value}=e.target
    if(value.includes("v=")){
      let vId=value.split("v=")[1].slice(0,11)

      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vId}`})
    }
    else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }




  
const handleAdd = async () => {
  const { id, caption, url, link } = uploadVideo;

  if (!id || !caption || !url || !link) {
    alert("Please fill all the fields");
  } else {
    try {
      const result = await uploadVideoAPI(uploadVideo);
      console.log(result);

      if (result.status >= 200 && result.status <= 300) {
        // Success
        handleClose();
        alert("Uploaded successfully");

        // After getting success response, reset the form fields
        setUploadVideo({
          id: "",
          caption: "",
          url: "",
          link: "",
        });
        setUploadVideoResponse(result.data);
      } else if (result.status === 500) {
        // Handle specific error case: status code 500 (e.g., duplicate entry)
        alert("Error: Video with the same ID or link already added.");
      } else {
        console.log(result.message);
      }
    } catch (error) {
      // Handle any other errors (e.g., network issues)
      console.error("An error occurred while uploading the video:", error);
      alert("An error occurred. Please try again.");
    }
  }
};





  console.log(uploadVideo);
  return (
    <div>
      <div className="d-flex align-items-center">
        <h5>Upload Videos</h5>
        <button
          className="btn"
          style={{
            backgroundColor: "#4d96b6",
            color: "white",
            marginLeft: "10px",
            borderRadius: "50%",
            border: "none",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            transition: "all 0.3s ease",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            cursor: "pointer", // Makes the cursor a pointer when hovering
            outline: "none", // Removes default button outline
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#3498db"; // Hover effect: changes background color on hover
            e.target.style.transform = "scale(1.1)"; // Slightly enlarges button on hover
            e.target.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)"; // Darker shadow on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#4d96b6"; // Reverts background color when mouse leaves
            e.target.style.transform = "scale(1)"; // Resets the scale
            e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)"; // Resets shadow
          }}
          onClick={handleShow}
        >
          <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId="floatingInput"
              label="Video-Id"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Video-Id"
                onChange={(e) =>
                  setUploadVideo({ ...uploadVideo, id: e.target.value })
                }
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Video-Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Video-Title"
                onChange={(e) =>
                  setUploadVideo({ ...uploadVideo, caption: e.target.value })
                }
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Image-Url"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Image-Url"
                onChange={(e) =>
                  setUploadVideo({ ...uploadVideo, url: e.target.value })
                }
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Video-Url"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Video-Url"
                onChange={getYoutubeLink}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Add;
