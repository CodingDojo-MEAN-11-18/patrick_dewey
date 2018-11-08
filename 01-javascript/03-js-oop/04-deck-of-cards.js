class Card {
    constructor(){
        this.deck = [];
    }

    resetDeck() {
        this.deck = []
        const suits = [`Clubs`,`Hearts`,`Diamonds`,`Spades`];
        const cards = [`Ace`,2,3,4,5,6,7,8,9,10,`Jack`,`Queen`,`King`];

        for (const suit of suits){
            for (const card of cards){
                this.deck.push(`${card} of ${suit}`);
            }
        }
        return this;
    }

    shuffleDeck(){
        let m = this.deck.length, t, i;
        
        // While there remain elements to shuffle…
        while (m) {
        
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
        
            // And swap it with the current element.
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }

    deal() {
        return this.deck.pop();
        
    }

}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    getCard(deck){
        this.hand.push(deck.deal())
        return this;
    };
    discardCard(){
        this.hand.pop();
        return this;
    }

}

const deck1 = new Card();
deck1.resetDeck().shuffleDeck()
console.log(deck1)
deck1.deal()
console.log(deck1.deal())

const player = new Player("Patrick")
player.getCard(deck1).getCard(deck1).getCard(deck1)
console.log(player)