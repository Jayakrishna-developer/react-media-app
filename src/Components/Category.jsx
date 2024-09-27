import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoCard from "../Components/VideoCard"; // Assuming VideoCard is a separate component
import {
  ADDCategoryAPI,
  DeleteCategoryAPI,
  GetCategoryAPI,
  UpdateCategoryAPI,
  getAVideoAPI,
} from "../../service/allAPI";

function Category(dropVideoResponse) {
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryName) {
      const result = await ADDCategoryAPI({ categoryName, allVideos: [] });
      // console.log(result);
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories();
      } else {
        alert(result.message);
      }
    } else {
      alert("Please add a category name");
    }
  };

  const getCategories = async () => {
    const { data } = await GetCategoryAPI();
    setAllCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, [dropVideoResponse]);

  const removeCategory = async (id) => {
    await DeleteCategoryAPI(id);
    getCategories();
  };

  const dragOver = (e) => {
    // console.log("Video card dragging over the category");
    e.preventDefault();
  };

  const videoDropped = async (e, categoryId) => {
    const VideoId = e.dataTransfer.getData("VideoId");
    // console.log(
      // "VideoID: " + VideoId + ", video dropped in categoryId: " + categoryId
    // );
    const { data } = await getAVideoAPI(VideoId);

    const selectedCategory = allCategories.find(
      (item) => item.id === categoryId
    );
    selectedCategory.allVideos.push(data);

    await UpdateCategoryAPI(categoryId, selectedCategory);
    getCategories(); // Refresh categories after updating
  };


const videoDragStarted=(e,VideoId,categoryId)=>{
  let datashare={VideoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(datashare))
}
  
  return (
    <div>
      <div className="d-grid">
        <div className="btn btn-info" onClick={handleShow}>
          Add Category
        </div>
      </div>

      {allCategories?.length > 0 ? (
        allCategories.map((category) => (
          <div
            key={category.id}
            className="border rounded mt-3"
            droppable="true"
            onDragOver={dragOver}
            onDrop={(e) => videoDropped(e, category.id)}
            style={{
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
              border: "2px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ padding: "10px 0" }}
            >
              <h5
                style={{
                  margin: 0,
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {category.categoryName}
              </h5>
              <button
                onClick={() => removeCategory(category.id)}
                className="btn"
                style={{
                  border: "2px solid #ff6b6b",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  padding: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#ff6b6b";
                  e.target.querySelector("i").style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#fff";
                  e.target.querySelector("i").style.color = "#ff6b6b";
                }}
              >
                <i
                  className="fa-solid fa-trash"
                  style={{
                    color: "#ff6b6b",
                    fontSize: "18px",
                  }}
                ></i>
              </button>
            </div>

            {/* Display video cards under each category */}
            <Row>
              {category?.allVideos?.length > 0 ? (
                category.allVideos.map((card) => (
                  <Col sm={12} md={6} lg={12}  draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}  className="mb-3">
                    <VideoCard video={card} insideCategory={true} />
                  </Col>
                ))
              ) : (
                <p>No videos in this category</p>
              )}
            </Row>
          </div>
        ))
      ) : (
        <p>Nothing to display</p>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Category"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Category;
