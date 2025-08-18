import {ICard} from "@/lib";
import s from './Card.module.scss';
export const LightCard = (card: ICard) => {
    return(
        <div className={s.Card_light}>
            <h3 className={s.Card__H3_light}>{card.title}</h3>
            <span className={s.Card__Description_light}>{card.description}</span>
        </div>
    )
}