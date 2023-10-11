// import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
// import { requestServer } from 'pixabayAPI.js';
// import { toast } from 'react-toastify';

// import { Button } from 'components/Button/Button';
// import { Loader } from 'components/Loader/Loader';
import css from './ImageGallery.module.css';

export function ImageGallery({ images }) {
  
    return (
              <div className={css.container}>
                  <ul className={css.imageGallery}>
                    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                      <ImageGalleryItem
                        key={id}
                        img={webformatURL}
                        bigPhoto={largeImageURL}
                        tag={tags}
                      />
                    ))}
                  </ul>
                </div>
            );
  }

// export class ImageGallery extends Component {
//   state = {
//     photos: null,
//     isLoading: false,
//     handleButton: false,
//     page: 1,
//     total: 0,
//     totalHits: 0,
//   };

//   componentDidUpdate = (prevProps, prevState) => {
//     const { page, total, totalHits } = this.state;

//     if (prevProps.value !== this.props.value) {
//       this.setState({ isLoading: true });
//       requestServer(this.props.value, 1).then(({ hits, totalHits }) => {
//         if (totalHits === 0) {
//           toast.warning('No photos found!');
//           this.setState(prev => ({
//             photos: [...hits],
//             isLoading: false,
//             handleButton: false,
//           }));
//           return;
//         }

//         this.setState(prev => ({
//           photos: [...hits],
//           total: hits.length,
//           totalHits: totalHits,
//           page: 1,
//           isLoading: false,
//           handleButton: true,
//         }));
//       });
//       console.log(this.state);
//       return;
//     }

//     if (prevState.page !== page && page !== 1) {
//       this.setState({
//         isLoading: true,
//         handleButton: false,
//       });
//       requestServer(this.props.value, page).then(({ hits, totalHits }) => {
//         this.setState(prev => ({
//           photos: [...prev.photos, ...hits],
//           total: prev.total + hits.length,
//         }));
//       });
//     }

//     if (prevState.total !== total) {
//       if (totalHits <= total) {
//         this.setState({
//           isLoading: false,
//           handleButton: false,
//         });
//         toast.info('Last page!');
//       } else {
//         this.setState({
//           isLoading: false,
//           handleButton: true,
//         });
//       }
//     }
//   };

//   loadingNextPhotos = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { handleButton, photos, isLoading } = this.state;
//     return (
//       <div className={css.container}>
//         {photos && (
//           <ul className={css.imageGallery}>
//             {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
//               <ImageGalleryItem
//                 key={id}
//                 img={webformatURL}
//                 bigPhoto={largeImageURL}
//                 tag={tags}
//               />
//             ))}
//           </ul>
//         )}
//         {isLoading && <Loader />}
//         {handleButton && <Button onClick={this.loadingNextPhotos} />}
//       </div>
//     );
//   }
// }

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};