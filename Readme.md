# Invoice Master — Sistem Penagihan & Invoice Multi-CV

Aplikasi web *single-page* berbasis **HTML5, Tailwind CSS, dan JavaScript** yang dirancang untuk mengelola pembuatan invoice profesional ukuran **A4** secara cepat dari perangkat mobile (Android/iOS) maupun desktop, dilengkapi penyimpanan otomatis berbasis file **JSON di GitHub Repository**.

🌐 **Live Demo (GitHub Pages):**  
`https://dreborn2k.github.io/Invoice_master/`

---

## ✨ Fitur Utama

### 1. Dukungan Multi-CV dalam 1 Halaman
- **Switcher Profil Perusahaan di Header Kiri Atas**: Klik nama perusahaan pada bilah navigasi atas untuk berpindah secara instan antara dua entitas bisnis:
  - **CV. SRIKANDI JAYA MANDIRI** — *Amanah dan Barokah* (Sukoharjo, Jawa Tengah)
  - **Digital Jaya Mandiri** — *Solusi belanja digital* (Colomadu, Karanganyar, Jawa Tengah)
- **Konfigurasi Independen per CV**: Setiap CV memiliki kop surat, logo, NPWP, nomor seri invoice otomatis (`INV/...` vs `INV/DJM/...`), penandatangan, tema warna dokumen, serta instruksi rekening bank masing-masing.

### 2. Pemisahan Database JSON Terstruktur (`GitHub API`)
Aplikasi menyimpan dan menyinkronkan data secara otomatis ke repository GitHub Anda menggunakan 3 file JSON terpisah:
- **`data_sjm.json`** — Menyimpan pengaturan perusahaan, logo, dan riwayat invoice khusus **CV. SRIKANDI JAYA MANDIRI**.
- **`data_djm.json`** — Menyimpan pengaturan perusahaan, logo, dan riwayat invoice khusus **Digital Jaya Mandiri**.
- **`data_cons.json`** — **Database Konsumen Bersama** yang terbagi otomatis di antara kedua CV sehingga data klien cukup diinput satu kali.

### 3. Editor Invoice Lengkap & Kalkulasi Pajak Fleksibel
- **Manajemen Item Barang / Jasa**: Tambah item tak terbatas, lengkap dengan tombol **Edit**, **Duplikat**, dan **Delete/Reset** pada setiap baris item.
- **2 Mode Perhitungan Harga**:
  1. **Harga Belum Termasuk Pajak (*Exclude*)**: Pajak PPN/PPh ditambahkan di akhir subtotal.
  2. **Harga Sudah Termasuk Pajak (*Include*)**: Otomatis menghitung **Harga Netto (DPP)** per satuan barang dan menampilkan kolom perbandingan Harga Bruto vs Harga Netto.
- **Dukungan PPN & PPh**: Tarif PPN dapat disesuaikan (default `11%`), serta dukungan PPh (Pasal 22 / 23 / Final) dengan pilihan **Memotong Tagihan (`-`)** atau **Menambah Tagihan (`+`)**.
- **Opsi Tampilkan / Sembunyikan NPWP**: *Switch* cepat pada detail invoice maupun pengaturan default untuk menampilkan atau menyembunyikan NPWP perusahaan pada kop dokumen.
- **Terbilang Otomatis**: Konversi otomatis total tagihan ke dalam kalimat rupiah bahasa Indonesia.

### 4. Pratinjau A4 Multi-Halaman & Export PDF Vektor
- **Paginasi Otomatis (Multi-Halaman)**: Saat daftar item barang/jasa melebihi kapasitas 1 lembar A4, dokumen otomatis terpecah menjadi halaman 2, 3, dan seterusnya dengan **header tabel berulang** dan footer **`Halaman X dari Y`**.
- **Zoom & Auto-Fit**: Kontrol *Zoom In*, *Zoom Out*, dan *Auto Fit* menyesuaikan lebar layar HP maupun monitor desktop.
- **Export PDF Berkualitas Tinggi (`jsPDF` + `AutoTable`)**: Menghasilkan file PDF vektor tajam yang identik dengan pratinjau A4.

