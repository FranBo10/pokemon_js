import React, { useState } from "react";
import Modal from "./Modal";
import pokeball from "../images/pokeball.png";
import "./PokemonCard.css";

function PokemonCard({
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  const [isShown, setIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div class="relative flex justify-end mr-2">
      {isShown && (
        <div class="flex flex-col w-1/2 right-[45%] top-[13%] rounded-xl fixed shadow-lg shadow-tertiary xs-12">
          <div className="image-container">
            <img src={image} alt={name} />
            <div className="base-container">
              <div className="stats-left">
                <p>Type:</p>
                <p>Height:</p>
                <p>Weight:</p>
                {statsName.map((stats) => (
                  <p className="stats">{stats}</p>
                ))}
              </div>
              <div className="stats-right">
                <p>{type}</p>
                <p>{height}0 cm</p>
                <p>{weight} lbs</p>
                {stats.map((stats) => (
                  <p className="stats">{stats}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        class="flex items-center h-20 text-3xl mx-0 my-2 py-0 px-5 relative border-2 border-primary rounded-full bg-gradient-to-r from-primary to-white  hover:bg-white shadow-xl hover:shadow-tertiary/30"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={modalHandler}
      >
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "100%", marginRight: "10px", width: "50px" }}
        />
        <p class="w-44 text-xl"># {id} </p>
        <p class="mr-2 text-xl">{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "30px" }}
        />
      </div>

      {modalIsOpen && (
        <Modal
          id={id}
          name={name}
          image={image}
          height={height}
          weight={weight}
          stats={stats}
          statsName={statsName}
          type={type}
          onClick={closeModalHandler}
        />
      )}
    </div>
  );
}

export default PokemonCard;
// "flex items-center h-20 text-3xl mx-0 my-2 py-0 px-5 relative border-2 border-primary rounded-full xl:flex"
