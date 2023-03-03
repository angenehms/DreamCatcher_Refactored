import { axiosAPI, axiosAuthAPI } from "./Client";

export const sendForSignupFunction = async (body) => {
    try {
        const res = await axiosAPI.post("/auth/signup", body);
        return res;
    }

    catch (error) {
        console.log(error);
        alert("콘솔창을 확인해주세요!");
    }
}

export const sendForSigninFunction = async (body) => {
    try {
        const res = await axiosAuthAPI.post("/auth/signin", body);
        return res;
    }

    catch (error) {
        console.log(error);
        alert("콘솔창을 확인해주세요!");
    }
}

export const sendForAddTodoFunction = async (body) => {
    try {
        const res = await axiosAuthAPI.post("/todos", body);
        return res;
    }

    catch (error) {
        console.log(error);
        alert("콘솔창을 확인해주세요!");
    }
}

export const sendForReadTodoFunction = async () => {
    try {
        const res = await axiosAuthAPI.get("/todos");
        return res;
    }

    catch (error) {
        console.log(error);
        alert("콘솔창을 확인해주세요!");
    }
} // page/Todo/Todo.jsx 에 위치

export const sendForDeleteTodoFunction = async (id) => {
    try {
        const res = await axiosAuthAPI.delete(`/todos/${id}`);
        return res;
    }

    catch (error) {
        console.log(error);
        alert("콘솔창을 확인해주세요!");
    }
} // component/TodoEditDeleteForm/TodoEditDeleteForm.jsx 에 위치