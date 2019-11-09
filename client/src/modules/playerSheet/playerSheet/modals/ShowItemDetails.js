import React, { Component } from 'react';

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
  
  componentWillUnmount() {
    this.setState({
      loaded: false,
      currentItem: '',
      view: true,
      spellDescription: ''
    })
  }
  
  render() {
    return (
      <>
        {this.state.loaded && <div className='pItemModal'>

          <p className='pItemHeader'>
            {this.state.currentItem.name}
          </p>
          <hr className='itemHr' />
          <div className='itemModalInner'>
            {this.state.view && <p className='pItemDescription'>
            {this.state.itemType !== 'spells' && <>
              {this.state.currentItem.description}
              </>}
              {this.state.itemType === 'spells' && <>
              {this.state.spellDescription}
              </>}
            </p>}
              <br className='mobileFix' />
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