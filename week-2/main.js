const courses = [
    {
        img : 'https://global-uploads.webflow.com/6097e0eca1e875de53031ff6/63123666b450d53b3e3545f3_a101%20web-p-500.png',
        title : "A101 Test Otomasyon Practicum",
        startDate : "29/10/2022",
        endDate : "30/10/2022",
        type : "Online",
        location : "Turkey",
    },
    {
        img : 'https://global-uploads.webflow.com/6097e0eca1e875de53031ff6/63123666b450d53b3e3545f3_a101%20web-p-500.png',
        title : "Popupsmart React Practicum",
        startDate : "01/11/2022",
        endDate : "02/11/2022",
        type : "Online",
        location : "Turkey",
    }
]

const renderCourse = function (course) {
    let template = document.getElementById('course__template').innerHTML;
    const keys = Object.keys(course);
    keys.forEach(key => {
        template = template.replace('{{+key+}}', course[key]);
    })
    const elem = document.createElement('div');
    elem.innerHTML = template;
    elem.classList.add('course');
    return elem;
}

const renderPage = function (id) {
    const root = document.getElementById(id);
    courses.forEach(course => {
        const elem = renderCourse(course);
        root.appendChild(elem);
    })
}
renderPage('root');