// router.js
const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE'

// 커스텀 이벤트를 통해 ROUTE_CHANGE 이벤트 발생 시 onRouteChange 콜백 함수를 호출하도록 이벤트를 바인딩.
export const init = (onRouteChange) => {
    window.addEventListener(ROUTE_CHANGE_EVENT, () => {
        onRouteChange()
    })
}

// URL을 업데이트하고 커스텀 이벤트를 발생시키는 함수
export const routeChange = (url, params) => {
    history.pushState(null, null, url)
    //history는 세션기록을 의미함.
    //pushState는 세션에 history를 넣는 메소드로서, state, title, url로 구성되어있음.
    //state는 같이 들어가는 상태, title은 제목(잘 안씀), url은 history의 url이 된다.

    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params))
    //window에 event객체를 보내고, 동기적으로 이벤트와 관련된 리스너들을 호출함
}