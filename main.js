let mesaj = `
Migros'a Hoşgeldiniz.
Money Kartınız Var Mı ?
1- Evet
2- Hayır
`;

let urunler = [];

let fiyatlar = [15, 40, 20, 60, 70, 80, 90, 100, 150, 200];

let urunMiktari = Number(prompt("Kaç Tane Ürün Satın Aldınız : "));

for (let i = 0; i < urunMiktari; i++) {
  let randomFiyat = fiyatlar[Math.floor(Math.random() * fiyatlar.length)];
  let urunAdi = prompt("Ürünü Giriniz : ");
  urunler.push({ urunIsmi: urunAdi, fiyat: randomFiyat });
}

let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {
  let isim = prompt("Adınızı Giriniz : ");
  let soyisim = prompt("Soyisminizi Giriniz : ");
  let musteri = new Musteri(isim, soyisim, sonuc, urunler);
  odenecekTutar = musteri.hesapla();
  alert(
    `Müşteri Bilgileri : ${isim} ${soyisim}
    Ödenecek Tutar : ${odenecekTutar}
  `
  );
} else {
  const musteri = new Musteri(null, null, sonuc, urunler);
  odenecekTutar = musteri.hesapla();
  alert(`Ödenecek Tutar : ${odenecekTutar}`);
}
