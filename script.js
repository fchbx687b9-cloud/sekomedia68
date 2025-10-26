// -----------------------------
// Kayıt Formu
// -----------------------------
const registerForm = document.getElementById("registerForm");
const successMsg = document.getElementById("successMsg");

registerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Kullanıcı verilerini al
  const ad = document.getElementById("ad").value.trim();
  const soyad = document.getElementById("soyad").value.trim();
  const anne = document.getElementById("anne").value.trim();
  const baba = document.getElementById("baba").value.trim();
  const gmail = document.getElementById("gmail").value.trim();
  const sifre = document.getElementById("sifre").value.trim();
  const riza = document.getElementById("riza").checked;

  if(ad && soyad && anne && baba && gmail && sifre && riza) {
    successMsg.style.display = "block";
    registerForm.reset();

    // Başarı mesajını 3 saniye göster
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  } else {
    alert("Lütfen tüm alanları doldurun ve rızayı kabul edin!");
  }
});

// -----------------------------
// Oyun / Market Paneli
// -----------------------------
let coin = 0;
let money = 0;
let cars = 0;
let parkStatus = "Boş";

// HTML elementleri
const coinCount = document.getElementById("coinCount");
const moneyCount = document.getElementById("moneyCount");
const carCount = document.getElementById("carCount");
const parkStatusEl = document.getElementById("parkStatus");

// Coin satın al
document.getElementById("coinBtn").addEventListener("click", () => {
  coin += 10;
  coinCount.textContent = coin;
});

// Money satın al
document.getElementById("moneyBtn").addEventListener("click", () => {
  money += 50;
  moneyCount.textContent = money;
});

// Araba satın al
document.getElementById("carBtn").addEventListener("click", () => {
  if(money >= 100) {
    money -= 100;
    cars += 1;
    moneyCount.textContent = money;
    carCount.textContent = cars;
    alert("Yeni bir araba satın aldınız! 🚗");
  } else {
    alert("Yeterli paranız yok. Money satın alın!");
  }
});

// Araba park et
document.getElementById("parkBtn").addEventListener("click", () => {
  if(cars > 0) {
    parkStatus = parkStatus === "Boş" ? "Dolu" : "Boş";
    parkStatusEl.textContent = parkStatus;
    alert(`Araba park durumu: ${parkStatus}`);
  } else {
    alert("Önce bir araba satın alın!");
  }
});

// -----------------------------
// Contact Form
// -----------------------------
const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

if(contactForm) {
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    contactSuccess.style.display = "block";
    contactForm.reset();
    setTimeout(() => {
      contactSuccess.style.display = "none";
    }, 3000);
  });
}

// -----------------------------
// LED Buton Hover Animasyonu
// -----------------------------
const ledButtons = document.querySelectorAll(".led-btn");
ledButtons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.boxShadow = "0 0 20px #ff0, 0 0 40px #ff0, 0 0 60px #ff0";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.boxShadow = "0 0 10px #0ff, 0 0 20px #0ff";
  });
});