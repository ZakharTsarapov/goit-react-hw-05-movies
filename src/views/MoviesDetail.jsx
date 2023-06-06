import { useParams } from "react-router";

const MoviesDetail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const movieID = useParams();

}

export default MoviesDetail;