import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./eventDetail.module.css";

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
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.product_title}>{product.title}</div>
                        <div className={styles.product_content}>{product.content}</div>
                        <div className={styles.product_author}>{product.author}</div>
                        <div className={styles.product_date}>{product.date}</div>
                        <div className={styles.product_views}>{product.views}</div>
                        <div className={styles.product_detailImg}>
                            <img src={product.detailImg} alt="detail" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetail;
