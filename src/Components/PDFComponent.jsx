import React from 'react';
import { Document, Page, Image, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    border: '20 double #ffb300',
  },
  title: {
    fontSize: '40',
    marginBottom: 20,
  },
  margin: {
    marginBottom: 10,
  },
  section: {
    margin: 20,
    padding: 20,
    flexGrow: 1,
    textAlign: 'center',
  },
  imageSection: {
    height: 300,
    width: 300,
    alignSelf: 'center'
  },
});

function returnSrc() {
  const path = "https://www.caniprof.com/wp-content/uploads/2018/09/Chihuahua.jpg";
  const selectedMethod = 'GET';
  return { uri: path, method: selectedMethod, body: '', headers: '' };
}

// Create Document Component
const PDFComponent = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{props.animal_name} recherche un vol !</Text>
        <Image style={styles.imageSection} src={returnSrc()} />
        <Text style={styles.margin}>Ville de départ : {props.departure_city}</Text>
        <Text style={styles.margin}>Ville d'arrivée : {props.arrival_city}</Text>
        <Text style={styles.margin}>C'est gratuit et l'association s'occupe de tout! </Text>
        <Text style={styles.margin}>Contacter l'association {props.user_name} :</Text>
        <Text style={styles.margin}>Email : {props.email}</Text>
      </View>
      {/* <View style={styles.section}>
        <Text>{props.animal_name}</Text>
      </View> */}
      {/* <Image
          source={
            {
              uri: `https://fr.wikipedia.org/wiki/Image_de_test_standard#/media/Fichier:SIPI_Jelly_Beans_4.1.07.tiff`, method: {}, headers: { "Access-Control-Allow-Origin": "*", crossOrigin: "anonymous", Pragma: 'no-cache', 'Cache-Control': 'no-cache' }, body: ''
            }
          }
        /> */}
    </Page>
  </Document>
);

export default PDFComponent;


