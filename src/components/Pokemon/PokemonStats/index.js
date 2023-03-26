import { Tab, TabView } from "@rneui/themed";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

const PokemonStats = ({ pokemon }) => {
  const { stats, height, weight, species } = pokemon;
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.content}>
      <Tab
        value={index}
        onChange={setIndex}
        dense
        containerStyle={{ paddingBottom: 10, backgroundColor: "#00f3d" }}
        indicatorStyle={{
          backgroundColor: "#979fd1",
          height: 2,
        }}
      >
        <Tab.Item
          title="About"
          titleStyle={{ fontSize: 14, color: "#AEAEAE" }}
        />
        <Tab.Item
          title="Base Stats"
          titleStyle={{ fontSize: 14, color: "#AEAEAE" }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ width: "100%", marginTop: 15 }}>
          <View style={styles.colum}>
            <View style={styles.row}>
              <View style={styles.blockTitle}>
                <Text style={styles.statName}>Height</Text>
              </View>
              <Text>{height}</Text>
            </View>

            <View style={styles.row}>
              <View style={styles.blockTitle}>
                <Text style={styles.statName}>Weight</Text>
              </View>
              <Text>{weight}</Text>
            </View>

            <View style={styles.colum}>
              <View style={styles.row}>
                <View style={styles.blockTitle}>
                  <Text style={styles.statName}>Species</Text>
                </View>
                <Text>{species?.name}</Text>
              </View>
            </View>
          </View>
        </TabView.Item>

        <TabView.Item style={{ width: "100%" }}>
          <View>
            {stats?.map((item, index) => (
              <View key={index} style={styles.block}>
                <View style={styles.blockTitle}>
                  <Text
                    style={styles.statName}
                  >{`${item.stat.name[0].toUpperCase()}${item.stat.name.substring(
                    1
                  )}`}</Text>
                </View>
                <Text>{item.base_stat}</Text>
              </View>
            ))}
          </View>
        </TabView.Item>
      </TabView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    width: '100%',
    flexDirection: "row",
    paddingVertical: 5,
    paddingLeft: 20,
  },
  colum: {
    flexDirection: "colum",
  },
  row: {
    flexDirection: "row",
    paddingBottom: 10
  },  
  blockTitle: {
    width: "40%",
  },
  statName: {
    fontSize: 14,
    color: "#AEAEAE",
  },
});

export default PokemonStats;
