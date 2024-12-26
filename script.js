function check() {
    let monthMap = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    let bDM = document.getElementById('bMonths').value
    let bMonths = monthMap[bDM]
    let bDays = parseInt(document.getElementById('bDays').value)
    let bYears = parseInt(document.getElementById('bYears').value)

    let months = document.getElementById('months').value
    let Months = monthMap[months]
    let Days = parseInt(document.getElementById('days').value)
    let Years = parseInt(document.getElementById('years').value)

    const Dob = new Date(bYears, bMonths, bDays)
    const tody = new Date(Years, Months, Days)

    let diff = Math.floor(tody.getTime() - Dob.getTime())
    let sec = Math.floor(diff / 1000)
    let min = Math.floor(diff / (1000 * 60))
    let hour = Math.floor(diff / (1000 * 60 * 60))
    let day = Math.floor(diff / (1000 * 60 * 60 * 24))
    let month = Math.floor(day / 30.44)
    let year = Math.floor(day / 365)



    let outputElement = document.getElementById("output");
    outputElement.style.display = "block";
    outputElement.innerHTML =`
        <h3>Your Time Stats:</h3>
        <p>Milliseconds since your birth: ${diff} ms</p>
        <p>Seconds since your birth: ${sec} sec</p>
        <p>Minutes since your birth: ${min} min</p>
        <p>Hours since your birth: ${hour} hr</p>
        <p>Days since your birth: ${day} days</p>
        <p>Approximate months since your birth: ${month} months</p>
        <p>Approximate years since your birth: ${year} years</p>
    `;
}
