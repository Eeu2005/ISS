var icontwitter = document.getElementById('twitter');

icontwitter.addEventListener('mouseover', ()=> {
    icontwitter.classList.remove("fa-twitter")
    icontwitter.classList.add("fa-x-twitter")

})

icontwitter.addEventListener('mouseout', () => {
    icontwitter.classList.add("fa-twitter")
    icontwitter.classList.remove("fa-x-twitter")

})