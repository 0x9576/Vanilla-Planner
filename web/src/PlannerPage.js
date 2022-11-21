
export default function PlannerPage({ $target, initialState }) {
    this.state = initialState

    const $page = document.createElement('div')
    $page.className = 'PlannerPage'

    $page.innerHTML = `
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

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        var arr = '';
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
            $page.innerHTML += `<div class='date not'>${i}</div>`
        }

        // 현재 달
        for (let i = 1; i <= lastDate; i++) {
            if ((firstDay + i) % 7 === 0) {
                $page.innerHTML += `<div class='date sat'>${i}</div>`
            }
            else if ((firstDay + i) % 7 === 1) {
                $page.innerHTML += `<div class='date sun'>${i}</div>`
            }
            else {
                $page.innerHTML += `<div class='date'>${i}</div>`
            }
        }

        // 다음 달
        for (let i = 1; i <= 6 - lastDay; i++) {
            console.log(lastDay);
            $page.innerHTML += `<div class='date not'>${i}</div>`
        }

        $target.innerHTML = `<h1>${month}</h1>`
        $target.appendChild($page)
    }
}