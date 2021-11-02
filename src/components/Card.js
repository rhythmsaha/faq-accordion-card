import classes from "./Card.module.css";
import FAQSection from "./FAQSection";
import ImageBox from "./ImageBox";

const Card = () => {
    return (
        <div className={classes.Card}>
            <div className={classes.Content}>
                <ImageBox />
                <FAQSection />
            </div>
        </div>
    );
};

export default Card;
