import p1 from '../assets/pic1.png';
import p2 from '../assets/pic2.png';
import p3 from '../assets/pic3.png';
import p4 from '../assets/pic4.png';
import p5 from '../assets/pic5.png';
import p6 from '../assets/pic6.png';
import p7 from '../assets/pic7.png';
import p8 from '../assets/pic8.png';
// import p9 from '../assets/pic9.png';
// import p10 from '../assets/pic10.png';
// import p11 from '../assets/pic11.png';
// import p12 from '../assets/pic12.png';
// import p13 from '../assets/pic13.png';
// import p14 from '../assets/pic14.png';
// import p15 from '../assets/pic15.png';
// import p16 from '../assets/pic16.png';
// import p17 from '../assets/pic17.png';
import './List.css'


export default function List({ cards }) {


    if (cards.length === 0) {
        return <div className="error"> No cards to show...</div>
    }
    
    const list = [p1, p2, p3, p4, p5, p6, p7, p8];

    const len = list.length;

    return (
        <div className="card-list">
            {cards.map((card, index)=> (
                <div key={index} className='card'>
                    <img src={list[index%len]} alt = "dummy" />
                    <h3>{card.asset_title}</h3>
                    <p>File Type: {card.file_type}</p>
                    <p>Date: {card.date}</p>
                    {/* <div>
                        {card.method.substring(0, 100)}...
                    </div>
                    <Link to={`/cards/${card.id}`}>Cook This</Link> */}
                </div>
            ))}
        </div>
    )
}
