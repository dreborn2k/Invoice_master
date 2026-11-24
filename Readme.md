Invoice Master — Sistem Penagihan & Invoice Multi-CV (PWA Full Screen)
​Aplikasi web Progressive Web App (PWA) single-page berbasis HTML5, Tailwind CSS, dan JavaScript yang dirancang untuk mengelola pembuatan invoice profesional ukuran A4 secara cepat dari perangkat mobile (Android/iOS) maupun desktop dalam mode layar penuh (standalone tanpa header browser), dilengkapi penyimpanan otomatis berbasis file JSON di GitHub Repository.
​🌐 Live App (GitHub Pages):
https://dreborn2k.github.io/Invoice_master/
​✨ Fitur Utama
​1. Dukungan Multi-CV dalam 1 Halaman
​Switcher Profil Perusahaan di Header Kiri Atas: Klik nama perusahaan pada bilah navigasi atas untuk berpindah secara instan antara dua entitas bisnis:
​CV. SRIKANDI JAYA MANDIRI — Amanah dan Barokah (Sukoharjo, Jawa Tengah)
​Digital Jaya Mandiri — Solusi belanja digital (Colomadu, Karanganyar, Jawa Tengah)
​Konfigurasi Independen per CV: Setiap CV memiliki kop surat, logo (logo_sjm.png / logo_djm.png), NPWP, nomor seri invoice otomatis (INV/... vs INV/DJM/...), penandatangan, tema warna dokumen, serta instruksi rekening bank masing-masing.
​2. Progressive Web App (PWA) Full Screen & Auto-Icon Repo
​Mode Layar Penuh (Standalone): Dapat diinstall sebagai aplikasi WebAPK di Android (Chrome / Samsung Internet) maupun iOS Safari (Add to Home Screen) sehingga berjalan penuh tanpa bilah alamat (address bar) browser.
​Upload Logo & Ikon PWA Otomatis ke GitHub: Saat mengunggah logo perusahaan di menu Pengaturan, aplikasi otomatis menyimpan file logo sesuai CV aktif (logo_sjm.png atau logo_djm.png) sekaligus membuatkan ikon aplikasi icon-192.png dan icon-512.png langsung ke repository GitHub tanpa perlu upload manual.
​3. Pemisahan Database JSON Terstruktur & Proteksi PIN Token
​3 File JSON Terpisah:
​data_sjm.json — Menyimpan pengaturan perusahaan, logo, dan riwayat invoice khusus CV. SRIKANDI JAYA MANDIRI.
​data_djm.json — Menyimpan pengaturan perusahaan, logo, dan riwayat invoice khusus Digital Jaya Mandiri.
​data_cons.json — Database Konsumen Bersama yang terbagi otomatis di antara kedua CV sehingga data klien cukup dikelola terpusat di tab Data Konsumen.
​Proteksi Password / PIN Token: Pengaturan koneksi GitHub Personal Access Token dilindungi oleh Password / PIN dan otomatis terkunci kembali segera setelah sinkronisasi berhasil.
​4. Penomoran Otomatis Berkelanjutan per Bulan & Editor Invoice Lengkap
​Auto-Numbering Bulanan: Saat membuat invoice baru atau mengganti tanggal transaksi, sistem otomatis membaca riwayat nomor transaksi terakhir di bulan yang sama (misal 401 \rightarrow otomatis menjadi 402) dan otomatis kembali ke 001 saat memasuki bulan baru.
​Input Item Cepat dari Atas: Setiap kali menekan + Tambah Item, baris barang/jasa baru langsung muncul di posisi paling atas (Item #1) dan kursor otomatis aktif. Dilengkapi tombol Edit, Duplikat, dan Delete di setiap item.
​Import / Export Item & Transaksi: Pada tab Riwayat maupun editor item, tersedia fitur Export Item Saja, Export 1 Transaksi, serta Import Item / Transaksi berbasis JSON.
​2 Mode Perhitungan Pajak (PPN & PPh):
​1. Harga Belum Termasuk Pajak (Exclude): Pajak PPN/PPh ditambahkan di akhir subtotal.
​2. Harga Sudah Termasuk Pajak (Include): Otomatis menghitung Harga Netto (DPP) per satuan barang.
​Terbilang Otomatis: Konversi otomatis total tagihan ke dalam kalimat rupiah bahasa Indonesia.
​5. Pratinjau A4 Multi-Halaman & Export PDF HD (Print2PDF)
​Paginasi Otomatis (Multi-Halaman): Saat daftar item barang/jasa melebihi kapasitas 1 lembar A4, dokumen otomatis terpecah menjadi halaman 2, 3, dan seterusnya dengan header tabel berulang dan footer Halaman X dari Y.
​Export PDF Kualitas Tinggi: Merender halaman A4 pada resolusi tinggi (300 DPI) ke dokumen PDF multi-halaman sehingga gradasi warna, outline teks putih, dan tata letak 100% identik dengan pratinjau dokumen.
​6. Kustomisasi Tema Gradasi & Gaya Antarmuka (UI Skin)
​Dropdown 10 Tema Gradasi: Navy Slate, Merah Pink Abu, One UI Sky, iPhone Ocean, macOS Sonoma, Ubuntu Sunset, Emerald Mint, Amber Silver, Obsidian Silver, serta Custom Gradasi 2 warna bebas dengan outline teks otomatis.
​4 Mode Tampilan Aplikasi: iPhone (iOS), One UI Samsung, macOS Desktop, dan Linux GNOME.
​Konfirmasi Pengaturan Belum Disimpan: Mencegah kehilangan perubahan pengaturan saat berpindah tab atau berganti profil CV.
​📁 Struktur File Repository
