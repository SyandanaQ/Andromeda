import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Modal from 'react-modal';

const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then(module => module.PDFDownloadLink), {
  ssr: false,
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  table: {
    display: 'flex',
    width: 'auto',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    width: '25%',
    padding: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});

const StudentTable = ({ students }) => {
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  const openPreview = () => setPreviewOpen(true);
  const closePreview = () => setPreviewOpen(false);

  return (
    <div>
      <h1>Daftar Mahasiswa</h1>
      <button onClick={openPreview}>Eksport PDF</button>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIM</th>
            <th>Prodi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.NIM}>
              <td>{student.nama}</td>
              <td>{student.NIM}</td>
              <td>{student.Prodi}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isPreviewOpen} onRequestClose={closePreview} contentLabel="Preview PDF">
        <PDFViewer style={{ height: '100%', width: '100%' }}>
          <PDFDocument students={students} />
        </PDFViewer>
        <br />
        <PDFDownloadLink document={<PDFDocument students={students} />} fileName="daftar_mahasiswa.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Generating PDF...' : 'Download PDF')}
        </PDFDownloadLink>
        <button onClick={closePreview}>Close Preview</button>
      </Modal>
    </div>
  );
};

const PDFDocument = ({ students }) => {
  const itemsPerPage = 23;

  const chunkedStudents = [];
  for (let i = 0; i < students.length; i += itemsPerPage) {
    chunkedStudents.push(students.slice(i, i + itemsPerPage));
  }

  return (
    <Document>
      {chunkedStudents.map((chunk, pageIndex) => (
        <Page key={pageIndex} style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.title}>KOP MARSTECH (KANTOR PUSAT)</Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Nama</Text>
              <Text style={styles.tableCell}>NIM</Text>
              <Text style={styles.tableCell}>Prodi</Text>
            </View>
            {chunk.map((student, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{student.nama}</Text>
                <Text style={styles.tableCell}>{student.NIM}</Text>
                <Text style={styles.tableCell}>{student.Prodi}</Text>
              </View>
            ))}
          </View>
          {pageIndex === chunkedStudents.length - 1 && (
            <View style={styles.footer}>
              <Text style={styles.footerText}>Mengetahui,</Text>
            </View>
          )}
        </Page>
      ))}
    </Document>
  );
};

export default StudentTable;
