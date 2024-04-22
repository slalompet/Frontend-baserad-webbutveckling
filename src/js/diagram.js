
const barCtx = document.getElementById('bar-chart');
const pieCtx = document.getElementById('pie-chart');

function charts(data){

    const courses = data.filter( index => index.type === 'Kurs');
    const programs = data.filter( index => index.type === 'Program');

    courses.sort((a, b) => parseInt(b.applicantsTotal) - parseInt(a.applicantsTotal));
    const topSix = courses.slice(0, 6);
    const totalAppCour = topSix.map(course => parseInt(course.applicantsTotal));

    programs.sort((a, b) => parseInt(b.applicantsTotal) - parseInt(a.applicantsTotal));
    const topFive = programs.slice(0, 5);
    const totalAppPro = topFive.map(program => parseInt(program.applicantsTotal));

    createBarChart(topSix, totalAppCour, 'bar');
    createPieChart(topFive, totalAppPro, 'pie');
}

fetch('https://studenter.miun.se/~mallar/dt211g/')
.then(function(response){
    if(response.ok == true){
        return response.json();
    }
})
.then(function(data){
    charts(data);
});

function createBarChart(data, totalAppCour, type) {

    new Chart(barCtx, {
        type: type,
        data: {
        labels: data.map(row => row.name),
        datasets: [{
            label: 'Total applications',
            data: totalAppCour,
            backgroundColor: [
                '#d6f6dd',
                '#dac4f7',
                '#f4989c',
                '#ebd2b4',
                '#acecf7',
                '#CB979C'],
            borderWidth: 1
        }]
        },
        options: {
        indexAxis: 'y',
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Total Applications',
                    color: 'white'
                },
                ticks: {
                    color: 'white'
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Courses',
                    color: 'white'
                },
                ticks: {
                    color: 'white'
                },
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white', 
                    align: 'start' 
                }
            }
        }
    }
});
}

function createPieChart(data, totalAppPro, type) {

    new Chart(pieCtx, {
        type: type,
        data: {
        labels: data.map(row => row.name),
        datasets: [{
            label: 'Total applications',
            data: totalAppPro,
            backgroundColor: [
                '#d6f6dd',
                '#dac4f7',
                '#f4989c',
                '#ebd2b4',
                '#acecf7',
                '#CB979C'],
            borderWidth: 1
        }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'white', 
                        align: 'start' 
                    }
                }
        }
        }
    });
}

