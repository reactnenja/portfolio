import {
    AiOutlineComment,
    AiTwotoneDislike,
    AiTwotoneLike,
} from "react-icons/ai";
import { PiShareFatFill } from "react-icons/pi";

const Share = () => {
    return (
        <div className="card__share">
            <button>
                <AiTwotoneLike />
            </button>
            <button>
                <AiTwotoneDislike />
            </button>
            <button>
                <AiOutlineComment />
            </button>
            <button>
                <PiShareFatFill />
            </button>
        </div>
    );
};

export default Share;
