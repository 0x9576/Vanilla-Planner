import PlannerPage from './PlannerPage.js'
import LoginPage from './LoginPage.js'
import { init } from './router.js'

export default function App({ $target }) {
    //app에서 route 처리를 함.
    this.route = () => {
        let { pathname } = location
        pathname = pathname.replace("/web", "")

        $target.innerHTML = ''

        if (pathname === '/') {
            new PlannerPage({ $target }).render()
        } else if (pathname === '/login/') {
            new LoginPage({
                $target
            }).render()
        }
    }
    init(this.route)
    this.route()

    // 뒤로가기, 앞으로가기 발생 시 popstate 이벤트가 발생합니다.
    // popstate 이벤트는 사용자의 세션 기록 탐색으로 인해 현재 활성화된 기록 항목이 바뀔 때 발생합니다.
    window.addEventListener('popstate', this.route)
}