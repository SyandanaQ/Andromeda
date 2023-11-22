import { Inter } from 'next/font/google'


// export default function Home() {
//   return (
//     <div>
//       <div>Hai all</div>
//     </div>
//   )
// }
import React from 'react';
import StudentTable from '../layout/StudentTable';

const students = [
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
  { nama: 'Rizki', NIM: '001', Prodi: 'Informatika' },
  { nama: 'Deri', NIM: '002', Prodi: 'Informatika' },
  { nama: 'Dana', NIM: '003', Prodi: 'Informatika' },
  { nama: 'Sevyra', NIM: '004', Prodi: 'Informatika' },
];

const Home = () => {
  return (
    <div>
      <StudentTable students={students} />
    </div>
  );
};

export default Home;
