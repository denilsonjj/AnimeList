import React from "react";
import { useState, useEffect } from "react";
import { Card,
CardContent,
CardMedia, 
Typography, 
CardActionArea, 
CircularProgress,
Button} from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import style from "../style/Animes.module.css"

const api = "https://kitsu.io/api/edge"

const Animes = () => {
    const [animes, setAnimes] = useState([])
    const [filter, setFilter]= useState([])
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        if (text) {
            fetch(`${api}/anime?page[limit]=8&page[offset]=0&filter[text]=${text}`)
                .then(res => res.json())
                .then(res => {
                    setFilter(res.data)
                    setLoading(false)
                })
        } else{
            fetch(`${api}/anime?page[limit]=12&page[offset]=0`)
            .then(res => res.json())
            .then(res => {
                setAnimes(res.data)
                setLoading(false)
            });
        }
           
    }, [animes, text])
    return (
        <div className={style.content}>
         <h1 className={style.title}>Animes</h1>
           <div className={style.search}>
           <input type="search" className={style.search} value={text} onChange=
           {e => setText(e.target.value)} placeholder="Busque seu anime" />
           </div>
             <div className={style.animes}>
                { text ? filter.map(anime => (
                    <div id={anime.id} style={{ textAlign: "center", margin: '0 auto'}}>
                        <Card sx={{ width: 300, height: 260 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={anime.attributes.posterImage.small}
                                    alt="imagem de anime"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {anime.attributes.canonicalTitle}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <StarIcon sx={{ color: 'yellow' }} /> {anime.attributes.averageRating}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Button style={{margin: '5px'}} variant="outlined" color="primary">
                          <Link style={{textDecoration:'none'}} to={`/Detalhe/${anime.id}`}>
                          <span style={{color: 'yellow'}}>Detalhe</span> 
                        </Link> 
                     </Button>
                    </div>))
                     :
                animes.map(anime => (
                    <div key={anime.id} style={{ textAlign: "center", margin: '0 auto' }}>
                        <Card sx={{ maxWidth: 300,minWidth: 300, height: 260 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={anime.attributes.posterImage.small}
                                    alt="imagem de anime"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {anime.attributes.canonicalTitle}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <StarIcon sx={{ color: 'yellow' }} /> {anime.attributes.averageRating}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                      
                        </Card>
                     <Button style={{margin: '5px'}} variant="outlined" color="primary">
                          <Link style={{textDecoration:'none'}} to={`/Detalhe/${anime.id}`}>
                          <span style={{color: 'yellow'}}>Detalhe</span> 
                        </Link> 
                     </Button>
                      
                    </div>
                ))}
  
                {loading && <div style={{ textAlign: "center" }}>
                    <CircularProgress sx={{ width: '200px' }} disableShrink /></div>}
            </div>
        </div>
    )
}
export default Animes;