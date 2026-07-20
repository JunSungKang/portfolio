(() => {
	"use strict";

	const header = document.querySelector("[data-site-header]");
	const navLinks = Array.from(document.querySelectorAll(".desktop-nav a"));
	const sections = navLinks
		.map(link => document.querySelector(link.getAttribute("href")))
		.filter(Boolean);

	function updateHeader() {
		if (!header) return;
		header.classList.toggle("is-scrolled", window.scrollY > 24);
	}

	function updateCurrentYear() {
		document.querySelectorAll("[data-current-year]").forEach(element => {
			element.textContent = String(new Date().getFullYear());
		});
	}

	function closeMobileMenu() {
		const menu = document.querySelector(".mobile-nav");
		if (!menu) return;
		menu.querySelectorAll("a").forEach(link => {
			link.addEventListener("click", () => menu.removeAttribute("open"));
		});
	}

	function observeSections() {
		if (!("IntersectionObserver" in window) || !sections.length) return;

		const observer = new IntersectionObserver(entries => {
			const visible = entries
				.filter(entry => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

			if (!visible) return;
			navLinks.forEach(link => {
				const isCurrent = link.getAttribute("href") === `#${visible.target.id}`;
				if (isCurrent) link.setAttribute("aria-current", "true");
				else link.removeAttribute("aria-current");
			});
		}, {
			rootMargin: "-25% 0px -60% 0px",
			threshold: [0, 0.25, 0.5]
		});

		sections.forEach(section => observer.observe(section));
	}

	window.addEventListener("scroll", updateHeader, { passive: true });
	updateHeader();
	updateCurrentYear();
	closeMobileMenu();
	observeSections();
})();
