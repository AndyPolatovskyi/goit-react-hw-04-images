// import { Component } from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ img, bigPhoto, tag }) {
    const [showModal, setShowModal] = useState(false);
  
    const toggleModal = () => {
      setShowModal(prevState => !prevState)
    };
  
    return (
      <>
        <li className={css.galleryItem} onClick={toggleModal}>
            <img className={css.imageGalleryItemImage} src={img} alt={tag} />
        </li>
              {showModal && (
                <Modal tag={tag} img={bigPhoto} onToggle={toggleModal} />
              )}
      </>
    );
  }



// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { img, bigPhoto, tag } = this.props;
//     return (
//       <>
//         <li className={css.galleryItem} onClick={this.toggleModal}>
//           <img className={css.imageGalleryItemImage} src={img} alt={tag} />
//         </li>
//         {this.state.showModal && (
//           <Modal tag={tag} img={bigPhoto} onToggle={this.toggleModal} />
//         )}
//       </>
//     );
//   }
// }

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  bigPhoto: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};