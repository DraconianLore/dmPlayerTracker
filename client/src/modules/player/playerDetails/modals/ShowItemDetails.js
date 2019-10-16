import React, { Component } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL


export default class ShowItemDetails extends Component {
  // TODO make it look better, add delete/edit buttons, split spells, abilities, notes and items if needed
  // maybe restructure database to make new tables for each item type

  constructor(props) {
    super(props)
    this.state = {
      currentItem: '',
      loaded: false
    }
  }
  fetchItems = (itemType) => {
    let list = this.props.player[itemType].map((item) => {
      return item
    })
    return list
  }
  closeModal = () => {
    this.props.closeItemDetails()
  }
  loadItems = (currentItem, itemType) => {
    const items = this.fetchItems(itemType)
    items.forEach(item => {
      if (item.name === currentItem.name) {
        currentItem = item
        currentItem.itemType = itemType
      }
    });
    return currentItem
  }

  componentDidMount() {
    let item = ''
    switch (this.props.item.itemType) {
      case 'Spell':
        item = this.loadItems(this.props.item, 'spells')
        break;
      case 'Item':
        item = this.loadItems(this.props.item, 'items')
        break;
      case 'Note':
        item = this.loadItems(this.props.item, 'notes')
        break;
      case 'Ability':
        item = this.loadItems(this.props.item, 'feats')
        console.log(item.search)
        break;
      default:
        item = this.props.item
        break;
    }
    this.setState({
      currentItem: item,
      loaded: true
    })
  }
  deleteAbility = async (event) => {
    event.preventDefault();
    const response = await axios({
      method: 'delete',
      url: `${baseURL}api/feats/${event.target.name.toString()}`,
      headers: {
        Authorization: this.props.JWT,
      },
      data: {
        player: this.props.player.id
      }
    })
    if(response.data.message === 'Deleted') {
      this.props.updatePlayer(this.props.player)
      
    } else {
      console.log('ERROR: Delete failed')
    }
  }
  componentWillUnmount() {
    this.setState({ loaded: false })
  }
  render() {
    return (
      <>
        {this.state.loaded && <div className='itemModal'>
          {this.props.item.itemType === 'Ability' && 
          <button className='deletePlayer' name={this.state.currentItem.id} onClick={this.deleteAbility}>
            DELETE
          </button>
        }
          <p className='itemHeader'>
            {this.state.currentItem.name}
          </p>
          <hr className='itemHr' />
          <p className='itemDescription'>
            {this.state.currentItem.description}
          </p>
        </div>}

        <div className='im-top' onClick={this.closeModal} />
        <div className='im-right' onClick={this.closeModal} />
        <div className='im-bottom' onClick={this.closeModal} />
        <div className='im-left' onClick={this.closeModal} />

      </>
    )
  }
}