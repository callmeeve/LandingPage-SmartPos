import mysql from 'mysql';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Ambil data pendaftaran dari body request
    const { email, password, confirmPassword, notelepon } = req.body;

    // Buat koneksi MySQL
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Kueri untuk memeriksa apakah email sudah terdaftar di database
    const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';

    // Kueri untuk menambahkan pengguna baru ke database
    const registerQuery = 'INSERT INTO users (email, password, notelepon) VALUES (?, ?, ?)';

    // Periksa apakah email sudah terdaftar
    connection.query(checkEmailQuery, [email], function (error, results) {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        if (results.length > 0) {
          // Jika email sudah terdaftar, kirimkan respons email sudah digunakan
          res.status(409).json({ message: 'Email already exists' });
        } else {
          // Jika email belum terdaftar, periksa kesesuaian password dan konfirmasi password
          if (password !== confirmPassword) {
            res.status(400).json({ message: 'Password and Confirm Password do not match' });
            return;
          }

          // Tambahkan pengguna baru ke database
          connection.query(registerQuery, [email, password, notelepon], function (error, results) {
            if (error) {
              console.error(error);
              res.status(500).json({ message: 'Internal server error' });
            } else {
              // Registrasi berhasil, kirimkan respons berhasil
              res.status(201).json({ message: 'Registration successful' });
            }
          });
        }
      }

      // Tutup koneksi MySQL setelah selesai
      connection.end();
    });
  } else {
    // Jika method bukan POST, kirimkan respons metode tidak diizinkan
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
