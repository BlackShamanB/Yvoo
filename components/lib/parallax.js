export const initParallax = () => {
    let elements = document.querySelectorAll('.mouse-parallax');
    elements.forEach(el => {
        window.addEventListener('mousemove', function(e) { 
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;     
            el.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        }); 
    })   
}