import React, { Component } from 'react';
import axios from 'axios';
import EditSpells from './showItemDetails/EditSpells';
const baseURL = process.env.REACT_APP_BASEURL

export default class ShowItemDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentItem: '',
      loaded: false,
      itemType: '',
      view: true,
      edit: false,
      editItem: false,
      editSpell: false
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
  reload = () => {
    let item = ''
    let itemType = ''
    switch (this.props.item.itemType) {
      case 'Spell':
        item = this.loadItems(this.props.item, 'spells')
        this.setState({
          spellDescription: `${item.level} - ${item.school}\nCasting Time: ${item.casting_time}\nDuration: ${item.duration}\nRange: ${item.range}\nComponents: ${item.components}\nConcentration: ${item.concentration}\nRitual: ${item.ritual} \n\n${item.description}`
        })
        itemType = 'spells'
        break;
      case 'Item':
        item = this.loadItems(this.props.item, 'items')
        itemType = 'items'
        break;
      case 'Note':
        item = this.loadItems(this.props.item, 'notes')
        itemType = 'notes'
        break;
      case 'Ability':
        item = this.loadItems(this.props.item, 'feats')
        itemType = 'feats'
        break;
      default:
        item = this.props.item
        break;
    }
    this.setState({
      currentItem: item,
      loaded: true,
      itemType: itemType,
      description: item.description
    })
  }
  componentDidMount() {
    this.reload()
  }
  editItem = (event) => {
    event.preventDefault()
    let editing = 'editItem'
    if (this.state.itemType === 'spells') {
      editing = 'editSpell'
    }
    this.setState({
      view: false,
      edit: true,
      [editing]: true
    })

  }
  deleteItem = async (event) => {
    event.preventDefault();
    const response = await axios({
      method: 'delete',
      url: `${baseURL}api/${this.state.itemType}/${event.target.name.toString()}`,
      headers: {
        Authorization: this.props.JWT,
      },
      data: {
        player: this.props.player.id
      }
    })
    if (response.data.message === 'Deleted') {
      this.props.updatePlayer(this.props.player)

    } else {
      console.log('ERROR: Delete failed')
    }
  }
  componentWillUnmount() {
    this.setState({
      loaded: false,
      currentItem: '',
      view: true,
      spellDescription: ''
    })
  }
  updatePlayer = (updatedItem) => {
    this.setState({
      currentItem: updatedItem,
      edit: false,
      editSpell: false
    })
    this.props.updatePlayer(this.props.player)
  }
  editDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }
  saveEdit = () => {
    axios({
      method: 'put',
      url: `${baseURL}api/${this.state.itemType}/${this.state.currentItem.id}`,
      headers: {
        Authorization: this.props.JWT
      },
      data: {
        item: this.state.item,
        newDescription: this.state.description
      }
    })
      .then((response) => {
        this.setState({
          currentItem: response.data.item,
          edit: false,
          editItem: false
        })
        this.props.updatePlayer(this.props.player)
      })
      .catch(function (e) {
        console.log(e)
      })
  }
  cancelEdit = () => {
    this.setState({
      edit: false,
      view: true,
      editItem: false,
      editSpell: false
    })
    this.reload()
  }
  render() {
    return (
      <>
        {this.state.loaded && <div className='itemModal'>
          {this.state.view && <>
            <button className='deleteItem' name={this.state.currentItem.id} onClick={this.deleteItem}>
              DELETE
          </button>
            <button className='editItem' name={this.state.currentItem.id} onClick={this.editItem} >
              EDIT
          </button>
          </>}
          {this.state.edit && <>
            <button className='deleteItem' name={this.state.currentItem.id} onClick={this.cancelEdit}>
              CANCEL
          </button>
            {this.state.editSpell || <button className='editItem' name={this.state.currentItem.id} onClick={this.saveEdit} >
              SAVE
          </button>}
          </>}

          <p className='itemHeader'>
            {this.state.currentItem.name}
          </p>
          <hr className='itemHr' />
          <div className='itemModalInner'>
            {this.state.view && <p className='itemDescription'>
            {this.state.itemType !== 'spells' && <>
              {this.state.currentItem.description}
              </>}
              {this.state.itemType === 'spells' && <>
              {this.state.spellDescription}
              </>}
            </p>}
            {this.state.editItem && <textarea className='editDescription' rows={8} name='description' onChange={this.editDescription} value={this.state.description} />
            }
            {this.state.editSpell && <EditSpells JWT={this.props.JWT} spell={this.state.currentItem} player={this.props.player} updatePlayer={this.updatePlayer} />
            }
          </div>
        </div>}

        <div className='im-top' onClick={this.closeModal} />
        <div className='im-right' onClick={this.closeModal} />
        <div className='im-bottom' onClick={this.closeModal} />
        <div className='im-left' onClick={this.closeModal} />

      </>
    )
  }
}