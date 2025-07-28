function CelestialBody(type) {
	this.category = "天體";
	this.type = type;
}
CelestialBody.prototype.exist = function () {
	return `${this.name} 是宇宙中的${this.category}`;
};

function Star(name, grade) {
	CelestialBody.call(this, "恆星");
	this.name = name;
	this.grade = grade;
}
Star.prototype = Object.create(CelestialBody.prototype);
Star.prototype.constructor = Star;
Star.prototype.shine = function () {
	return `是一顆 ${this.grade}`;
};

function Sun() {
	Star.call(this, "太陽", "黃矮星");
}
Sun.prototype = Object.create(Star.prototype);
Sun.prototype.constructor = Sun;
Sun.prototype.solarSystem = function () {
	return `${this.name} 是太陽系的中心恆星`;
};

function RockyPlanet(name, hasLife) {
	CelestialBody.call(this, "岩石行星");
	this.name = name;
	this.hasLife = hasLife;
}
RockyPlanet.prototype = Object.create(CelestialBody.prototype);
RockyPlanet.prototype.constructor = RockyPlanet;
RockyPlanet.prototype.info = function () {
	return `是一顆 岩石行星，有固態表面，${this.hasLife ? "已發現生命" : "尚未發現生命"}`;
};

function GasGiant(name, hasLife) {
	CelestialBody.call(this, "氣態行星");
	this.name = name;
	this.hasLife = hasLife;
}
GasGiant.prototype = Object.create(CelestialBody.prototype);
GasGiant.prototype.constructor = GasGiant;
GasGiant.prototype.info = function () {
	return `是一顆 氣態行星，沒有固態表面，${this.hasLife ? "已發現生命" : "尚未發現生命"}`;
};

function DwarfPlanet(name, hasLife) {
	CelestialBody.call(this, "矮行星");
	this.name = name;
	this.hasLife = hasLife;
}
DwarfPlanet.prototype = Object.create(CelestialBody.prototype);
DwarfPlanet.prototype.constructor = DwarfPlanet;
DwarfPlanet.prototype.info = function () {
	return `是一顆 矮行星，體積較小且軌道未清除，${this.hasLife ? "已發現生命" : "尚未發現生命"}`;
};

function Satellite(name, host) {
	CelestialBody.call(this, "衛星");
	this.type = "衛星";
	this.name = name;
	this.host = host;
}
Satellite.prototype = Object.create(CelestialBody.prototype);
Satellite.prototype.constructor = Satellite;
Satellite.prototype.info = function () {
	return `是一顆 衛星，其繞著 ${this.host} 運轉`;
};

const cardContainer = document.querySelector(".cardContainer");
let allBodies = [];

function renderCards(data) {
	cardContainer.replaceChildren();

	if (data.length === 0) return;

	data.forEach(item => {
		let instance;

		switch (item.type) {
			case "Star":
				instance = item.name === "太陽"
					? new Sun()
					: new Star(item.name, item.grade);
				break;
			case "RockyPlanet":
				instance = new RockyPlanet(item.name, item.hasLife);
				break;
			case "GasGiant":
				instance = new GasGiant(item.name, item.hasLife);
				break;
			case "DwarfPlanet":
				instance = new DwarfPlanet(item.name, item.hasLife);
				break;
			case "Satellite":
				instance = new Satellite(item.name, item.host);
				break;
			default:
				instance = new CelestialBody(item.type);
		}

		const card = document.createElement("div");
		card.classList.add("card", "swiper-slide");
		card.innerHTML = `
			<img src="${item.image}" alt="${item.name}" />
			<div class="info">
				<h3>${item.name}</h3>
				<p>${item.englishName}</p>
				<ul class="description"></ul>
			</div>
		`;

		const description = card.querySelector(".description");

		const messages = [
			instance.exist?.(),
			instance.shine?.(),
			instance.solarSystem?.(),
			instance.info?.(),
			item.description
		].filter(Boolean);

		description.innerHTML = messages.map(text => `<li>${text}</li>`).join('');
		cardContainer.appendChild(card);
	});

	const enableLoop = data.length > 1;

	if (window.swiperInstance) {
		window.swiperInstance.destroy(true, true);
	}

	window.swiperInstance = new Swiper('.swiper', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		},
		slidesPerView: 1,
		loop: enableLoop
	});
}

axios.get("./bodies.json")
	.then(res => {
		allBodies = res.data;
		renderCards(allBodies);
	})
	.catch(err => {
		console.error("資料載入錯誤：", err);
	});

const searchInput = document.querySelector(".searchInput");

searchInput.addEventListener("input", () => {
	const keyword = searchInput.value.trim().toLowerCase();

	const filtered = allBodies.filter(item =>
		item.name.toLowerCase().includes(keyword) ||
		item.englishName.toLowerCase().includes(keyword) ||
		item.type.toLowerCase().includes(keyword)
	);
	renderCards(filtered);
});

const mapLink = document.querySelector(".mapLink");
const map = document.querySelector(".map");
const xIcon = map.querySelector(".xIcon");
mapLink.addEventListener("click", (e) => {
	e.preventDefault();
	map.style.display = "flex";
});
xIcon.addEventListener("click", (e) => {
	e.preventDefault();
	map.style.display = "none";
});