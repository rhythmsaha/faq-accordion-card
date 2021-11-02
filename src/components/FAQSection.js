import classes from "./FAQSection.module.css";
import Data from "../Data";
import AccordionRow from "./AccordionRow";

const FAQSection = () => {
    return (
        <div className={classes.FAQ}>
            <h1>FAQ</h1>
            <div className={classes.AccordionGroup}>
                {Data.map((questions, index) => (
                    <>
                        <AccordionRow
                            key={index}
                            q={questions.q}
                            a={questions.a}
                        />
                        <hr />
                    </>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
