
export default function LoginPage({ $target }) {
    this.state = {
    }

    const $page = document.createElement('div')
    $page.className = 'LoginPage'

    $page.innerHTML = '<h1>Login Page</h1>'

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $target.innerHTML = ''
        $target.appendChild($page)
    }
}