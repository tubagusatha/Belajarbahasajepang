// DATABASE LENGKAP 400 SOAL DENGAN 6 KATEGORI
const questionBank = {
    hiragana_basic: [
        { q: "あ", correct: "A", wrong: "I" }, { q: "い", correct: "I", wrong: "U" },
        { q: "う", correct: "U", wrong: "E" }, { q: "え", correct: "E", wrong: "O" },
        { q: "お", correct: "O", wrong: "A" }, { q: "か", correct: "Ka", wrong: "Ki" },
        { q: "き", correct: "Ki", wrong: "Ku" }, { q: "く", correct: "Ku", wrong: "Ke" },
        { q: "け", correct: "Ke", wrong: "Ko" }, { q: "こ", correct: "Ko", wrong: "Sa" },
        { q: "さ", correct: "Sa", wrong: "Shi" }, { q: "し", correct: "Shi", wrong: "Su" },
        { q: "す", correct: "Su", wrong: "Se" }, { q: "せ", correct: "Se", wrong: "So" },
        { q: "そ", correct: "So", wrong: "Ta" }, { q: "た", correct: "Ta", wrong: "Chi" },
        { q: "ち", correct: "Chi", wrong: "Tsu" }, { q: "つ", correct: "Tsu", wrong: "Te" },
        { q: "て", correct: "Te", wrong: "To" }, { q: "と", correct: "To", wrong: "Na" },
        { q: "な", correct: "Na", wrong: "Ni" }, { q: "に", correct: "Ni", wrong: "Nu" },
        { q: "ぬ", correct: "Nu", wrong: "Ne" }, { q: "ね", correct: "Ne", wrong: "No" },
        { q: "の", correct: "No", wrong: "Ha" }, { q: "は", correct: "Ha", wrong: "Hi" },
        { q: "ひ", correct: "Hi", wrong: "Fu" }, { q: "ふ", correct: "Fu", wrong: "He" },
        { q: "へ", correct: "He", wrong: "Ho" }, { q: "ほ", correct: "Ho", wrong: "Ma" },
        { q: "ま", correct: "Ma", wrong: "Mi" }, { q: "み", correct: "Mi", wrong: "Mu" },
        { q: "む", correct: "Mu", wrong: "Me" }, { q: "め", correct: "Me", wrong: "Mo" },
        { q: "も", correct: "Mo", wrong: "Ya" }, { q: "や", correct: "Ya", wrong: "Yu" },
        { q: "ゆ", correct: "Yu", wrong: "Yo" }, { q: "よ", correct: "Yo", wrong: "Ra" },
        { q: "ら", correct: "Ra", wrong: "Ri" }, { q: "り", correct: "Ri", wrong: "Ru" },
        { q: "る", correct: "Ru", wrong: "Re" }, { q: "れ", correct: "Re", wrong: "Ro" },
        { q: "ろ", correct: "Ro", wrong: "Wa" }, { q: "わ", correct: "Wa", wrong: "Wo" },
        { q: "を", correct: "Wo", wrong: "N" }, { q: "ん", correct: "N", wrong: "Wa" }
    ],
    hiragana_adv: [
        { q: "が", correct: "Ga", wrong: "Gi" }, { q: "ぎ", correct: "Gi", wrong: "Gu" },
        { q: "ぐ", correct: "Gu", wrong: "Ge" }, { q: "げ", correct: "Ge", wrong: "Go" },
        { q: "ご", correct: "Go", wrong: "Za" }, { q: "ざ", correct: "Za", wrong: "Ji" },
        { q: "じ", correct: "Ji", wrong: "Zu" }, { q: "ず", correct: "Zu", wrong: "Ze" },
        { q: "ぜ", correct: "Ze", wrong: "Zo" }, { q: "ぞ", correct: "Zo", wrong: "Da" },
        { q: "だ", correct: "Da", wrong: "Ji" }, { q: "ぢ", correct: "Ji", wrong: "Zu" },
        { q: "づ", correct: "Zu", wrong: "De" }, { q: "で", correct: "De", wrong: "Do" },
        { q: "ど", correct: "Do", wrong: "Ba" }, { q: "ば", correct: "Ba", wrong: "Bi" },
        { q: "び", correct: "Bi", wrong: "Bu" }, { q: "ぶ", correct: "Bu", wrong: "Be" },
        { q: "べ", correct: "Be", wrong: "Bo" }, { q: "ぼ", correct: "Bo", wrong: "Pa" },
        { q: "ぱ", correct: "Pa", wrong: "Pi" }, { q: "ぴ", correct: "Pi", wrong: "Pu" },
        { q: "ぷ", correct: "Pu", wrong: "Pe" }, { q: "ぺ", correct: "Pe", wrong: "Po" },
        { q: "ぽ", correct: "Po", wrong: "Kya" }, { q: "きゃ", correct: "Kya", wrong: "Kyu" },
        { q: "きゅ", correct: "Kyu", wrong: "Kyo" }, { q: "きょ", correct: "Kyo", wrong: "Sha" },
        { q: "しゃ", correct: "Sha", wrong: "Shu" }, { q: "しゅ", correct: "Shu", wrong: "Sho" },
        { q: "しょ", correct: "Sho", wrong: "Cha" }, { q: "ちゃ", correct: "Cha", wrong: "Chu" },
        { q: "ちゅ", correct: "Chu", wrong: "Cho" }, { q: "ちょ", correct: "Cho", wrong: "Nya" },
        { q: "にゃ", correct: "Nya", wrong: "Nyu" }, { q: "にゅ", correct: "Nyu", wrong: "Nyo" },
        { q: "にょ", correct: "Nyo", wrong: "Hya" }, { q: "ひゃ", correct: "Hya", wrong: "Hyu" },
        { q: "ひゅ", correct: "Hyu", wrong: "Hyo" }, { q: "ひょ", correct: "Hyo", wrong: "Mya" },
        { q: "みゃ", correct: "Mya", wrong: "Myu" }, { q: "みゅ", correct: "Myu", wrong: "Myo" },
        { q: "みょ", correct: "Myo", wrong: "Rya" }, { q: "りゃ", correct: "Rya", wrong: "Ryu" },
        { q: "りゅ", correct: "Ryu", wrong: "Ryo" }, { q: "りょ", correct: "Ryo", wrong: "Gya" },
        { q: "ぎゃ", correct: "Gya", wrong: "Gyu" }, { q: "ぎゅ", correct: "Gyu", wrong: "Gyo" },
        { q: "ぎょ", correct: "Gyo", wrong: "Ja" }, { q: "じゃ", correct: "Ja", wrong: "Ju" },
        { q: "じゅ", correct: "Ju", wrong: "Jo" }, { q: "じょ", correct: "Jo", wrong: "Bya" },
        { q: "びゃ", correct: "Bya", wrong: "Byu" }, { q: "びゅ", correct: "Byu", wrong: "Byo" },
        { q: "ぴゃ", correct: "Pya", wrong: "Pyu" }, { q: "ぴゅ", correct: "Pyu", wrong: "Pyo" },
        { q: "ぴょ", correct: "Pyo", wrong: "Pya" }
    ],
    katakana_basic: [
        { q: "ア", correct: "A", wrong: "O" }, { q: "イ", correct: "I", wrong: "E" },
        { q: "ウ", correct: "U", wrong: "A" }, { q: "エ", correct: "E", wrong: "I" },
        { q: "オ", correct: "O", wrong: "U" }, { q: "カ", correct: "Ka", wrong: "Ke" },
        { q: "キ", correct: "Ki", wrong: "Ko" }, { q: "ク", correct: "Ku", wrong: "Ka" },
        { q: "ケ", correct: "Ke", wrong: "Ki" }, { q: "コ", correct: "Ko", wrong: "Ku" },
        { q: "サ", correct: "Sa", wrong: "Su" }, { q: "シ", correct: "Shi", wrong: "So" },
        { q: "ス", correct: "Su", wrong: "Se" }, { q: "セ", correct: "Se", wrong: "Sa" },
        { q: "ソ", correct: "So", wrong: "Shi" }, { q: "タ", correct: "Ta", wrong: "Te" },
        { q: "チ", correct: "Chi", wrong: "To" }, { q: "ツ", correct: "Tsu", wrong: "Ta" },
        { q: "テ", correct: "Te", wrong: "Tu" }, { q: "ト", correct: "To", wrong: "Ti" },
        { q: "ナ", correct: "Na", wrong: "Ni" }, { q: "ニ", correct: "Ni", wrong: "Nu" },
        { q: "ヌ", correct: "Nu", wrong: "Ne" }, { q: "ネ", correct: "Ne", wrong: "No" },
        { q: "ノ", correct: "No", wrong: "Ha" }, { q: "ハ", correct: "Ha", wrong: "Hi" },
        { q: "ヒ", correct: "Hi", wrong: "Fu" }, { q: "フ", correct: "Fu", wrong: "He" },
        { q: "ヘ", correct: "He", wrong: "Ho" }, { q: "ホ", correct: "Ho", wrong: "Ma" },
        { q: "マ", correct: "Ma", wrong: "Mi" }, { q: "ミ", correct: "Mi", wrong: "Mu" },
        { q: "ム", correct: "Mu", wrong: "Me" }, { q: "メ", correct: "Me", wrong: "Mo" },
        { q: "モ", correct: "Mo", wrong: "Ya" }, { q: "ヤ", correct: "Ya", wrong: "Yu" },
        { q: "ユ", correct: "Yu", wrong: "Yo" }, { q: "ヨ", correct: "Yo", wrong: "Ra" },
        { q: "ラ", correct: "Ra", wrong: "Ri" }, { q: "リ", correct: "Ri", wrong: "Ru" },
        { q: "ル", correct: "Ru", wrong: "Re" }, { q: "レ", correct: "Re", wrong: "Ro" },
        { q: "ロ", correct: "Ro", wrong: "Wa" }, { q: "ワ", correct: "Wa", wrong: "Wo" },
        { q: "ヲ", correct: "Wo", wrong: "N" }, { q: "ン", correct: "N", wrong: "Wa" }
    ],
    katakana_adv: [
        { q: "ガ", correct: "Ga", wrong: "Gi" }, { q: "ギ", correct: "Gi", wrong: "Gu" },
        { q: "グ", correct: "Gu", wrong: "Ge" }, { q: "ゲ", correct: "Ge", wrong: "Go" },
        { q: "ゴ", correct: "Go", wrong: "Za" }, { q: "ザ", correct: "Za", wrong: "Ji" },
        { q: "ジ", correct: "Ji", wrong: "Zu" }, { q: "ズ", correct: "Zu", wrong: "Ze" },
        { q: "ゼ", correct: "Ze", wrong: "Zo" }, { q: "ゾ", correct: "Zo", wrong: "Da" },
        { q: "ダ", correct: "Da", wrong: "Ji" }, { q: "ヂ", correct: "Ji", wrong: "Zu" },
        { q: "ヅ", correct: "Zu", wrong: "De" }, { q: "デ", correct: "De", wrong: "Do" },
        { q: "ド", correct: "Do", wrong: "Ba" }, { q: "バ", correct: "Ba", wrong: "Bi" },
        { q: "ビ", correct: "Bi", wrong: "Bu" }, { q: "ブ", correct: "Bu", wrong: "Be" },
        { q: "ベ", correct: "Be", wrong: "Bo" }, { q: "ボ", correct: "Bo", wrong: "Pa" },
        { q: "パ", correct: "Pa", wrong: "Pi" }, { q: "ピ", correct: "Pi", wrong: "Pu" },
        { q: "プ", correct: "Pu", wrong: "Pe" }, { q: "ペ", correct: "Pe", wrong: "Po" },
        { q: "ポ", correct: "Po", wrong: "Kya" }, { q: "キャ", correct: "Kya", wrong: "Kyu" },
        { q: "キュ", correct: "Kyu", wrong: "Kyo" }, { q: "キョ", correct: "Kyo", wrong: "Sha" },
        { q: "シャ", correct: "Sha", wrong: "Shu" }, { q: "シュ", correct: "Shu", wrong: "Sho" },
        { q: "ショ", correct: "Sho", wrong: "Cha" }, { q: "チャ", correct: "Cha", wrong: "Chu" },
        { q: "チュ", correct: "Chu", wrong: "Cho" }, { q: "チョ", correct: "Cho", wrong: "Nya" },
        { q: "ニャ", correct: "Nya", wrong: "Nyu" }, { q: "ニュ", correct: "Nyu", wrong: "Nyo" },
        { q: "ニョ", correct: "Nyo", wrong: "Hya" }, { q: "ヒャ", correct: "Hya", wrong: "Hyu" },
        { q: "ヒュ", correct: "Hyu", wrong: "Hyo" }, { q: "ヒョ", correct: "Hyo", wrong: "Mya" },
        { q: "ミャ", correct: "Mya", wrong: "Myu" }, { q: "ミュ", correct: "Myu", wrong: "Myo" },
        { q: "ミョ", correct: "Myo", wrong: "Rya" }, { q: "リャ", correct: "Rya", wrong: "Ryu" },
        { q: "リュ", correct: "Ryu", wrong: "Ryo" }, { q: "リョ", correct: "Ryo", wrong: "Gya" },
        { q: "ギャ", correct: "Gya", wrong: "Gyu" }, { q: "ギュ", correct: "Gyu", wrong: "Gyo" },
        { q: "ギョ", correct: "Gyo", wrong: "Ja" }, { q: "ジャ", correct: "Ja", wrong: "Ju" },
        { q: "ジュ", correct: "Ju", wrong: "Jo" }, { q: "ジョ", correct: "Jo", wrong: "Bya" },
        { q: "ビャ", correct: "Bya", wrong: "Byu" }, { q: "ビュ", correct: "Byu", wrong: "Byo" },
        { q: "ピャ", correct: "Pya", wrong: "Pyu" }, { q: "ピュ", correct: "Pyu", wrong: "Pyo" },
        { q: "ピョ", correct: "Pyo", wrong: "Pya" }
    ],
    hiragana_sent: [
        { q: "おはよう", correct: "Selamat Pagi", wrong: "Selamat Malam" },
        { q: "ありがとう", correct: "Terima Kasih", wrong: "Sama-sama" },
        { q: "さようなら", correct: "Selamat Tinggal", wrong: "Halo" },
        { q: "こんにちは", correct: "Selamat Siang", wrong: "Selamat Tidur" },
        { q: "おやすみ", correct: "Selamat Tidur", wrong: "Selamat Datang" },
        { q: "はじめまして", correct: "Salam Kenal", wrong: "Maaf" },
        { q: "すみません", correct: "Permisi / Maaf", wrong: "Silakan" },
        { q: "ごめんなさい", correct: "Mohon Maaf", wrong: "Terima Kasih" },
        { q: "いただきます", correct: "Selamat Makan", wrong: "Sampai Jumpa" },
        { q: "ただいま", correct: "Saya Pulang", wrong: "Hati-hati" },
        { q: "おかえり", correct: "Selamat Datang Kembali", wrong: "Pergi Dulu" },
        { q: "いってらっしゃい", correct: "Hati-hati di Jalan", wrong: "Saya Kembali" },
        { q: "おめでとう", correct: "Selamat!", wrong: "Semoga Sukses" },
        { q: "がんばって", correct: "Semangat", wrong: "Menyerah" },
        { q: "ようこそ", correct: "Selamat Datang", wrong: "Sampai Nanti" },
        { q: "ひさしぶり", correct: "Lama Tidak Berjumpa", wrong: "Baru Saja" },
        { q: "もしもし", correct: "Halo (Ditelepon)", wrong: "Tunggu Sebentar" },
        { q: "どうぞ", correct: "Silakan", wrong: "Terima Kasih" },
        { q: "よろしく", correct: "Mohon Bantuan", wrong: "Sama-sama" },
        { q: "だいがく", correct: "Universitas", wrong: "Sekolah Dasar" },
        { q: "しゅくだい", correct: "Tugas / PR", wrong: "Ujian" },
        { q: "せんせい", correct: "Guru / Dosen", wrong: "Murid" },
        { q: "ともだち", correct: "Teman", wrong: "Keluarga" },
        { q: "くらす", correct: "Kelas", wrong: "Rumah" },
        { q: "いそがしい", correct: "Sibuk", wrong: "Santai" },
        { q: "べんきょう", correct: "Belajar", wrong: "Bermain" },
        { q: "じゅぎょう", correct: "Pelajaran", wrong: "Libur" },
        { q: "としょかん", correct: "Perpustakaan", wrong: "Kantin" },
        { q: "がくせい", correct: "Mahasiswa/Pelajar", wrong: "Pekerja" },
        { q: "てすと", correct: "Ujian", wrong: "Tugas" },
        { q: "やすみ", correct: "Libur / Istirahat", wrong: "Masuk Kerja" },
        { q: "きゅうけい", correct: "Istirahat", wrong: "Rapat" },
        { q: "こたえ", correct: "Jawaban", wrong: "Pertanyaan" },
        { q: "しつもん", correct: "Pertanyaan", wrong: "Jawaban" },
        { q: "じしょ", correct: "Kamus", wrong: "Buku Tulis" },
        { q: "ほん", correct: "Buku", wrong: "Pensil" },
        { q: "えんぴつ", correct: "Pensil", wrong: "Penghapus" },
        { q: "つくえ", correct: "Meja", wrong: "Kursi" },
        { q: "いす", correct: "Kursi", wrong: "Papan Tulis" },
        { q: "かのじょ", correct: "Pacar Perempuan / Dia (Pr)", wrong: "Dia (Lk)" },
        { q: "こいびと", correct: "Kekasih", wrong: "Teman" },
        { q: "すき", correct: "Suka", wrong: "Benci" },
        { q: "きれい", correct: "Cantik / Bersih", wrong: "Kotor" },
        { q: "あいたい", correct: "Ingin Bertemu", wrong: "Ingin Pergi" },
        { q: "たいせつ", correct: "Penting / Berharga", wrong: "Biasa Saja" },
        { q: "やくそく", correct: "Janji", wrong: "Bohong" },
        { q: "いっしょ", correct: "Bersama-sama", wrong: "Sendiri" },
        { q: "はなし", correct: "Cerita / Bicara", wrong: "Diam" },
        { q: "こころ", correct: "Hati", wrong: "Pikiran" },
        { q: "くるま", correct: "Mobil", wrong: "Motor" },
        { q: "みぎ", correct: "Kanan", wrong: "Kiri" },
        { q: "ひだり", correct: "Kiri", wrong: "Kanan" },
        { q: "うんてんしゅ", correct: "Sopir", wrong: "Penumpang" },
        { q: "せき", correct: "Kursi / Tempat Duduk", wrong: "Pintu" },
        { q: "おかね", correct: "Uang", wrong: "Barang" },
        { q: "かいもの", correct: "Belanja", wrong: "Menjual" },
        { q: "ねだん", correct: "Harga", wrong: "Kualitas" },
        { q: "うりば", correct: "Tempat Penjualan", wrong: "Gudang" },
        { q: "なまえ", correct: "Nama", wrong: "Umur" },
        { q: "とし", correct: "Tahun / Umur", wrong: "Bulan" },
        { q: "あさ", correct: "Pagi", wrong: "Malam" },
        { q: "ひる", correct: "Siang", wrong: "Sore" },
        { q: "よる", correct: "Malam", wrong: "Pagi" },
        { q: "きょう", correct: "Hari Ini", wrong: "Besok" },
        { q: "あした", correct: "Besok", wrong: "Kemarin" },
        { q: "きのう", correct: "Kemarin", wrong: "Lusa" },
        { q: "いま", correct: "Sekarang", wrong: "Nanti" },
        { q: "じかん", correct: "Waktu", wrong: "Tempat" },
        { q: "とけい", correct: "Jam", wrong: "Kalender" },
        { q: "はる", correct: "Musim Semi", wrong: "Musim Panas" },
        { q: "なつ", correct: "Musim Panas", wrong: "Musim Dingin" },
        { q: "あき", correct: "Musim Gugur", wrong: "Musim Semi" },
        { q: "ふゆ", correct: "Musim Dingin", wrong: "Musim Panas" },
        { q: "あめ", correct: "Hujan", wrong: "Cerah" },
        { q: "ゆき", correct: "Salju", wrong: "Angin" },
        { q: "そら", correct: "Langit", wrong: "Bumi" },
        { q: "うみ", correct: "Laut", wrong: "Gunung" },
        { q: "やま", correct: "Gunung", wrong: "Sungai" },
        { q: "かわ", correct: "Sungai", wrong: "Danau" },
        { q: "はな", correct: "Bunga", wrong: "Pohon" },
        { q: "め", correct: "Mata", wrong: "Hidung" },
        { q: "みみ", correct: "Telinga", wrong: "Mata" },
        { q: "くち", correct: "Mulut", wrong: "Telinga" },
        { q: "て", correct: "Tangan", wrong: "Kaki" },
        { q: "あし", correct: "Kaki", wrong: "Tangan" },
        { q: "あたま", correct: "Kepala", wrong: "Perut" },
        { q: "からだ", correct: "Tubuh", wrong: "Rambut" },
        { q: "あか", correct: "Merah", wrong: "Biru" },
        { q: "あお", correct: "Biru", wrong: "Hijau" },
        { q: "くろ", correct: "Hitam", wrong: "Putih" },
        { q: "しろ", correct: "Putih", wrong: "Hitam" },
        { q: "みどり", correct: "Hijau", wrong: "Kuning" },
        { q: "きいろ", correct: "Kuning", wrong: "Merah" },
        { q: "ちゃいろ", correct: "Cokelat", wrong: "Biru" },
        { q: "ねこ", correct: "Kucing", wrong: "Anjing" },
        { q: "いぬ", correct: "Anjing", wrong: "Kucing" },
        { q: "とり", correct: "Burung", wrong: "Ikan" },
        { q: "さかな", correct: "Ikan", wrong: "Burung" },
        { q: "むし", correct: "Serangga", wrong: "Tanaman" }
    ],
    katakana_sent: [
        { q: "デザイン", correct: "Desain", wrong: "Tulisan" },
        { q: "システム", correct: "Sistem", wrong: "Mesin" },
        { q: "ユーザー", correct: "Pengguna (User)", wrong: "Pembuat" },
        { q: "ダッシュボード", correct: "Dashboard", wrong: "Keyboard" },
        { q: "アプリ", correct: "Aplikasi", wrong: "Internet" },
        { q: "ネット", correct: "Internet / Jaringan", wrong: "Listrik" },
        { q: "パソコン", correct: "PC / Laptop", wrong: "Ponsel" },
        { q: "スマホ", correct: "Smartphone", wrong: "Tablet" },
        { q: "コード", correct: "Kode", wrong: "Pesan" },
        { q: "ボタン", correct: "Tombol", wrong: "Layar" },
        { q: "アイコン", correct: "Ikon", wrong: "Teks" },
        { q: "メッセージ", correct: "Pesan", wrong: "Panggilan" },
        { q: "データ", correct: "Data", wrong: "Warna" },
        { q: "ファイル", correct: "File / Berkas", wrong: "Buku" },
        { q: "プロジェクト", correct: "Proyek", wrong: "Tugas Biasa" },
        { q: "ログイン", correct: "Login", wrong: "Logout" },
        { q: "パスワード", correct: "Kata Sandi", wrong: "Nama Pengguna" },
        { q: "リンク", correct: "Tautan", wrong: "Gambar" },
        { q: "オンライン", correct: "Online", wrong: "Offline" },
        { q: "オフライン", correct: "Offline", wrong: "Online" },
        { q: "クリプト", correct: "Kripto / Crypto", wrong: "Uang Kertas" },
        { q: "コイン", correct: "Koin", wrong: "Kertas" },
        { q: "トレード", correct: "Trading", wrong: "Menabung" },
        { q: "ロス", correct: "Loss / Kerugian", wrong: "Keuntungan" },
        { q: "バランス", correct: "Saldo", wrong: "Hutang" },
        { q: "チャート", correct: "Grafik / Chart", wrong: "Tabel" },
        { q: "インベスト", correct: "Investasi", wrong: "Pengeluaran" },
        { q: "マーケット", correct: "Pasar", wrong: "Pabrik" },
        { q: "イーコマース", correct: "E-Commerce", wrong: "Toko Fisik" },
        { q: "ショッピング", correct: "Belanja", wrong: "Bekerja" },
        { q: "カート", correct: "Keranjang Belanja", wrong: "Kasir" },
        { q: "セール", correct: "Diskon / Sale", wrong: "Harga Normal" },
        { q: "クーポン", correct: "Kupon", wrong: "Struk" },
        { q: "ブランド", correct: "Merek / Brand", wrong: "Barang Bekas" },
        { q: "プレゼント", correct: "Hadiah", wrong: "Sanksi" },
        { q: "ストア", correct: "Toko", wrong: "Gudang" },
        { q: "クレジット", correct: "Kredit", wrong: "Tunai" },
        { q: "カード", correct: "Kartu", wrong: "Buku Buku" },
        { q: "キャッシュ", correct: "Uang Tunai", wrong: "Kartu" },
        { q: "ポルシェ", correct: "Porsche (Mobil)", wrong: "Motor" },
        { q: "ハンドル", correct: "Setir", wrong: "Rem" },
        { q: "タイヤ", correct: "Ban", wrong: "Kaca" },
        { q: "ドア", correct: "Pintu", wrong: "Atap" },
        { q: "エンジン", correct: "Mesin", wrong: "Bagasi" },
        { q: "シート", correct: "Tempat Duduk", wrong: "Jendela" },
        { q: "スピード", correct: "Kecepatan", wrong: "Lambat" },
        { q: "ドライブ", correct: "Menyetir", wrong: "Berjalan" },
        { q: "ガソリン", correct: "Bensin", wrong: "Air" },
        { q: "メーター", correct: "Meteran", wrong: "Kunci" },
        { q: "ラジオ", correct: "Radio", wrong: "Televisi" },
        { q: "カメラ", correct: "Kamera", wrong: "Lampu" },
        { q: "マイク", correct: "Mikrofon", wrong: "Speaker" },
        { q: "スピーカー", correct: "Speaker", wrong: "Layar" },
        { q: "ルーター", correct: "Router", wrong: "Kabel" },
        { q: "ネットワーク", correct: "Jaringan", wrong: "Listrik" },
        { q: "グループ", correct: "Grup / Kelompok", wrong: "Individu" },
        { q: "メンバー", correct: "Anggota", wrong: "Ketua" },
        { q: "リーダー", correct: "Pemimpin", wrong: "Anggota" },
        { q: "コーヒー", correct: "Kopi", wrong: "Teh" },
        { q: "タクシー", correct: "Taksi", wrong: "Bus" },
        { q: "ホテル", correct: "Hotel", wrong: "Rumah Sakit" },
        { q: "レストラン", correct: "Restoran", wrong: "Sekolah" },
        { q: "パン", correct: "Roti", wrong: "Nasi" },
        { q: "アイス", correct: "Es", wrong: "Api" },
        { q: "チョコ", correct: "Cokelat", wrong: "Permen" },
        { q: "ケーキ", correct: "Kue", wrong: "Biskuit" },
        { q: "ピザ", correct: "Pizza", wrong: "Salad" },
        { q: "パスタ", correct: "Pasta", wrong: "Sup" },
        { q: "サラダ", correct: "Salad", wrong: "Daging" },
        { q: "ビール", correct: "Bir", wrong: "Susu" },
        { q: "ワイン", correct: "Anggur (Wine)", wrong: "Jus" },
        { q: "ジュース", correct: "Jus", wrong: "Kopi" },
        { q: "スープ", correct: "Sup", wrong: "Roti" },
        { q: "クッキー", correct: "Kue Kering", wrong: "Es Krim" },
        { q: "チキン", correct: "Ayam Goreng", wrong: "Sapi" },
        { q: "メニュー", correct: "Menu", wrong: "Tagihan" },
        { q: "アニメ", correct: "Animasi / Anime", wrong: "Koran" },
        { q: "マンガ", correct: "Komik", wrong: "Novel" },
        { q: "テレビ", correct: "Televisi", wrong: "Radio" },
        { q: "ニュース", correct: "Berita", wrong: "Iklan" },
        { q: "ノート", correct: "Buku Catatan", wrong: "Kertas Lipat" },
        { q: "シャツ", correct: "Kemeja", wrong: "Celana" },
        { q: "スーパー", correct: "Supermarket", wrong: "Pasar Tradisional" },
        { q: "パスポート", correct: "Paspor", wrong: "KTP" },
        { q: "エアコン", correct: "AC", wrong: "Kipas Angin" },
        { q: "ベッド", correct: "Kasur", wrong: "Meja" },
        { q: "トイレ", correct: "Toilet", wrong: "Dapur" },
        { q: "バイク", correct: "Sepeda Motor", wrong: "Sepeda" },
        { q: "バス", correct: "Bus", wrong: "Kereta" },
        { q: "トラック", correct: "Truk", wrong: "Mobil Sedan" },
        { q: "ドレス", correct: "Gaun", wrong: "Kaos" },
        { q: "ペン", correct: "Pena", wrong: "Pensil" },
        { q: "カレンダー", correct: "Kalender", wrong: "Jam Dinding" },
        { q: "テスト", correct: "Ujian / Tes", wrong: "Latihan" },
        { q: "レポート", correct: "Laporan", wrong: "Surat" },
        { q: "イベント", correct: "Acara", wrong: "Rapat" },
        { q: "パーティー", correct: "Pesta", wrong: "Sekolah" },
        { q: "スポーツ", correct: "Olahraga", wrong: "Seni" },
        { q: "テニス", correct: "Tenis", wrong: "Sepak Bola" },
        { q: "サッカー", correct: "Sepak Bola", wrong: "Berenang" }
    ]
};

