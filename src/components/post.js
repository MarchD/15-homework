import React from "react";
import ARROW from "../assets/img/arrow.svg";
import ARROW_C from "../assets/img/arrow-c.svg";
import CHAT from "../assets/img/chat.svg";
import CHECK from "../assets/img/check.svg";
import DOWN from "../assets/img/down.svg";
import HEART from "../assets/img/heart.svg";


const Post = (props) => {

    return (
        <div className="post">

            <div className="post__info-general">
                <div className="post__info">
                    <img src={props.photo} alt="" className="avatar"/>
                    <div className="post__details">
                        <div className="post__name">{props.name}</div>
                        <div className="post__check">
                            <img className="post__check-logo" src={CHECK} alt=""/>
                        </div>
                        <div className="post__nick">@elonmusk</div>
                        <div className="post__date">4 sep</div>
                    </div>
                </div>

                <div className="arrow">
                    <img src={ARROW} alt="" className="arrow__img"/>
                </div>
            </div>

            <div className="content">
                <div className="content__text">🇩🇪🖤Giga Berlin Mannschaft🖤🇩🇪
                    Vielen Dank für Ihre hervorragende Arbeit an Giga Berlin!!
                </div>
                <div className="content__img">
                    <img src={props.image} alt="" className="post__img"/>
                </div>
            </div>

            <div className="post__feedback">
                <div className="feedback">
                    <img src={CHAT} alt="" className="feedback__img"/>
                        <span>1,6k</span>
                </div>
                <div className="feedback">
                    <img src={ARROW_C} alt="" className="feedback__img"/>
                        <span>3,8k</span>
                </div>
                <div className="feedback">
                    <img src={HEART} alt="" className="feedback__img"/>
                        <span>60.1k</span>
                </div>
                <div className="feedback">
                    <img src={DOWN} alt="" className="feedback__img"/>

                </div>
            </div>

        </div>
    )
}

export default Post;