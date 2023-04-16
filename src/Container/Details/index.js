
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './details.css';
import axios from 'axios';
import {img_300, img_not_available} from '../../Config';
const DetailsContainer = ()=>{
    const params = useParams();
    const [content, setContent] = useState();
    const [video, setVideo] = useState();
    const [credits, setCredits] = useState();


    const id = params.movieid || '';
    const _media_type = params && params.mediatype &&  params.mediatype !== '' ? params.mediatype.toLowerCase() : '';
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;


    
    const fetchData = async () =>{
        try{
          const {data} = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}?api_key=${API_KEY}&language=en-US`);
          setContent(data);
          //console.log('fetchData details',  data);
        }catch(error){
          console.error(error)
        }
    }
    const fetchVideo = async () =>{
        try{
          const {data} = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`);
          setVideo(data.results[0]?.key);
          //console.log('fetchVideo',  data);
        }catch(error){
          console.error(error)
        }
    }
    const creditsFetch = async ()=>{
        try{
          const {data} = await axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`);
          setCredits(data.cast);
          console.log('sdata',  data);
        }catch(error){
          console.error(error)
        }
    }
    useEffect(()=>{
        fetchData();
        fetchVideo();
        creditsFetch();
        
    }, [])

    return (
        <>
            <h1>Details page</h1>
        </>
    )
}

export default DetailsContainer;