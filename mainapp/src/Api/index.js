import { BASE_URL } from "../Config";

const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}post/allPost`);
  const data = await response.json();
  console.log(data);
  if (response.status >= 400) {
    throw new Error(data.error);
  }
  return data.post;
};

const fetchProfilePost = async () => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: token
  };
  const response = await fetch(`${BASE_URL}post/personal`, {
    headers: headers
  });
  const data = await response.json();
  console.log(data);
  if (response.status >= 400) {
    throw new Error(data.error);
  }
  return data.post;
};

const dataPosting = async x => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: token
  };
  const response = await fetch(`${BASE_URL}post`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(x)
  });
  const data = await response.json();
  console.log(data);
  if (response.status >= 400) {
    throw new Error(data.error);
  }
  return data.post;
};

const loginCall = async data => {
  const response = await fetch(`${BASE_URL}user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json.token);
  localStorage.setItem("token", json.token);
  localStorage.setItem("phoneNumber", json.user.mobile_no);

  return json;
};

const sigupCall = async data => {
  const response = await fetch(`${BASE_URL}user/signup`, {
    method: "POST",
    headers: {
      "content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(data)
  });
  const json = await response.json();
  return json;
};

export { fetchPosts, loginCall, sigupCall, fetchProfilePost, dataPosting };