// GLOBAL STATES
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];

function switchView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

function goHome() {
    switchView('home-view');
}

// FUNGSI SUARA (TEXT TO SPEECH)
function playJapaneseSound(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Hentikan suara sebelumnya jika masih berjalan
        
        let utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85; // Sedikit dinaikkan dari 0.8 agar artikulasi tidak terlalu terseret

        // AMBIL SEMUA SUARA YANG TERSEDIA DI BROWSER
        let voices = window.speechSynthesis.getVoices();
        
        // Cari suara Jepang terbaik (Prioritas: Google Japanese, lalu suara lokal, lalu apa saja yang ja-JP)
        let selectedVoice = voices.find(voice => voice.lang === 'ja-JP' && voice.name.includes('Google')) 
                         || voices.find(voice => voice.lang === 'ja-JP' && voice.localService === true)
                         || voices.find(voice => voice.lang === 'ja-JP');

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        window.speechSynthesis.speak(utterance);
    }
}

// Supaya daftar suara ter-load dengan sempurna saat aplikasi pertama kali dibuka (Solusi bug Google Chrome)
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
}

// LOGIKA KUIS
function startQuiz(category) {
    let allQuestions = questionBank[category];
    let shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    
    // Set 35 untuk huruf, 20 untuk kalimat
    let questionLimit = 35;
    if (category === 'hiragana_sent' || category === 'katakana_sent') {
        questionLimit = 20; 
    }
    
    currentQuestions = shuffled.slice(0, questionLimit); 
    currentIndex = 0;
    score = 0;
    userAnswers = [];
    
    switchView('quiz-view');
    renderQuestion();
}

