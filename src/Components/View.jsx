import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Row, Col } from "react-bootstrap";
import { GetCategoryAPI, UpdateCategoryAPI, getAlluploadVideoAPI } from "../../service/allAPI";

function View({ uploadVideoResponse,setDropVideoResponse }) {
  const [allVideos, setAllVideos] = useState([]);

const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)



  useEffect(() => {
    getAllUploadedVideos();
    setDeleteVideoResponse(false)
  }, [uploadVideoResponse,deleteVideoResponse]);

  const getAllUploadedVideos = async () => {
    const result = await getAlluploadVideoAPI();
    console.log(result);
    if (result.status == 200) {
      setAllVideos(result.data);
    } else {
      setAllVideos([]);
      console.log("API Failed");
    }
  };


const VideodragOver=(e)=>{
  e.preventDefault()
}

const videoDrop= async(e)=>{
  const {VideoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  console.log(VideoId,categoryId);
  const {data}=await GetCategoryAPI()
  console.log(data);
  const selectedCategory=data.find(item=>item.id==categoryId)
  let result=selectedCategory.allVideos.filter(video=>video.id!==VideoId)
  console.log(result);

  let {id,categoryName}=selectedCategory
  let newCategory = { id, categoryName,allVideos: result };
  console.log(newCategory);
  const res=await UpdateCategoryAPI(categoryId,newCategory)
  setDropVideoResponse(res)
}

  return (
    <div>
      <Row droppable="true" onDragOver={(e)=>VideodragOver(e)} onDrop={e=>videoDrop(e)}>
        {allVideos?.length > 0 ? (
          allVideos.map((video) => (
            <Col className="me-5" sm={12} md={4} lg={4} xl={3} key={video.id}>
              <VideoCard video={video}  setDeleteVideoResponse={setDeleteVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
            </Col>
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </Row>
    </div>
  );
}

export default View;
