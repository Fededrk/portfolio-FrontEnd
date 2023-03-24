// const draw = (innerId, OuterId, progressEndValue) =>{

//     const endProgress = progressEndValue ? progressEndValue : 100;

// let circularProgress = document.querySelector(innerId),
// progressValue = document.querySelector(OuterId);

// const progressStartValue = 0,
// speed = 30;

// const progress = setInterval(() => {
// progressStartValue++;

// progressValue.textContent = `${progressStartValue}%`
// circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

// if(progressStartValue == endProgress){
//     clearInterval(progress);
// }    
// }, speed);
// }
// draw("#circle1","#skill1", 80);
// draw("#circle2","#skill2", 90);
// draw("#circle3","#skill3", 70);
// draw("#circle4","#skill4", 60);