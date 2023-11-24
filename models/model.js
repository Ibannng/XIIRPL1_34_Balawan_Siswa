const mongoose = require("mongoose");

const siswaSchema = new mongoose.Schema({
  NIS: {
    type: String,
    required: [true, "Silahkan isikan Nomor Induk Siswa"],
    unique: true,
  },
  namaSiswa: {
    type: String,
    required: [true, "Silahkan isikan nama siswa"],
  },
  kelas: {
    type: String,
    required: [true, "Silahkan isikan kelas siswa"],
  },
  tanggalLahir: {
    type: String,
    required: [true, "Silahkan isikan tanggal lahir siswa"],
  },
  alamat: {
    type: String,
    required: [true, "Silahkan isikan alamat siswa"],
  },
});

module.exports = mongoose.model("siswa", siswaSchema);
