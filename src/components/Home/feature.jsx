import vin from "../../assets/image/variety.png";
import ver from "../../assets/image/theverge.png";
import bill from "../../assets/image/billboard.png";
import wir from "../../assets/image/wired.png";
import com from "../../assets/image/complex.png";

const Feature = () => {
  return (
    <div>
      <p className="text-center text-shade text-base text-dark f-w-600 ">
        {" "}
        FEATURED IN
      </p>
      <div className="container px-20">
        <div className="row w-85 mx-auto mt-10">
          <div className="col ">
            {" "}
            <img alt="holder" src={vin} />
          </div>
          <div className="col">
            <img alt="holder" src={ver} />
          </div>
          <div className="col">
            {" "}
            <img alt="holder" src={bill} />
          </div>
          <div className="col">
            {" "}
            <img alt="holder" src={wir} />
          </div>
          <div className="col">
            <img alt="holder" src={com} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
