document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const textElements = document.querySelectorAll(".animate");
  
    // List of words to highlight
    const wordsToHighlight = ["DAN-T", "Global", "YOUR"];
  
    textElements.forEach(textElement => {
      let text = textElement.textContent;
      
      // Split the text into an array of words
      let wordsArray = text.split(" ");
  
      // Loop through each word and wrap the ones that should be highlighted
      wordsArray = wordsArray.map(word => {
        // if (wordsToHighlight.includes(word.toLowerCase())) {
        //     console.log(word);
        //   return `<span class="highlight">${word}</span>`;  // Add the highlight class
        // }
        if(word==='DAN-T') {
          return `<span class="golden">${word}</span>`;  // Add the highlight class
        }
        if(word==='Global,') {
          return `<span class="golden">${word}</span>`;  // Add the highlight class
        }
        if(word==='YOUR') {
          return `<span class="green">${word}</span>`;  // Add the highlight class
        }
        return `<span>${word}</span>`;  // Regular word wrapping
      });
  
      // Join the words back together into a single string and set as the inner HTML
      textElement.innerHTML = wordsArray.join(" ");
  
      // Apply GSAP animation to each word
      const chars = textElement.querySelectorAll("span");
  
      gsap.from(chars, {
        scrollTrigger: {
          trigger: textElement,
          start: "top 75%",
          end: "bottom 50%",
          scrub: true,
        },
        color: "#676258",
        stagger: 0.1,  // Delay between each character animation
        duration: 1,
      });
    });
  });
  


const hamburger1 = document.querySelector('.hamburger-1');
const hamburger2 = document.querySelector('.hamburger-2');
const hamburger3 = document.querySelector('.hamburger-3');
const hamburgerIcon = document.querySelector('.hamburger-icon');

hamburgerIcon.addEventListener('click',()=>{
  hamburger2.classList.toggle('cross');
  hamburger1.classList.toggle('none');
  hamburger3.classList.toggle('none');
});




const observer = new IntersectionObserver((enteries)=>{
  enteries.forEach((entry)=>{
    if(entry.isIntersecting) {
      if(entry.target.classList.contains('to-be-horizontal')) {
        entry.target.classList.add('show-horizontal');
      }
      if(entry.target.classList.contains('to-be-vertical')) {
        entry.target.classList.add('show-vertical');
      }
    }else {
      entry.target.classList.remove('show-vertical');
      entry.target.classList.remove('show-horizontal');
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));