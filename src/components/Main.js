import React from "react";
import "./Main.css";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

function Main() {
  return (
    <main>
      <section>
        <h1>This week Specials!</h1>
        <button>Online Menu</button>
      </section>
      <section>
        <cards>
          <img src="./Images/greek salad.jpg" alt="greek salad" />
          <dishname>
            <h3>Greek Salad</h3>
            <p>$12.95</p>
          </dishname>
          <description>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <section>
              <p>Online & delivery</p>
              <DeliveryDiningIcon />
            </section>
          </description>
        </cards>
        <cards>
          <img src="./Images/greek salad.jpg" alt="greek salad" />
          <dishname>
            <h3>Greek Salad</h3>
            <p>$12.95</p>
          </dishname>
          <description>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <section>
              <p>Online & delivery</p>
              <DeliveryDiningIcon />
            </section>
          </description>
        </cards>
        <cards>
          <img src="./Images/greek salad.jpg" alt="greek salad" />
          <dishname>
            <h3>Greek Salad</h3>
            <p>$12.95</p>
          </dishname>
          <description>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <section>
              <p>Online & delivery</p>
              <DeliveryDiningIcon />
            </section>
          </description>
        </cards>
      </section>
    </main>
  );
}

export default Main;
