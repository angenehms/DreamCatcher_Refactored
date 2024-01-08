import { axiosAPI, axiosAuthAPI } from "./Client";

export const sendForSignupFunction = async (body) => {
  try {
    const res = await axiosAPI.post("/auth/signup", body);
    return res;
  } catch (error) {
    console.log(error);
    alert("sendForSignupFunction Error : 콘솔창을 확인해주세요!");
  }
};

export const sendForSigninFunction = async (body) => {
  try {
    const res = await axiosAuthAPI.post("/auth/signin", body);
    return res;
  } catch (error) {
    console.log(error);
    alert("sendForSigninFunction Error : 콘솔창을 확인해주세요!");
  }
};

export const sendForAddTodoFunction = async (body) => {
  try {
    const res = await axiosAuthAPI.post("/todos", body);
    return res;
  } catch (error) {
    console.log(error);
    alert("sendForAddTodoFunction Error : 콘솔창을 확인해주세요!");
  }
};

export const sendForReadTodoFunction = async () => {
  try {
    const res = await axiosAuthAPI.get("/todos");
    return res;
  } catch (error) {
    console.log(error);
    alert("sendForReadTodoFunction Error : 콘솔창을 확인해주세요!");
  }
}; // page/Todo/Todo.jsx 에 위치

export const sendForDeleteTodoFunction = async (id) => {
  try {
    const res = await axiosAuthAPI.delete(`/todos/${id}`);
    return res;
  } catch (error) {
    console.log(error);
    alert("sendForDeleteTodoFunction Error : 콘솔창을 확인해주세요!");
  }
}; // component/TodoEditDeleteFormTag/TodoEditDeleteFormTag.jsx 에 위치

export const sendForEditTodoFunction = async (id, body) => {
  try {
    const res = await axiosAuthAPI.put(`/todos/${id}`, body);
    return res;
  } catch (error) {
    console.log(error);
    alert("sendForEditTodoFunction Error : 콘솔창을 확인해주세요!");
  } // 수정 내용을 공백으로 보낸 제출한 뒤(Error 메세지 출력 후) 다시 수정 버튼을 누르면 기존 인풋값이 렌더링 되지 않고 공백으로 뜬다. (수정완료 : TodoUpdateDeleteFormDetails 에서 editTodoFunction 함수 if 문)
}; // component/TodoEditDeleteFormTag/TodoEditDeleteFormTag.jsx 에 위치
