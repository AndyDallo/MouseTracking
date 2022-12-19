function main() {
    function lerp (start, end, t){
        return (1 - t) * start + t * end;
    }
    
    function easeInOutQuad (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
    
    function rAf(loop) {
        requestAnimationFrame(loop)
    }
    
    const box = document.querySelector('.box')
    
    let boxPos = {
        x: 0,
        y: 0
    }
    let mousePos = {
        x: 0,
        y: 0
    }
    
    window.addEventListener('mousemove', (e)=> {
        mousePos.x = e.clientX - 50
        mousePos.y = e.clientY - 50
    }) 
 
    function moveBox(){
        
        let easing = easeInOutQuad(0, 0.1, 0.1, 1)
    
        boxPos.x = lerp(boxPos.x, mousePos.x, easing )
        boxPos.y = lerp(boxPos.y, mousePos.y, easing)
    
        let a = mousePos.x - boxPos.x
        let b = mousePos.y - boxPos.y
        let distance = Math.sqrt( a*a + b*b)
        
        box.style.opacity = distance / 100 + 0.15
        box.style.willChange = 'transform'
        box.style.transform = `translate3d(
        ${boxPos.x}px, 
        ${boxPos.y}px, 0)
        scale(${(distance / 700) + 0.3})`
        
        rAf(moveBox)
    }
    moveBox()
}
main()



   
    

   





