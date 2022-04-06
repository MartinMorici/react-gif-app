import { logRoles } from '@testing-library/react';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
  
    const {data:images, loading} = useFetchGifs(category);

    {/* 1. Luego de obtener todos los datos que queremos de los gifs, los guardamos en images, con el useState (setImages)
    2. Ahora debemos renderizar lo guardado en imágenes en la pantalla. 
    para eso recorremos con un map (que hace un return por cada elemento en imagenes).
    3. Dentro del map creamos un componente que retorna un div con la imagen y el título. Para eso le pasamos al 
    componente dos props, la key, y los datos de la imagen como un spread (id, title, url). */}
                    
    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading</p> }

           <div className='card-grid'>


                {
                    images.map(img => (
                        <GifGridItem
                            key = {img.id}
                            {...img}
                        />
                    ))
                }

            </div>

        </>

  );
}
