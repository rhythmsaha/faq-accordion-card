import { useState } from "react";
import Classes from "./AccordionRow.module.css";

const AccordionRow = ({ q, a }) => {
    const [toggled, setToggled] = useState(false);

    const toggleHandler = () => {
        setToggled((state) => !state);
    };

    return (
        <div className={`${Classes.Row}`}>
            <div onClick={toggleHandler} className={Classes.Qus}>
                <div>{q}</div>
                <span className={toggled && Classes.Active}>
                    <svg
                        width="10"
                        height="7"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 .799l4 4 4-4"
                            stroke="#F47B56"
                            stroke-width="2"
                            fill="none"
                            fill-rule="evenodd"
                        />
                    </svg>
                </span>
            </div>
            <div className={`${toggled && Classes.ToggledAns} ${Classes.Ans}`}>
                {a}
            </div>
        </div>
    );
};

export default AccordionRow;
