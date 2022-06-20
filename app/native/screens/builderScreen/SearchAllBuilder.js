import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import filter from 'lodash.filter';
import AllBuilders from './AllBuilders';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: props.data,
      error: null,
      searchValue: '',
    };
    this.arrayholder = props.data;
  }

  searchFunction = text => {
    const updatedData = this.arrayholder.filter(item => {
      const item_data = `${item.name.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({data: updatedData, searchValue: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <SearchBar
            placeholder="Search Builder or project"
            lightTheme
            value={this.state.searchValue}
            onChangeText={text => this.searchFunction(text)}
            autoCorrect={false}
            inputContainerStyle={styles.searchBarView}
            containerStyle={styles.contStyle}
          />
        </View>
        <AllBuilders data={this.state.data} />
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
  },
  item: {
    backgroundColor: '#f5f520',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  searchBarView: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 10,
  },
  contStyle: {
    backgroundColor: 'inherit',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 20,
  },
});
