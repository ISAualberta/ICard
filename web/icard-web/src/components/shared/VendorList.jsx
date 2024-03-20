import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native-web";
import VendorCard from "./VendorCard";

const Item = ({ itemData }) => (
  <VendorCard
    vendorName={itemData.name}
    location={itemData.address}
    discount={itemData.discount}
    vendorImage={itemData.image}
    description={itemData.description}
    contact={itemData.phone_number}
  />
);

const VendorList = ({ searchPhrase, data }) => {
  const renderItem = ({ item }) => {
    if (searchPhrase === "") {
      return <Item itemData={item} />;
    }

    if (
      item.name
        .toLowerCase()
        .includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }

    if (
      item.address
        .toLowerCase()
        .includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }

    if (
      item.description
        .toLowerCase()
        .includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }

    if (
      item.phone_number
        .toLowerCase()
        .includes(searchPhrase.toLowerCase().trim())
    ) {
      return <Item itemData={item} />;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        // showsVerticalScrollIndicator={true}
        data={data}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    alignItems: "start",
    justifyContent: "center",
    height: Dimensions.get('window').height-300,
    // width: Dimensions.get('window').width,
    // height: '100%',
    // width: "60%",
    marginBottom: '150px'
  },
  contentContainer: {
    // overflowX: 'scroll',
    // overflowY: 'scroll',
    // width: "10%",
    // backgroundColor: 'red'
    justifyContent: "left",
    // alignItems: "center",
  },
});

export default VendorList;
