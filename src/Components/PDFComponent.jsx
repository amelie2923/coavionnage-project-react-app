import React from 'react';
import { Document, Page, Image, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const PDFComponent = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{props.animal_name}</Text>
      </View>
      <View style={styles.section}>
        {/* <Image src={`http://127.0.0.1:8000/storage/pictures/${props.image}`} />
        {console.log(props.image)}
        {console.log(`http://127.0.0.1:8000/storage/pictures/${props.image}`)} */}
        {/* <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            crossorigin: "anonymous",
            uri: `http://127.0.0.1:8000/storage/pictures/${props.image}`,
            headers: { Pragma: 'no-cache', 'Cache-Control': 'no-cache', 'Access-Control-Allow-Origin': '*' },
          }}
        /> */}
        <Image
          src={`http://127.0.0.1:8000/storage/pictures/${props.image}` + '?noCache=' + Math.random().toString()}
          source={{
            header: {
              'Access-Control-Allow-Origin': '*'
            }
          }}
        />
      </View>
    </Page>
  </Document>
);

export default PDFComponent;