### 5. Kustomisasi Tema Gradasi & Gaya Antarmuka (UI Skin)
- **10 Tema Gradasi Dokumen Invoice**: *Navy Slate*, *Merah Pink Abu*, *One UI Sky*, *iPhone Ocean*, *macOS Sonoma*, *Ubuntu Sunset*, *Emerald Mint*, *Amber Silver*, *Obsidian Silver*, serta **Custom Gradasi** 2 warna bebas.
- **Outline Teks Otomatis**: Seluruh teks putih di atas latar belakang gradasi memiliki *outline* gelap agar tetap kontras dan mudah dibaca pada warna cerah maupun gelap.
- **4 Mode Tampilan Aplikasi**: *iPhone (iOS)*, *One UI Samsung*, *macOS Desktop*, dan *Linux GNOME*.
- **Proteksi Perubahan Pengaturan**: Menampilkan notifikasi konfirmasi apabila terdapat perubahan di halaman Pengaturan yang belum disimpan saat berpindah tab atau berganti CV.

---

## 📁 Struktur File Repository

```text
Invoice_master/
├── index.html       # Aplikasi utama (UI, logika multi-CV, kalkulator pajak, A4 preview & PDF export)
├── sjm1.1.jpg       # Logo resmi CV. Srikandi Jaya Mandiri
├── djm.png          # Logo resmi Digital Jaya Mandiri (opsional / dapat diunggah via Pengaturan)
├── data_sjm.json    # Database pengaturan & riwayat transaksi CV. Srikandi Jaya Mandiri (otomatis dibuat)
├── data_djm.json    # Database pengaturan & riwayat transaksi Digital Jaya Mandiri (otomatis dibuat)
├── data_cons.json   # Database pelanggan/konsumen bersama (otomatis dibuat)
└── README.md        # Dokumentasi repository
```

---

## 🚀 Cara Deployment & Menghubungkan Database GitHub

### 1. Mengaktifkan GitHub Pages
1. Buka repository **`dreborn2k/Invoice_master`** di GitHub.
2. Masuk ke menu **Settings** > **Pages**.
3. Pada bagian **Build and deployment** > **Branch**, pilih **`main`** dan folder **`/ (root)`**, lalu klik **Save**.
4. Tunggu ±1 menit hingga aplikasi aktif di `https://dreborn2k.github.io/Invoice_master/`.

### 2. Membuat Personal Access Token (Agar Bisa Simpan Otomatis ke JSON)
1. Buka [GitHub Fine-grained Personal Access Tokens](https://github.com/settings/personal-access-tokens/new).
2. Isi **Token name** (misal: `Invoice Master`).
3. Pada **Repository access**, pilih **Only select repositories** > centang **`Invoice_master`**.
4. Pada **Permissions** > **Repository permissions**, ubah **Contents** menjadi **Read and write**.
5. Klik **Generate token** dan salin (*Copy*) kode token (`github_pat_...`).

### 3. Menghubungkan Token di Aplikasi
1. Buka aplikasi **`https://dreborn2k.github.io/Invoice_master/`**.
2. Masuk ke tab **Pengaturan** > gulir ke bagian **Database File GitHub**.
3. Pastikan **Username GitHub** (`dreborn2k`) dan **Nama Repository** (`Invoice_master`) sudah sesuai, lalu tempel (*Paste*) token ke kolom **GitHub Personal Access Token**.
4. Klik **Hubungkan & Muat dari GitHub**, kemudian klik **Paksa Sinkron ke GitHub** hingga indikator berubah menjadi hijau (**Tersimpan**).

---

## 🛠️ Teknologi yang Digunakan
- **HTML5 & Vanilla JavaScript (ES6+)**
- **Tailwind CSS** (CDN)
- **jsPDF & jsPDF-AutoTable** (Pembuatan PDF A4 multi-halaman)
- **GitHub REST API v3** (Penyimpanan data JSON langsung ke repository tanpa backend tambahan)