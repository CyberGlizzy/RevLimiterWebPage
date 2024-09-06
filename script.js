document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const button = document.getElementById('toggle-theme');
button.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        button.textContent = 'Switch to Dark Mode';
    } else {
        button.textContent = 'Switch to Light Mode';
    }
});

function checkAnswers() {
    let result = "";
    const answer1 = document.querySelector('input[name="question1"]:checked').value;

    if (answer1 === "Ground") {
        result += "Correct! Pin 85 connects to Ground.<br>";
    } else {
        result += "Incorrect. Pin 85 connects to Ground.<br>";
    }

    document.getElementById("quiz-result").innerHTML = result;
}

window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

document.getElementById('test-system').addEventListener('click', function() {
    alert('Test System button clicked!');
});
