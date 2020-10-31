import React, { useEffect, useState } from "react";
import "./FourSuite.css";
import { populateFourSuitCards } from "../../../logic/four-suite";
import CardHolder from "../../CardHolder";
import Card from "../../Card";
function FourSuite() {
  const [cards, setcards] = useState({});
  const [game, setgame] = useState({
    cards: [],
    decks: [],
    selectedCard: "",
    selectedDeck: "",
    selected: [],
    hands: 0,
    x: -1,
    y: -1,
    highlightedDeck: "",
    highlightedCard: "",
    dealtCards: [],
  });
  useEffect(() => {
    const val = populateFourSuitCards();
    setcards(val);
    setgame((prevState) => ({
      ...prevState,
      cards: val.cards,
      decks: val.decks,
    }));
  }, []);

  return (
    <div className="foursuite">
      {cards.hasOwnProperty("decks") &&
        game.decks.slice(0, 10).map((deck, index) => (
          <React.Fragment>
            {deck.length == 0 ? (
              <div
                id="holder"
                key={index + "0"}
                // onClick={() => {
                //   selectCard("", deck, true, game, setgame);
                // }}
                // onDragEnter={(e) => {
                //   dragEnter(e, game, setgame, "", deck);
                // }}
              >
                <CardHolder key={index + " 1"} deck={deck} />
              </div>
            ) : (
              <div>
                <div key={index + " 2"} deck={deck}>
                  {deck.map((card, key) => (
                    <div
                      id={card.rank + " " + card.suit + " " + card.deck}
                      className="card__wrapper card__stack"
                      draggable={true}
                      // onDragStart={(e) => {
                      //   dragStart(e, card, deck, game, setgame);
                      // }}
                      // onDrag={(e) => {
                      //   drag(e, card, game, setgame);
                      // }}
                      // onDragEnter={(e) => {
                      //   if (card.isDown == false) {
                      //     dragEnter(e, game, setgame, card, deck);
                      //   }
                      // }}
                      // onDragEnd={(e) => {
                      //   drop(e, card, game, setgame);
                      // }}
                    >
                      <Card
                        key={card.rank + " " + card.suit + " " + card.deck}
                        card={card}
                        isSelected={card.isSelected}
                        isDown={card.isDown}
                        isHighlighted={card.isHighlighted}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      {cards.hasOwnProperty("decks") && game.decks[10].length > 0 && (
        <div
          // onClick={(e) => {
          //   distributeRemCards(game, setgame);
          // }}
          className="card card__down card__remcards"
        ></div>
      )}
    </div>
  );
}

export default FourSuite;