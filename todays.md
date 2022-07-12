7/11
로그인 화면 디자인 및 제작
Email 로그인, 회원가입 구현
(auth가 initializeApp 하기 전에 선언되어서 firebase에서 뿌렸음)

7/12
회원가입 페이지 따로 만들어서 구현
Email 회원가입은 구현 완료.
Email 로그인 에러 (Ref로 바꿔서 해결)
Ref는 DOM에만 쓰는 줄 알았는데 알고 보니 공식문서에도 

useRef() Hook은 DOM ref만을 위한 것이 아닙니다. 본질적으로 useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다. 만약 <div ref={myRef} />를 사용하여 React로 ref 객체를 전달한다면, React는 모드가 변경될 때마다 변경된 DOM 노드에 그것의 .current 프로퍼티를 설정할 것입니다. useRef는 내용이 변경될 때 그것을 알려주지는 않는다는 것을 유념하세요. .current 프로퍼티를 변형하는 것이 리렌더링을 발생시키지는 않습니다.

이렇게 나와있었다 useRef 짱