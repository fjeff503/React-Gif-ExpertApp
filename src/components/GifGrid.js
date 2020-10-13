import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGifs(category);//data:images para renombrar

    // useEffect(() => {//sirve para que se ejecute una sola vez la sentencia 
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))//solo cuando el componente se renderiza por primera vez
    // }, [category]);//si la category cambia se vuelve a ejecutar esto



    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>
            {/* si es true lo ejecuta si no no hace nada */}
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='cardGrid'>
                {
                    images.map(img =>
                        <GifGridItem
                            //img = {img} podemos enviar todo 
                            key={img.id}//enviamos uno a uno
                            {...img}
                        />
                    )}
            </div>
        </>
    )
}
