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