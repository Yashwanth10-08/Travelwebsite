import "./Destination.css";

import Mountain1 from "../Assets/1.jpg";
import Mountain2 from "../Assets/2.jpg";
import Mountain3 from "../Assets/8.jpg";
import Mountain4 from "../Assets/4.jpg";
import Destinationdata from "./Destinationdata";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination</h1>
      <p>Tours give you the oppurtunity to see a lot,within a time frame.</p>
      <br />
      <Destinationdata
        className="first-des"
        heading="Taal Valcano, Batangas"
        text="Self-driving in gridlocked Manila can be brutal. Skip the trauma on this door-to-door tour of Taal Volcano, one of the Philippines' favorite volcanoes, in a group no larger than 10. Ride a jeepney up to People’s Park in the Sky, an unfinished palace, tour the Aguinaldo Shrine, brave a zipline, and see a record-breaking collection of jigsaw puzzles—all without so much as thinking about parking."
        img1={Mountain1}
        img2={Mountain2}
      />

      <Destinationdata
        className="first-des-reverse"
        heading="Mt.Daguldul, Batangas"
        text="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
