const membuatCard = (nama, umur, gender, kota) => {
  //   membuat card
  const card = document.createElement("div");
  card.classList.add("card");
  document.body.append(card);
  card.innerHTML = `
  <h3>Card Name</h3>

  <div class='about-person'>
    <ul>
        <li>Nama : </li>
        <li>Umur : </li>
        <li>Gender : </li>
        <li>Kota : </li>
    </ul>

    <ul class="person">
        <li id="name">${nama}</li>
        <li id="umur">${umur}</li>
        <li id="gender">${gender}</li>
        <li id="kota">${kota}</li>
    </ul>
  </div>
  `;
};

let i = 0;

const nama = prompt("Masukan nama anda");
const umur = prompt("Masukan umur anda");
const gender = prompt("Masukan gender anda");
const kota = prompt("Masukan kota tempat anda tinggal");

membuatCard(nama, umur, gender, kota);
