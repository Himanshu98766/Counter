var button = document.getElementById("button");
var current = document.querySelector('.current');
var next = document.querySelector('.next');

var countPrev = 1;
var countNext = 1;

button.addEventListener('click', function () {
    var number = parseInt(document.getElementById("input").value);
    console.log(number);

    var interval = setInterval(function () {
        if(number < 1 || number > 9){
            clearInterval(interval);
            setTimeout(function(){
                alert('Enter valid number')
            },50);
            return;
        } 
        next.classList.add('animate');
        next.innerHTML = countNext;
        if(countNext == number){
            clearInterval(interval);
            setTimeout(function(){
                alert('Counter has stopped')
            },600);
            return;
        }
        
        setTimeout(function () {
            next.classList.remove('animate');
            current.innerHTML = countPrev;
            countPrev++;
        }, 500)
        countNext++;
    }, 1000);

})
