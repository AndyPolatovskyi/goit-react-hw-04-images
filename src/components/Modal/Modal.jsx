import { createPortal } from "react-dom";
// import { Component } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

export default function Modal({ onToggle, img, tag }) {

    useEffect(() => {
      const handleKeyDown = event => {
        if (event.code === 'Escape') {
          onToggle();
        }
      };
        window.addEventListener('keydown', handleKeyDown);
        body.classList.add('hidden-scroll');
  
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          body.classList.remove('hidden-scroll');
        };
      }, [onToggle]);

    

      const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onToggle();
    }
  };

  
    return createPortal(
      <div className={css.overlay} onClick={handleBackdropClick}>
        <div className={css.modal}>
          <img src={img} alt={tag} />
        </div>
      </div>,
      modalRoot
    );
  

}

// export default class Modal extends Component {
//   componentDidMount = () => {
//     window.addEventListener('keydown', this.handleKeyDown);
//     body.classList.add('hidden-scroll');
//   };

//   componentWillUnmount = () => {
//     window.removeEventListener('keydown', this.handleKeyDown);
//     body.classList.remove('hidden-scroll');
//   };

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onToggle();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onToggle();
//     }
//   };

//   render() {
//     const { img, tag } = this.props;
//     return createPortal(
//       <div className={css.overlay} onClick={this.handleBackdropClick}>
//         <div className={css.modal}>
//           <img src={img} alt={tag} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

Modal.propTypes = {
  tag: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};