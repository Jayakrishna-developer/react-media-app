
import { commonAPI } from "./commonApi";
import { server_url } from "./server_url";

// upload a video
export const uploadVideoAPI =async(video)=>{
    return await commonAPI("POST", `${server_url}/allVideos`,video);
}

// get all video
export const getAlluploadVideoAPI = async () => {
  return await commonAPI("GET", `${server_url}/allVideos`,"");
};

// get a video

export const getAVideoAPI = async (id) => {
  return await commonAPI("GET", `${server_url}/allVideos/${id}`, "");
};
// delete a video
export const DeleteAVideoAPI = async (id) => {
  return await commonAPI("DELETE", `${server_url}/allVideos/${id}`, {});
};

// add history
export const AddHistoryAPI =async (video)=>{
  return await commonAPI("POST",`${server_url}/history`,video)
}

// get history
export const GetHistoryAPI= async ()=>{
  return await commonAPI("GET",`${server_url}/history/`,"")
}

// delete history

export const DeleteHistoryAPI= async(id)=>{
  return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}

// add Category

export const ADDCategoryAPI=async(category)=>{
  return await commonAPI("POST",`${server_url}/category`,category)
}

// get Category
export const GetCategoryAPI=async()=>{
  return await commonAPI("GET",`${server_url}/category`,"")
}

// delete category

export const DeleteCategoryAPI=async(id)=>{
  return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

// update category
export const UpdateCategoryAPI=async(id,categoryDetails)=>{
  return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}