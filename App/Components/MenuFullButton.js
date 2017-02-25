// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/MenuFullButtonStyle'
import { Colors, Metrics } from '../Themes'

export default class FullButton extends React.Component {
  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={() => { this.props.onClickedItem(this.props.item) }}>
        <Text style={styles.buttonText}>
          {this.props.text && this.props.text.toUpperCase()}
        </Text>
        {this.props.price ? <Text style={styles.priceText}> {this.props.price} </Text>
          : <Text style={styles.chevronRight}> <Icon name='angle-right' size={Metrics.icons.small} color={Colors.barambeGrey} /> </Text>}
      </TouchableOpacity>
    )
  }
}