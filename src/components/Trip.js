import "./Trip.css";
import Tripdata from "./Tripdata";
import Trip1 from "../Assets/5.jpg";
import Trip2 from "../Assets/3(1).jpg";
import Trip3 from "../Assets/6.jpg";
function trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations.</p>
      <div className="tripcard">
        <Tripdata
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia,officially the Republic of Indonesia,is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.It consits of over 17,000 islands,including Sumatra,Java,Sulawesiand parts of Borneo and New Guinea.Both nature and culture are major components of Indonesian tourism.These natural attractions are complemented by a rich cultural heritage that reflects Indonesia's dynamic history and ethnic diversity."
        />
        <Tripdata
          image={Trip2}
          heading="Trip in France"
          text=" France remains the world's number one tourist destination, and by and large it remains one of the safer places in the world to visit.It has tourist sights for all tastes; it has some of the greatest beaches in Europe, as well as the highest mountains and the finest historic monuments, the most beautiful cities, the most idyllic countryside, the most magnificent castles, the finest rivers, and plenty more."
        />
        <Tripdata
          image={Trip3}
          heading="Trip in Malaysia"
          text="Malaysia in one of Asia’s most diverse destinations combining beaches, ecotourism, food and shopping. The most iconic Malaysia top tourist attractions include Kuala Lumpur’s Petronas Twin Towers, Penang’s bridge along with pagodas, temples, mosques, islands, mountains, caves and Borneo’s nature reserves. The savvy tourist experiences the cities and natural beauty to enhance their travel experience in Malaysia."
        />
      </div>
    </div>
  );
}
export default trip;
