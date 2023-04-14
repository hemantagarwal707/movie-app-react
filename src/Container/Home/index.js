import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardMoviesComponents from '../../Components/CardMovies';
const HomeContainer = ()=>{
    const [content, setContent] = useState([]);
    const [pageno, setPageno] = useState(1)
    const [paginationno, setPaginationno] = useState(0)
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

    const GetDataTrending = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
        setContent(data.results);
        setPaginationno(data.total_pages);
        console.log('data',data);

    }


    useEffect(()=>{
       
        GetDataTrending();
        //eslint-disable-next-line
    }, [])

    return (
        <main className='homePage'>
        <Container>
            <Row>
                <Col className='col-12'>
                <section>
                <h1 className='txtCenter'>Top Trending </h1>
                <h3 className='txtCenter'>Tv and Movie For You</h3>
            </section>
                </Col>
                {
                    content && content.length > 0 ? content.map((item)=>{
                        return (<CardMoviesComponents key={item.id} data={item} mediaType="tv"/>)
                    }) : 'Loading ....'
                }

          
                
            </Row>
        </Container>
    </main>
    )
}

export default HomeContainer;