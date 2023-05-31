import mysql from 'mysql';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Ambil data login dari body request
    const { email, password } = req.body;

    // Buat koneksi MySQL
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Kueri untuk memeriksa apakah user dengan email dan password yang diberikan ada di database
    const query = `
      SELECT * FROM users
      WHERE email = ? AND password = ?
    `;

    // Eksekusi kueri dengan menggunakan email dan password yang diberikan
    connection.query(query, [email, password], function (error, results) {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        if (results.length > 0) {
          // Jika user ditemukan, kirimkan respons berhasil
          res.status(200).json({ message: 'Login successful' });
        } else {
          // Jika user tidak ditemukan, kirimkan respons gagal
          res.status(401).json({ message: 'Invalid credentials' });
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
