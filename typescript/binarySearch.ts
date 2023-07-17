interface Karyawan {
    id: number;
    nama: string;
  }

function binarySearch(data: Karyawan[], targetId: number): Karyawan | null {
    let low = 0;
    let high = data.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const karyawan = data[mid];
  
      if (karyawan.id === targetId) {
        return karyawan;
      } else if (karyawan.id < targetId) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return null;
  }

const dataKaryawan = [
    { id: 101, nama: "Rani" },
    { id: 203, nama: "Andy" },
    { id: 305, nama: "Budi" },
    { id: 410, nama: "Cindy" },
    { id: 520, nama: "Dodi" },
    { id: 635, nama: "Eka" },
    { id: 742, nama: "Fany" }
]
const targetId = 305;

const karyawan = binarySearch(dataKaryawan, targetId);

console.log(karyawan); //{ id: 305, nama: 'Budi' }