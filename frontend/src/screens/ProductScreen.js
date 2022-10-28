import React, { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Rating from "../components/Rating";
import Review from "../components/Review";
import data from "../data";
import "../style/productScreen.css";

export default function ProductScreen(props) {
  const params = useParams();
  const product = data.products.find((X) => X._id === params.id);

  const [reviewShow, setReviewShow] = useState(false);

  const handleReviewWrite = () => {
    setReviewShow(true);
  }

  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div>
      <Header />
      <div className="inner">
        <Link to="/api/compare" className="back">
          상품 페이지로 돌아가기
        </Link>
        <div className="row top">
          <div className="col-1">
            <img
              className="large product-img"
              src={product.image}
              alt={product.name}
            ></img>
          </div>
          <div className="col-2">
            <ul>
              <li>
                <h1 className="product-name">{product.name}</h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>

              </li>
              <li className="review-show-area">
                {product.review.map((el) => {
                  return (
                    <Review rating={el.rating} content={el.content} />
                  )
                })}
              </li>
              <li><div className="review-write-button" onClick={handleReviewWrite}>리뷰 쓰기</div></li>
              {reviewShow && (
                <li className="review-write-area">
                  <div>
                    <span>별점과 리뷰를 남겨 주세요!</span>
                  </div>
                  <div>
                    <span>별점&nbsp;&nbsp;</span>
                    <span>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </span>
                  </div>
                  <div className="input-part">
                    <span>리뷰 내용 작성</span>
                    <input type='text' className="review-input" />
                    <div>
                    </div>
                  </div>

                </li>)
              }
              <hr />
              <li className="font">판매 가격 : {product.price}원</li>
              <li className="font">상세 설명 : {product.description}</li>
              <hr />
            </ul>
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div className="add-span">
                      <span>나만의 음료로 등록하고 싶으신가요?</span>
                    </div>
                    <div className="my-button">나만의 음료로 등록</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
