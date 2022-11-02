import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EventDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("/eventData.json").then((data) => {
            setProduct(data.data.products.find((product) => product.id === parseInt(id)));
        });
    }, [id]);
    return (
        <>
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.bran}</div>
            <div>{product.author}</div>
            <div>{product.date}</div>
            <div>{product.views}</div>
            <img src={product.detailImg} alt="detail image" />
        </>
    );
};

export default EventDetail;
