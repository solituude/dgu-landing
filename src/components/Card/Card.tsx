import {ICard} from "@/lib";
import s from './Card.module.scss';

export const Card = (card: ICard) => {
    return(
        <div className={s.Card}>
            <h3 className={s.Card__H3}>{card.title}</h3>
            <div className={s.Card__Description}>{card.description}</div>
        </div>
    )
}