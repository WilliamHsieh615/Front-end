$(document).ready(function () {

    var map = L.map('map').setView([22.634, 120.308], 17); // 高雄軟體園區

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap 貢獻者'
    }).addTo(map);

    L.marker([22.634, 120.308]).addTo(map)
      .bindPopup('六角西餐廳')
      .openPopup();
    
});