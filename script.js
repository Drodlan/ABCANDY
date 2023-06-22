var slidePosition = 0;
var slidePosition2 = 1;

var imgArr = ["images/car1.jpg", "images/car2.jpg", "images/car3.jpg", "images/car4.jpg"];
var subjectArr = ["Design & Creative", "MAaketing", "Development", "Tools"];
var dateArr = ["10 June 2023", "25 June 1998", "16 June 2012", "9 June 2010"];
var infoArr = ["<h1>A. Lorem ipsum dolor sit amet consectetur</h1>", "<h1>B. Lorem ipsum dolor sit amet consectetur</h1>", "<h1>C. Lorem ipsum dolor sit amet consectetur</h1>", "<h1>D. Lorem ipsum dolor sit amet consectetur</h1>"];
var messageInfoArr = ["<h4>A. Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam consectetur elementum aenean fringilla amet blandit duis. Neque habitant odio donec adipiscing etiam lobortis volutpatest...</h4>",
  "<h4>B. Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam consectetur elementum aenean fringilla amet blandit duis. Neque habitant odio donec adipiscing etiam lobortis volutpatest...</h4>",
  "<h4>C. Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam consectetur elementum aenean fringilla amet blandit duis. Neque habitant odio donec adipiscing etiam lobortis volutpatest...</h4>",
  "<h4>D. Lorem ipsum dolor sit amet consectetur. Egestas aliquet quam consectetur elementum aenean fringilla amet blandit duis. Neque habitant odio donec adipiscing etiam lobortis volutpatest...</h4>",
];
var readArr = ["A,B,C,D"];
var carImg = document.getElementById("carImg");
var prevCarImg = document.getElementById("prevCarImg");
var nextCarImg = document.getElementById("nextCarImg");
var imageContainer = document.getElementsByClassName("image-containe");

SlideShow(slidePosition);
SlideShow2(slidePosition2);
// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function plusSlides2(n) {
  SlideShow2(slidePosition2 += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {

  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");


  if (n > 3) { slidePosition = 0; n = 0 };
  if (n < 0) { slidePosition = 3; n = 3 };
  var prev = n - 1;
  if (prev < 0) { prev = 3 };
  var next = n + 1;
  if (next > 3) { next = 0 };

  carImg.src = imgArr[n];
  prevCarImg.src = imgArr[prev];
  nextCarImg.src = imgArr[next];

  document.getElementById("subject").innerHTML = subjectArr[n];
  document.getElementById("date").innerHTML = dateArr[n];
  document.getElementById("Info").innerHTML = infoArr[n];
  document.getElementById("MessageInfo").innerHTML = messageInfoArr[n];
  document.getElementById("read").href = readArr[n];

  // console.log('prev', prev);
  // console.log('n', n);
  // console.log('next', next);

  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  circles[n].className += " enable";
}

//  images controls
function currentSlide2(n) {
  SlideShow2(slidePosition2 = n);
}

// tramsitions & animations (needs work)

// function animationleft(n) {
//   // content.innerHTML = htmlcontent1;
//   if (n > 3) { slidePosition = 0; n = 0 };
//   if (n < 0) { slidePosition = 3; n = 3 };
//   var prev = n - 1;
//   if (prev < 0) { prev = 3 };
//   var next = n + 1;
//   if (next > 3) { next = 0 };

//   imageContainer.classList.add("animateleft");
//   prevCarImg[prev].classList.add("animateleft");
//   nextCarImg[next].classList.add("animateleft");

//   setTimeout(function () {
//     imageContainer.classList.remove("animateleft");
//     prevCarImg[prev].classList.remove("animateleft");
//     nextCarImg[next].classList.remove("animateleft");
//   }, 500); // 500 is the same time as the CSS animation
// }

// function animationright(n) {
//   // content.innerHTML = htmlcontent2;
//   if (n > 3) { slidePosition = 0; n = 0 };
//   if (n < 0) { slidePosition = 3; n = 3 };
//   var prev = n - 1;
//   if (prev < 0) { prev = 3 };
//   var next = n + 1;
//   if (next > 3) { next = 0 };

//   carImg[n].classList.add("animateright");
//   prevCarImg[prev].classList.add("animateright");
//   nextCarImg[next].classList.add("animateright");

//   setTimeout(function () {
//     carImg[n].classList.remove("animateleft");
//     prevCarImg[prev].classList.remove("animateleft");
//     nextCarImg[next].classList.remove("animateleft");
//   }, 500); // 500 is the same time as the CSS animation
// }

// //animate on backclick
// var animatebackbtn = document.getElementById("Back");
// animatebackbtn.addEventListener("click", animationright(slidePosition2 -= 1));

// //animate on forwardclick
// var animateforwardbtn = document.getElementById("forward");
// animateforwardbtn.addEventListener("click", animationleft(slidePosition2 += 1));


function SlideShow2(n) {
  var threeimgArr = ["images/threeimage1.jpg", "images/threeimage2.jpg", "images/threeimage3.jpg"];
  var i;
  var circles2 = document.getElementsByClassName("dots2");
  var threeImg = document.getElementById("threeImg");

  if (n > 2) { slidePosition2 = 0; n = 0 };
  if (n < 0) { slidePosition2 = 2; n = 2 };

  threeImg.src = threeimgArr[n];


  //(needswork)

  // for (i = 0; i < circles2.length; i++) {
  //     circles2[i].className = circles2[i].className.replace("enable2", "");
  // }
  // circles2[slidePosition2].className += "enable2";
  // console.log('n2', i);
}

//vidstuff

// Get the modal element
var modal = document.getElementById("videoModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");
var btn2 = document.getElementById("openModalBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closevid")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Open the modal when the button is clicked
btn.addEventListener("click", openModal);
btn2.addEventListener("click", openModal);

// Close the modal when the close button is clicked
span.addEventListener("click", closeModal);

// Close the modal when the user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});

//formstuff

// Get the form popup element
var formPopup = document.getElementById("formPopup");

// Get the button that opens the form popup
var openFormBtn = document.getElementById("openFormBtn");
var openFormBtn2 = document.getElementById("openFormBtn2");
var openFormBtn3 = document.getElementById("openFormBtn3");

// Get the close button for the form popup
var closeFormBtn = document.getElementById("closeFormBtn");

// Function to open the form popup
function openFormPopup() {
  formPopup.style.display = "block";
}

// Function to close the form popup
function closeFormPopup() {
  formPopup.style.display = "none";
}

// Open the form popup when the button is clicked
openFormBtn.addEventListener("click", openFormPopup);
openFormBtn2.addEventListener("click", openFormPopup);
openFormBtn3.addEventListener("click", openFormPopup);

// Close the form popup when the close button is clicked
closeFormBtn.addEventListener("click", closeFormPopup);

// Close the form popup when the user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target == formPopup) {
    closeFormPopup();
  }
});

//load more

// Get the content container
var contentContainer = document.getElementById("loadmoreblog");

// Get the "Load More" button
var loadMoreBtn = document.getElementById("loadMoreBtn");

// Set the number of initially visible paragraphs
var visibleParagraphs = 3;

// Function to handle the "Load More" button click
function loadMore() {
  // Show additional content by increasing the height of the content container
  contentContainer.style.maxHeight = "none";

  // Hide the "Load More" button if all paragraphs are visible
  if (visibleParagraphs >= contentContainer.children.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Attach the click event listener to the "Load More" button
loadMoreBtn.addEventListener("click", loadMore);





