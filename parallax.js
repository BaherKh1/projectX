document.addEventListener('DOMContentLoaded', () => {
    // Select the elements by their IDs
    // We'll apply the parallax effect to svg1, svg2, svg3, and svg4
    const svg1 = document.getElementById('svg1');
    const svg2 = document.getElementById('svg2');
    const svg3 = document.getElementById('svg3');
    const svg4 = document.getElementById('svg4');
    const svg5 = document.getElementById('svg5'); // This image will be the stationary one

    // Define initial bottom positions for each SVG based on your CSS
    // We get the computed style to ensure we're starting from the correct visual position
    // and then convert it to a number.
    const initialBottom1 = parseFloat(getComputedStyle(svg1).bottom);
    const initialBottom2 = parseFloat(getComputedStyle(svg2).bottom);
    const initialBottom3 = parseFloat(getComputedStyle(svg3).bottom);
    const initialBottom4 = parseFloat(getComputedStyle(svg4).bottom);
    const initialBottom5 = parseFloat(getComputedStyle(svg5).bottom);


    // Add an event listener for the 'scroll' event on the window
    window.addEventListener('scroll', () => {
        // Get the current vertical scroll position of the page
        let scrollY = window.scrollY;

        // Define parallax speeds for each SVG.
        // A higher value means the element moves faster relative to the scroll.
        // For a "collapse down" effect, higher speed means it moves down faster.
        // We want svg1 to move down fastest, then svg2, and so on.
        const speed1 = 0.5; // Moves 0.5px down for every 1px scrolled down
        const speed2 = 0.4; // Moves 0.4px down for every 1px scrolled down
        const speed3 = 0.3; // Moves 0.3px down for every 1px scrolled down
        const speed4 = 0.2;
        const speed5 = 0.1; // Moves 0.2px down for every 1px scrolled down
        // svg5 remains stationary or moves very little, acting as the 'base'

        // Calculate the new vertical position for each SVG using transform: translateY().
        // translateY moves the element along the Y-axis.
        // We now ADD the scrolled amount multiplied by speed to make them move downwards
        // relative to their initial position as you scroll down.
        // This creates the "collapsing down" effect.
        if (svg1) {
            svg1.style.transform = `translateY(${scrollY * speed1}px)`;
        }
        if (svg2) {
            svg2.style.transform = `translateY(${scrollY * speed2}px)`;
        }
        if (svg3) {
            svg3.style.transform = `translateY(${scrollY * speed3}px)`;
        }
        if (svg4) {
            svg4.style.transform = `translateY(${scrollY * speed4}px)`;
        }
        if (svg5) {
            svg5.style.transform = `translateY(${scrollY * speed5}px)`;
        }
        // svg5 doesn't need to move if it's the element they collapse under.
        // If you wanted svg5 to also have a very slight parallax, you could add:
        // if (svg5) {
        //     const speed5 = 0.1;
        //     svg5.style.transform = `translateY(${scrollY * speed5}px)`;
        // }
    });
});
