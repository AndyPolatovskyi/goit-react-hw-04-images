// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { requestServer } from 'pixabayAPI.js';
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [value, setValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [handleButton, setHandleButton] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (value === '') {
      return;
    }
    setIsLoading(true);
    setHandleButton(false);

    requestServer(value, page).then(({ hits, totalHits }) => {
      if (page === 1) {
        if (totalHits === 0) {
          toast.warning('No photos found!');
          setPhotos([...hits]);
          setIsLoading(false);
          setHandleButton(false);

          return;
        }
        setPhotos([...hits]);

        if (hits.length === totalHits) {
          setIsLoading(false);
          setHandleButton(false);
          toast.info('Last page!');
        } else {
          addTotalValue(totalHits);
          setIsLoading(false);
          setHandleButton(true);
        }
        return;
      }
      if (page !== 1) {
        setPhotos(state => [...state, ...hits]);

        if (total === page) {
          toast.info('Last page!');
          setIsLoading(false);
          setHandleButton(false);
        } else {
          setIsLoading(false);
          setHandleButton(true);
        }
      }
    });
  }, [value, page, total]);

  function addTotalValue(value) {
    const result = Math.round(value / 12);
    setTotal(result);
    return;
  }

  const handleFormSubmit = event => {
    const value = event.trim();
    if (value !== '') {
      setValue(event);
      setPage(1);
    }
  };
  const loadingNextPhotos = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className={css.container}>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={photos} />
      {handleButton && <Button onClick={loadingNextPhotos} />}
      {isLoading && <Loader />}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

// export class App extends Component {
//   state = {
//     value: '',
//   };

//   handleFormSubmite = value => {
//     this.setState({ value });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div className={css.container}>
//         <Searchbar onSubmit={this.handleFormSubmite} />
//         <ImageGallery value={value} />
//         <ToastContainer position="top-center" autoClose={3000} />
//       </div>
//     );
//   }
// }
