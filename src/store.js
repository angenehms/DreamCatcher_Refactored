import { createStore } from "redux";
// 취소선은 리덕스 툴킷 사용권장을 하기 때문에 그어진다고 한다. 동작에는 아무런 지장이 없다고 한다.

function reducer(currentState, action) {
  // reducer 는 스토어 내의 스테이트를 어떻게 바꿀것인가를 결정

  if (currentState === undefined) {
    return {
      // number : 1,
      // 스테이트의 초기값을 설정해준다!
    };
  }

  const newState = { ...currentState }; // 각각의 스테이트의 변화의 불변성 유지, 즉 과거의 스테이트를 복제해둠, 그리고 그 복제본을 수정하는 방식

  if (action.type === "") {
    // newState.number++;
  }

  return newState;
}

export const store = createStore(reducer);
