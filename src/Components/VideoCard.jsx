import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { AddHistoryAPI, DeleteAVideoAPI } from "../../service/allAPI";

function VideoCard({ video, setDeleteVideoResponse, insideCategory }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    const { caption, link } = video;

    let today = new Date();
    let timestamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);

    let videoHistory = { caption, link, timestamp };

    await AddHistoryAPI(videoHistory);
  };

  const deleteVideo = async (id) => {
    await DeleteAVideoAPI(id);
    setDeleteVideoResponse(true);
  };

  const dragstarted = (e, id) => {
    console.log("Drag Started...VideoId:" + id);
    e.dataTransfer.setData("VideoId", id);
  };
  return (
    <div>
      <Card
        draggable
        onDragStart={(e) => dragstarted(e, video?.id)}
        style={{
          width: "15rem",
          marginBottom: "20px",
          boxShadow: "0 0 5px black",
        }}
      >
        <Card.Img variant="top" src={video.url} onClick={handleShow} />
        <Card.Body style={{ backgroundColor: "#f9f9f9", padding: "15px" }}>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h5 style={{ fontWeight: "bold", color: "#333" }}>
              {video.caption}
            </h5>{insideCategory?null:
            <button
              onClick={() => deleteVideo(video.id)}
              className="bg-light fs-5 ms-2"
              style={{
                border: "2px solid #ff6b6b",
                borderRadius: "50%",
                padding: "5px",
                color: "#ff6b6b",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>}
          </Card.Title>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${video.link}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoCard;
