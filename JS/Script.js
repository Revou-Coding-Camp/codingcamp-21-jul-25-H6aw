// Menunggu sampai seluruh konten HTML dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // 1. MEMILIH ELEMEN HTML
    // Memilih elemen-elemen yang akan kita gunakan
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');
    const todoList = document.getElementById('todo-list');

    // 2. MENAMBAH EVENT LISTENER UNTUK FORM
    // Menjalankan fungsi saat form di-submit (tombol "Tambah" ditekan)
    todoForm.addEventListener('submit', function(event) {
        // Mencegah halaman refresh saat form di-submit
        event.preventDefault();

        // Mengambil teks dari input dan menghapus spasi di awal/akhir
        const taskText = todoInput.value.trim();
        const taskDate = dateInput.value;

        // Validasi: Cek apakah input teks kosong atau tanggal belum diisi
        if (taskText === '' || taskDate === '') {
            alert('Harap isi nama tugas dan tanggal!');
            return; // Hentikan fungsi jika input tidak valid
        }

        // Memanggil fungsi untuk menambahkan tugas ke daftar
        addTask(taskText, taskDate);

        // Mengosongkan form setelah tugas ditambahkan
        todoForm.reset();
    });

    // 3. FUNGSI UNTUK MENAMBAHKAN TUGAS KE DALAM LIST
    function addTask(text, date) {
        // Membuat elemen <li> baru
        const listItem = document.createElement('li');

        // Mengisi konten HTML untuk item list baru
        // Ini termasuk teks tugas, tanggal, dan tombol hapus
        listItem.innerHTML = `
            <span>${text} - <em>(${date})</em></span>
            <button class="delete-btn">Hapus</button>
        `;

        // Menambahkan item list baru ke dalam <ul>
        todoList.appendChild(listItem);
    }

    // 4. MENAMBAH EVENT LISTENER UNTUK MENGHAPUS TUGAS
    // Menggunakan event delegation: kita pasang listener di <ul>, bukan di setiap tombol
    todoList.addEventListener('click', function(event) {
        // Cek apakah yang diklik adalah elemen dengan class "delete-btn"
        if (event.target.classList.contains('delete-btn')) {
            // Menghapus elemen <li> yang merupakan induk dari tombol yang diklik
            const listItem = event.target.parentElement;
            todoList.removeChild(listItem);
        }
    });

});

const body = document.body;
const particleCount = 50;

function createParticle() {
   const particle = document.createElement('div');
   particle.classList.add('particle');
   const size = Math.random() * 10 + 5;
   particle.style.width = `${size}px`;
   particle.style.height = `${size}px`;
   particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
   particle.style.borderRadius = '50%';
   particle.style.position = 'fixed';
   particle.style.left = `${Math.random() * 100}vw`;
   particle.style.top = `${Math.random() * 100}vh`;
   particle.style.zIndex = '1';
   particle.style.pointerEvents = 'none'; // Agar tidak menghalangi interaksi

   const animationDuration = Math.random() * 3 + 2;
   const directionX = Math.random() > 0.5 ? 1 : -1;
   const directionY = Math.random() > 0.5 ? 1 : -1;

   particle.style.animation = `float ${animationDuration}s infinite linear`;

   body.appendChild(particle);

   particle.addEventListener('mousemove', (e) => {
       const xPos = e.clientX / window.innerWidth;
       const yPos = e.clientY / window.innerHeight;
       particle.style.transform = `translate(${xPos * 20 - 10}px, ${yPos * 20 - 10}px)`;
   });

   particle.addEventListener('mouseout', () => {
       particle.style.transform = `translate(0, 0)`;
   });
}

for (let i = 0; i < particleCount; i++) {
   createParticle();
}