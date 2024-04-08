import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Like = () => {
  const [like, setLike] = useState(false);
  return (
    <div>
      {like ? (
        <FaHeart
          className="my-5"
          size="3rem"
          color="red"
          onClick={() => setLike(!like)}
        />
      ) : (
        <FaRegHeart
          className="my-5"
          size="3rem"
          color="red"
          onClick={() => setLike(!like)}
        />
      )}
    </div>
  );
};

export default Like;
