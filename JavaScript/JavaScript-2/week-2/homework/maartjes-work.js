'use strict';

const monday = [{
        name: 'Write a summary HTML/CSS',
        duration: 180,
    },
    {
        name: 'Some web development',
        duration: 120,
    },
    {
        name: 'Fix homework for class10',
        duration: 20,
    },
    {
        name: 'Talk to a lot of people',
        duration: 200,
    },
];

const tuesday = [{
        name: 'Keep writing summary',
        duration: 240,
    },
    {
        name: 'Some more web development',
        duration: 180,
    },
    {
        name: 'Staring out the window',
        duration: 10,
    },
    {
        name: 'Talk to a lot of people',
        duration: 200,
    },
    {
        name: 'Look at application assignments new students',
        duration: 40,
    },
];

// const maartjesTasks = monday.concat(tuesday);
const maartjesTasks = [...monday, ...tuesday] //spread operation is way better than concat, it's more flexible with the urutan dan bisa tambahin
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
    // Replace this comment and the next line with your code
    const tasksRate = tasks
        .map(time => time.duration / 60) // map durations in hours
        .filter(time => time >= 2) //remove the duration, that is < 2 hours
        .map(time => time * hourlyRate) //multiply each duration per hour (rate =20)
        .reduce((total, value) => total + value) // Total sum all
    return tasksRate;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)
const result = earnings.toFixed(2);

console.log(`Maartje has earned €${result}`);

// Do not change or remove anything below this line
module.exports = {
    maartjesTasks,
    maartjesHourlyRate,
    computeEarnings,
};