import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
const HomeContainer = ()=>{
    const [content, setContent] = useState([]);
    const [pageno, setPageno] = useState(1)
    const [paginationno, setPaginationno] = useState(0)
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

    const GetDataTrending = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
        setContent(data);
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
                    home page continer
                </Col>
     
                
            </Row>
        </Container>
    </main>
    )
}

export default HomeContainer;