import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import style from "../style/Detalhe.module.css"

const api = "https://kitsu.io/api/edge/anime"

const Detalhe = () => {
  const { id } = useParams()

  const [anime, setAnime] = useState()

  useEffect(() => {
    fetch(`${api}?filter[id]=${id}`)
      .then(res => res.json())
      .then(res => {
        setAnime(res.data)
      })
  }, [id, anime])

  return (
    <>
      <Button style={{ marginBottom: '10px', margin: '0 auto' }} variant="outlined" color="primary">
        <Link style={{ textDecoration: 'none' }} to={`/Animes`}>
          <span style={{ color: 'yellow' }}>Voltar</span>
        </Link>
      </Button>
      <div className={style.container}>
        {anime && anime.map(anime => (
          <div key={anime.id} >
            <Card className={style.card} sx={{ maxWidth: 600, minWidth:350, height: 700
            
            }}>
              <CardActionArea>
                <CardMedia style={{ objectFit: 'cover' }}
                  component="img"
                  height="300"
                  image={anime.attributes.posterImage.large}
                  alt="imagem de anime"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {anime.attributes.canonicalTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <StarIcon sx={{ color: 'yellow' }} /> {anime.attributes.averageRating}
                  </Typography>
                  <Typography variant="body2">
                    {anime.attributes.synopsis}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}

      </div>
    </>
  )
}
export default Detalhe;
