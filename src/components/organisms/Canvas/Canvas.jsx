import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

export default function Canvas({ className }) {
    const canvasRef = React.useRef();
    const { dimension } = useSelector(state => state.resume);
    
    useEffect(() => {
        const canvas = canvasRef.current;
       
        canvas.width = dimension.width;
        canvas.height = dimension.height;

        const c = canvas.getContext('2d');
        function Circle (x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dx= dx;
            this.dy = dy;
            this.radius = radius;
        
            this.draw = () => {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                c.strokeStyle = color;
                c.fillStyle = color;
                c.fill();
                c.stroke();
            }
        
            this.update = () => {
                if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }
            
                if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }
            
                this.x += this.dx;
                this.y += this.dy;
        
                this.draw();
            }
        }
        
        
        let circles = [];
        let maxRadius = 100;
        let circlesLength = 20;
        
        for(let i = 0; i < circlesLength; i++) {
            let radius = Math.random() * maxRadius;
            let x = Math.random() * (canvas.width - radius * 2) + radius;
            let y = Math.random() * (canvas.height - radius * 2) + radius;
            let dx = (Math.random() - 0.5) * 2;
            let dy = (Math.random() - 0.5) * 2;
            let color = `rgba(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random()})`
            circles.push(new Circle(x, y, dx, dy, radius, color));
        }
        
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);
            
            for(let i = 0; i < circles.length; i++) {
                circles[i].update();
                // circles[i].draw();
            }
            
        }
        
        animate()

    }, [ dimension.width, dimension.height]);

    return (
        <canvas ref={canvasRef} className={className}></canvas>
    )
}
