/* 
 * The Neural HUD - Core Systems 
 * Includes: Particle Network, Scroll Observer, Typing Effect, Nav Dots
 */

document.addEventListener('DOMContentLoaded', () => {
	initParticles();
	initScrollObserver(); // Handles reveal animations AND nav dots
	initTypingEffect();
	initNavDots(); // Click handlers
});

/* ----------------------------------------------------
   1. Particle Network System (Canvas)
---------------------------------------------------- */
function initParticles() {
	const canvas = document.getElementById('bg-canvas');
	if (!canvas) return;
	const ctx = canvas.getContext('2d');

	let width, height;
	let particles = [];

	// Configuration
	const particleCount = 60;
	const connectionDistance = 150;
	const mouseDistance = 200;

	function resize() {
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
	}

	window.addEventListener('resize', resize);
	resize();

	const mouse = { x: null, y: null };
	window.addEventListener('mousemove', (e) => {
		mouse.x = e.x;
		mouse.y = e.y;
	});
	window.addEventListener('mouseleave', () => {
		mouse.x = null;
		mouse.y = null;
	});

	class Particle {
		constructor() {
			this.x = Math.random() * width;
			this.y = Math.random() * height;
			this.vx = (Math.random() - 0.5) * 0.5;
			this.vy = (Math.random() - 0.5) * 0.5;
			this.size = Math.random() * 2 + 1;
			this.color = 'rgba(0, 243, 255, ';
		}

		update() {
			this.x += this.vx;
			this.y += this.vy;

			if (this.x < 0 || this.x > width) this.vx *= -1;
			if (this.y < 0 || this.y > height) this.vy *= -1;

			if (mouse.x != null) {
				let dx = mouse.x - this.x;
				let dy = mouse.y - this.y;
				let distance = Math.sqrt(dx * dx + dy * dy);
				if (distance < mouseDistance) {
					const forceDirectionX = dx / distance;
					const forceDirectionY = dy / distance;
					const force = (mouseDistance - distance) / mouseDistance;
					const directionX = forceDirectionX * force * 0.6;
					const directionY = forceDirectionY * force * 0.6;
					this.x -= directionX;
					this.y -= directionY;
				}
			}
		}

		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fillStyle = this.color + '0.5)';
			ctx.fill();
		}
	}

	for (let i = 0; i < particleCount; i++) {
		particles.push(new Particle());
	}

	function animate() {
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, width, height);

		particles.forEach(p => {
			p.update();
			p.draw();
		});

		connectParticles();
	}

	function connectParticles() {
		for (let a = 0; a < particles.length; a++) {
			for (let b = a; b < particles.length; b++) {
				let dx = particles[a].x - particles[b].x;
				let dy = particles[a].y - particles[b].y;
				let distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < connectionDistance) {
					let opacityValue = 1 - (distance / connectionDistance);
					ctx.strokeStyle = `rgba(112, 0, 255, ${opacityValue * 0.2})`;
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(particles[a].x, particles[a].y);
					ctx.lineTo(particles[b].x, particles[b].y);
					ctx.stroke();
				}
			}
		}
	}

	animate();
}

/* ----------------------------------------------------
   2. Scroll Observer (Reveal & Nav Dots)
---------------------------------------------------- */
function initScrollObserver() {
	const container = document.querySelector('.snap-container');
	const dots = document.querySelectorAll('.nav-dot');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');

				// Active Dot Sync
				dots.forEach(dot => dot.classList.remove('active'));
				const activeDot = document.querySelector(`.nav-dot[data-target="${entry.target.id}"]`);
				if (activeDot) activeDot.classList.add('active');
			}
		});
	}, {
		root: container, // Observe relative to the scroll container
		threshold: 0.5   // Trigger when 50% visible
	});

	document.querySelectorAll('section').forEach(section => {
		observer.observe(section);
	});
}

/* ----------------------------------------------------
   3. Typing Effect
---------------------------------------------------- */
function initTypingEffect() {
	const textElement = document.querySelector('.typing-text');
	if (!textElement) return;

	const textToType = textElement.getAttribute('data-text');
	let index = 0;

	// Clear initial
	textElement.textContent = '';

	function type() {
		if (index < textToType.length) {
			textElement.textContent += textToType.charAt(index);
			index++;
			setTimeout(type, 50);
		}
	}

	setTimeout(type, 1000);
}

/* ----------------------------------------------------
   4. Navigation Interaction
---------------------------------------------------- */
function initNavDots() {
	const dots = document.querySelectorAll('.nav-dot');

	dots.forEach(dot => {
		dot.addEventListener('click', () => {
			const targetId = dot.getAttribute('data-target');
			const targetSection = document.getElementById(targetId);
			if (targetSection) {
				targetSection.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
}
