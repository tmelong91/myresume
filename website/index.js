$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Cloud Engineer',
        'Cloud Architect',
        'DevOps Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'Cloud Engineer',
        'Cloud Architect',
        'DevOps Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        // Fetch the counter data from the Lambda URL
        let response = await fetch("https://4cpo43kbreluxizyjdaskdndv40crqsg.lambda-url.us-east-1.on.aws/");
        
        if (!response.ok) {
            throw new Error('Failed to fetch counter data');
        }

        // Parse the response as text
        let data = await response.text();
        
        // Log the response data
        console.log("Response data:", data);

        // Convert the response data to a number
        let count = parseInt(data);

        if (!isNaN(count)) {
            // Update the counter value on the webpage
            counter.innerHTML = `👀 Views: ${count}`;
        } else {
            console.error('Invalid counter data:', data);
            counter.innerHTML = 'Invalid counter data';
        }
    } catch (error) {
        console.error('Error fetching counter data:', error);
        counter.innerHTML = 'Error fetching counter data';
    }
}

// Call the updateCounter function to fetch and display the initial counter value
updateCounter();

