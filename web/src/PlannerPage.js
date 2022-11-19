
export default function PlannerPage({ $target }) {
    this.state = {
    }

    const $page = document.createElement('div')
    $page.className = 'PlannerPage'

    $page.innerHTML = '<h1>Main Page</h1>'

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $target.innerHTML = ''
        $target.appendChild($page)
    }
}