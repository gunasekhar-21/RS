// function submitFeedback() {
//     const rating = document.getElementById('rating').value;
//     const comment = document.getElementById('comment').value;

//     if (!rating) {
//         alert('Please select a rating');
//         return;
//     }

//     // Send the feedback data to the server using AJAX
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'submit_feedback.php', true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             document.getElementById('message').innerHTML = xhr.responseText;
//             // Optionally, you can reset the form or perform other actions
//         }
//     };
//     xhr.send('rating=' + rating + '&comment=' + comment);
// }


let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;

    // Remove 'active' class from all stars
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('active'));

    // Add 'active' class to selected stars
    for (let i = 0; i < rating; i++) {
        stars[i].classList.add('active');
    }
}

function submitFeedback() {
    if (selectedRating === 0) {
        alert('Please select a rating');
        return;
    }

    const comment = document.getElementById('comment').value;
    
    // Send the feedback data to the server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit_feedback.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('message').innerHTML = xhr.responseText;
            // Optionally, you can reset the form or perform other actions
        }
    };
    xhr.send('rating=' + selectedRating + '&comment=' + comment);
}
