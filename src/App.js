import './App.css';

//COmponents
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from './components/Navbar';


//Images
// import travel1 from './assets/travel1.jpeg';
// import travel2 from './assets/travel2.jpeg';
// import kefalonia from './assets/kefalonia.jpeg';
// import milos from './assets/milos.jpeg';
// import corfu from './assets/corfu.jpeg';
// import skopelos from './assets/skopelos.jpeg';
// import rhodes from './assets/rhodes.jpeg';
// import serifos from './assets/serifos.jpeg';

import world from './assets2/world.jpeg';
import ethiopian from './assets2/ethiopian.jpeg';
import italian from './assets2/italian.jpeg';
import mexican from './assets2/mexican.jpeg';
import thai from './assets2/thai.jpeg';
import chinese from './assets2/chinese.jpeg';




const navbarLinks = [
  {title:"Home", url: "#"},
  {title:"World cuisines", url: "#"},
  {title:"Recipies", url: "#"},
  {title:"Contact", url: "#"},
  {title:"About", url: "#"}
]


function App() {
  return (
    <div className="App">

      <Navbar navbarLinks={navbarLinks}/>

<Hero imageSrc={world}/>

{/* <Slider 
imageSrc={corfu}
title={"Corfu"}
subtitle={"Where nature meets culture in perfect harmony. Experience azure waters, charming villages, and rich heritage on this captivating Greek island getaway."} />

<Slider 
imageSrc={rhodes}
title={"Rhodes"}
subtitle={"Where history and beauty unite. Explore ancient wonders, bask in stunning beaches, and immerse yourself in vibrant culture on this unforgettable island paradise"}
flipped={true} />

<Slider 
imageSrc={serifos}
title={"Serifos"}
subtitle={"Escape to Greece's unspoiled paradise. With pristine beaches, whitewashed beauty, and authentic charm, Serifos promises an idyllic retreat where tranquility and wonder embrace."} />

<Slider 
imageSrc={kefalonia}
title={"Kefalonia"}
subtitle={"Unveil the magic of Greece's largest Ionian gem. Spectacular beaches, untamed landscapes, and warm hospitality beckon you to experience the enchantment of Kefalonia."}
flipped={true} /> */}



<Slider 
imageSrc={thai}
title={"Thai"}
subtitle={"An electrifying symphony of flavors and textures! "}
description={"Dive into the vibrant world of Thai food, where fiery spices dance with sweet coconut milk, and fragrant herbs infuse every bite. From the zesty kick of green papaya salad to the comforting embrace of rich Massaman curry, Thai cuisine is an exhilarating journey for your taste buds that you'll want to experience again and again."}
 /> 

<Slider 
imageSrc={italian}
title={"Italian"}
subtitle={"A passionate love affair with food!"} 
description={"Indulge in the timeless elegance of creamy risottos, melt-in-your-mouth pasta dishes, and the pure joy of wood-fired pizzas. With every bite, you'll savor the rich, sun-kissed flavors of vine-ripened tomatoes, fragrant basil, and luscious olive oil. Italian cuisine is a culinary romance that will transport your senses straight to the heart of Italy, leaving you craving for more."}
flipped={true} /> 

<Slider 
imageSrc={chinese}
title={"Chinese"}
subtitle={"A thrilling culinary adventure!"}
description={" Explore a world of diverse flavors, from the bold spiciness of Sichuan dishes to the delicate balance of sweet and savory in Cantonese cuisine. Each bite is an explosion of tastes and textures, from tender dumplings to crispy Peking duck. Chinese food is an epicurean journey that takes your taste buds on a thrilling ride through centuries of tradition and innovation, leaving you craving the endless possibilities it offers."}
/> 

<Slider 
imageSrc={ethiopian}
title={"Ethiopian"}
subtitle={"A tantalizing exploration of taste and culture!"}
description={"Delve into the rich tapestry of flavors, where fragrant spices mingle with slow-cooked stews and spongy injera bread. From the fiery kick of berbere spice to the aromatic notes of cardamom and cloves, every bite tells a story of tradition and warmth. Ethiopian food invites you to share communal meals, forging connections as you scoop up vibrant dishes with your hands. It's a culinary journey that ignites your senses and leaves you with a deep appreciation for the culture and flavors of Ethiopia."}
flipped={true} /> 

<Slider 
imageSrc={mexican}
title={"Mexican"}
subtitle={"A fiesta of flavors that ignites your taste buds!"}
description={"Dive into a world of vibrant salsas, smoky chilies, and savory tacos that tantalize your senses. From the creamy richness of guacamole to the sizzle of fajitas on a hot grill, every bite is a celebration of bold and spicy ingredients. Mexican food is a thrilling culinary adventure that transports you to the heart of Mexico, where every meal feels like a lively fiesta, and every dish is a delicious masterpiece waiting to be savored."}
/> 



    </div>
  );
}

export default App;