function renderQuestion() {
    const qData = currentQuestions[currentIndex];
    
    let progressPercent = (currentIndex / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;

    document.getElementById('question-counter').innerText = `Soal ${currentIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('question-text').innerText = qData.q;
    
    const opt0 = document.getElementById('opt0');
    const opt1 = document.getElementById('opt1');
    const feedbackBox = document.getElementById('feedback-box');
    const nextBtn = document.getElementById('next-btn');
    
    opt0.className = "option-btn";
    opt1.className = "option-btn";
    opt0.disabled = false;
    opt1.disabled = false;
    
    feedbackBox.classList.add('hidden');
    feedbackBox.className = "feedback-box hidden";
    nextBtn.classList.add('hidden');

    let options = [qData.correct, qData.wrong].sort(() => 0.5 - Math.random());
    
    opt0.innerText = options[0];
    opt1.innerText = options[1];
    
    opt0.dataset.isCorrect = (options[0] === qData.correct);
    opt1.dataset.isCorrect = (options[1] === qData.correct);
}

function selectOption(selectedIndex) {
    const selectedBtn = document.getElementById(`opt${selectedIndex}`);
    const otherBtn = document.getElementById(`opt${selectedIndex === 0 ? 1 : 0}`);
    const isCorrect = selectedBtn.dataset.isCorrect === 'true';
    const qData = currentQuestions[currentIndex];
    
    // Bunyikan Suara Saat Opsi Dipilih
    playJapaneseSound(qData.q);

    document.getElementById('opt0').disabled = true;
    document.getElementById('opt1').disabled = true;

    userAnswers.push({
        question: qData.q, userAnswer: selectedBtn.innerText, correctAnswer: qData.correct, isCorrect: isCorrect
    });

    const feedbackBox = document.getElementById('feedback-box');
    const feedbackText = document.getElementById('feedback-text');

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        feedbackText.innerText = "✨ Benar Sekali! Jawabanmu Tepat.";
        feedbackBox.className = "feedback-box alert-success";
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        if (otherBtn.dataset.isCorrect === 'true') otherBtn.classList.add('correct');
        feedbackText.innerText = `❌ Salah! Jawaban yang benar adalah: ${qData.correct}`;
        feedbackBox.className = "feedback-box alert-danger";
    }

    feedbackBox.classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        renderQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    switchView('result-view');
    document.getElementById('review-container').classList.add('hidden');
    
    let finalScore = Math.round((score / currentQuestions.length) * 100);
    document.getElementById('final-score').innerText = finalScore;
    
    const msg = document.getElementById('score-message');
    if (finalScore >= 80) msg.innerText = "Hebat banget! Terus pertahankan! 🌸";
    else if (finalScore >= 50) msg.innerText = "Bagus! Coba review lagi biar makin jago! 🔥";
    else msg.innerText = "Jangan menyerah, yuk coba latih lagi pelan-pelan! 💪";
}

function showReview() {
    const container = document.getElementById('review-container');
    const list = document.getElementById('review-list');
    container.classList.remove('hidden');
    list.innerHTML = ""; 

    userAnswers.forEach((ans, index) => {
        let li = document.createElement('li');
        if (ans.isCorrect) {
            li.className = 'rev-item-success';
            li.innerHTML = `<strong>Soal ${index+1}: ${ans.question}</strong><br>Jawaban Kamu: <span style="color:var(--correct-blue); font-weight:700">${ans.userAnswer}</span> (Benar)`;
        } else {
            li.className = 'rev-item-danger';
            li.innerHTML = `<strong>Soal ${index+1}: ${ans.question}</strong><br>Jawaban Kamu: <del style="color:var(--wrong-red)">${ans.userAnswer}</del><br>Harusnya: <span style="color:var(--correct-blue); font-weight:700">${ans.correctAnswer}</span>`;
        }
        list.appendChild(li);
    });
    container.scrollIntoView({ behavior: 'smooth' });
}

// LOGIKA KAMUS (6 TAB INTERAKTIF)
function openDictionary() {
    switchView('dictionary-view');
    renderDictionary('hiragana_basic'); // Default Tab
}

function renderDictionary(type) {
    // 1. Atur Warna Tombol Tab Aktif
    document.querySelectorAll('.dict-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('tab-' + type).classList.add('active');

    const grid = document.getElementById('dict-grid');
    grid.innerHTML = ''; 
    
    // 2. Cek apakah ini mode kalimat (Sentences)
    const isSentence = type.includes('sent');
    if (isSentence) {
        grid.classList.add('sent-mode'); // Ubah layout grid jadi memanjang
    } else {
        grid.classList.remove('sent-mode'); // Layout grid kotak-kotak kecil
    }
    
    const data = questionBank[type];
    
    // 3. Render Item ke Layar
    data.forEach(item => {
        const btn = document.createElement('button');
        
        if (isSentence) {
            // Desain Untuk Kalimat
            btn.className = 'dict-sent-btn';
            btn.onclick = () => playJapaneseSound(item.q);
            btn.innerHTML = `
                <span class="dict-sent-text">${item.q}</span>
                <span class="dict-sent-meaning">${item.correct}</span>
            `;
        } else {
            // Desain Untuk Huruf
            btn.className = 'dict-char-btn';
            btn.onclick = () => playLangSound(item.q); // Gunakan fungsi bunyi
            btn.onclick = () => playJapaneseSound(item.q);
            btn.innerHTML = `
                <span class="dict-char">${item.q}</span>
                <span class="dict-romaji">${item.correct}</span>
            `;
        }
        
        grid.appendChild(btn);
    });
}