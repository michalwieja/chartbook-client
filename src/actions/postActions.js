import axios from "axios";

export const getPosts = () => async (dispatch) => {
  const posts = await axios.get("/posts");

  dispatch({
    type: "getPosts",
    payload: posts.data,
  });
};

export const createPost = (post) => async (dispatch) => {
  const data = await axios.post("/posts", post);
  dispatch({ type: "createPost", payload: data });
};

export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`/posts/${id}`);
  dispatch({ type: "deletePost", payload: id });
};

export const editPost = (post) => async (dispatch) => {
  const data = await axios.patch(`/posts/${post._id}`, post);

  dispatch({ type: "editPost", payload: data });
};
