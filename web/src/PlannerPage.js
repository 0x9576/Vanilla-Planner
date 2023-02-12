
export default function PlannerPage({ $target, initialState }) {
    this.state = initialState

    const $page = document.createElement('div')
    const $todo = document.createElement('div')
    const $calendar = document.createElement('div')

    $calendar.className = 'Calendar'
    $page.className = 'PlannerPage'
    $todo.className = 'Todo'
    $todo.id = 'Todo'
    $todo.innerHTML = 'todo'

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {

        $calendar.innerHTML = `
        <div class='day_box'>
            <div class='day sun'>SUN</div>
            <div class='day'>MON</div>
            <div class='day'>TUE</div>
            <div class='day'>WED</div>
            <div class='day'>THU</div>
            <div class='day'>FRI</div>
            <div class='day sat'>SAT</div>
        </div>
        `

        const date = this.state.date
        const toYear = date.getFullYear();
        const toMonth = date.getMonth();

        const firstDay = new Date(toYear, toMonth, 1).getDay();
        const lastDate = new Date(toYear, toMonth + 1, 0).getDate();
        const lastDay = new Date(toYear, toMonth, lastDate).getDay();

        const startDay = new Date(toYear, toMonth, 0);
        const prevDate = startDay.getDate();
        const prevDay = startDay.getDay();

        //해당 월
        const month = toYear + "-" + (toMonth + 1);

        // 지난달
        for (let i = prevDate - prevDay; i <= prevDate; i++) {
            $calendar.innerHTML += `<div class='date not'>${i}</div>`
        }

        // 현재 달
        for (let i = 1; i <= lastDate; i++) {
            if ((firstDay + i) % 7 === 0) {
                $calendar.innerHTML += `<div class='date sat'>${i}</div>`
            }
            else if ((firstDay + i) % 7 === 1) {
                $calendar.innerHTML += `<div class='date sun'>${i}</div>`
            }
            else {
                $calendar.innerHTML += `<div class='date'>${i}</div>`
            }
        }

        // 다음 달
        for (let i = 1; i <= 6 - lastDay; i++) {
            $calendar.innerHTML += `<div class='date not'>${i}</div>`
        }
        $page.appendChild($calendar)
        $page.appendChild($todo)

        $target.innerHTML = `
        <div class = 'PlannerHeader'>
        <div id = 'prev'><</div>
        <h1>${month}</h1>
        <div id = 'next'>></div>
        </div>
        `
        $target.appendChild($page)
    }

    this.render()

    document.getElementById('next').addEventListener('click', (e) => {
        console.log("qqq");
        const date = this.state.date
        const toYear = date.getFullYear();
        const toMonth = date.getMonth();
        this.setState(new Date(toYear, toMonth + 1, 1))
    })

    document.getElementById('prev').addEventListener('click', (e) => {
        const date = this.state.date
        console.log(date);
        const toYear = date.getFullYear();
        const toMonth = date.getMonth();
        this.setState(new Date(toYear, toMonth - 1, 1))
    })
}