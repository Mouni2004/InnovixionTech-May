document.addEventListener("DOMContentLoaded", function() {
    let date = document.getElementById("inputElement");
    let BtnEl = document.getElementById("btnEl");
    //let countDownE1 = document.getElementById("countdown");
    let RestbtnEl = document.getElementById("RestbtnEl");

    function countDown() {
        let countDate = date.value;
        const countDownDate = new Date(countDate).getTime();

        const countdownFunction = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Check if the elements exist before setting their innerHTML
            if (document.getElementById("days") && document.getElementById("hours") && document.getElementById("minutes") && document.getElementById("seconds")) {
                document.getElementById("days").innerHTML = days;
                document.getElementById("hours").innerHTML = hours;
                document.getElementById("minutes").innerHTML = minutes;
                document.getElementById("seconds").innerHTML = seconds;
            }

            // If the count down is over, write some text and clear the interval
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.getElementById("days").innerHTML = 0;
                document.getElementById("hours").innerHTML = 0;
                document.getElementById("minutes").innerHTML = 0;
                document.getElementById("seconds").innerHTML = 0;
                document.getElementById("success").innerHTML = "Timeout Reached: Retry Another Session"
                //document.getElementById("countdown").innerHTML = "Time Out";


            }
        }, 1000);
    }

    function reset() {
        let countDate = "";
        document.getElementById("inputElement").value = "";
        const countDownDate = new Date(countDate).getTime();
        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("minutes").innerHTML = "";
        document.getElementById("seconds").innerHTML = "";
        document.getElementById("success").innerHTML = ""
    }
    RestbtnEl.addEventListener("click", reset);

    BtnEl.addEventListener("click", countDown);
});