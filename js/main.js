var myH1 = document.getElementById("myH1");
    myH1.innerText = "Enter your horoscope sign";

 var zodiacSign = [
 {
 	name: 'Aquarius',
 	date: 'Jan 20-Feb 18',
 	attributes: 'The mad scientist and humanitarian of the horoscope wheel, futuristic Aquarius energy helps us innovate and unite for social justice',
 	img : "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/05/aquarius_3Cfeature.jpg"
 },
 {
 	name: 'Pisces',
 	date: 'Feb 19-Mar 20',
 	attributes: 'The dreamer and healer of the horoscope family, Pisces energy awakens compassion, imagination and artistry, uniting us as one',
 	img: "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/05/pisces_3Cfeature.jpg"
 },
 {
 	name: 'Aries',
 	date: 'Mar 21-Apr 19',
 	attributes: "The pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate, fight for our beliefs and fearlessly put ourselves out there",
 	img: "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/aries_3Cfeature2.jpg"
 },
 {
 	name: 'Gemini',
 	date: 'May 21-Jun 20',
 	attributes: "The most versatile and vibrant horoscope sign, Gemini energy helps us communicate, collaborate and fly our freak flags at full mast",
 	img: "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/gemini_3Cfeature3.jpg"
 },
 {
 	name: 'Cancer',
 	date: 'Jun 21-Jul 22',
 	attributes: "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/gemini_3Cfeature3.jpg",
 	img: "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/07/cancer_3Cfeature24.jpg"
 },
 {
 	name: 'Leo',
 	date: 'Jul 23-August 22',
 	attributes: "The drama queen and regal ruler of the horoscope clan, Leo energy helps us shine, express ourselves boldly and wear our hearts on our sleeves",
 	img: "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/leo_3Cfeature2.jpg"
 },
 {
 	name: 'Virgo',
 	date: 'Aug 23-Sep 22',
 	attributes: "The masterful helper of the horoscope wheel, Virgo energy teaches us to serve, do impeccable work and prioritize wellbeing—of ourselves, our loved ones and the planet",
 	img: "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/virgo_3Cfeature2.jpg"
 },
 {
 	name: 'Libra',
 	date: 'Sep 23-Oct 22',
 	attributes: "The balanced beautifier of the horoscope family, Libra energy inspires us to seek peace, harmony and cooperation—and to do it with style and grace",
 	img: "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/05/libra_3Cfeature.jpg"
 },
 {
 	name: 'Scorpio',
 	date: 'Oct 23-Nov 21',
 	attributes: "The most intense and focused of the horoscope signs, Scorpio energy helps us dive deep, merge our superpowers and form bonds that are built to last",
 	img: "http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/05/scorpio_3Cfeature.jpg"
 },
 {
 	name: 'Sagittarius',
 	date: 'Nov 22-Dec 21',
 	attributes: "The worldly adventurer of the horoscope wheel, Sagittarius energy inspires us to dream big, chase the impossible and take fearless risks",
 	img: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/05/sagittarius_3Cfeature.jpg'
 },
 {
 	name: 'Capricorn',
 	date: 'Dec 22-Jan 19',
 	attributes: 'The measured master planner of the horoscope family, Capricorn energy teaches us the power of structure and long-term goals',
 	img: 'http://5io0615vq7k4e1k1l12k8b3r.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/capricorn_3Cfeature.jpg',
 }
 

 ];  

 var input = document.getElementById("sign");
 function getInfo() {
 	for (var i = 0; i < zodiacSign.length; i++) {
 		 
 			if(input.value == zodiacSign[i].name) {
 				document.getElementById("name").innerText = zodiacSign[i].name;
 				document.getElementById("date").innerText = zodiacSign[i].date;
 				document.getElementById("attributes").innerText = zodiacSign[i].attributes;
 				document.getElementById("pic").src = zodiacSign[i].img;
 			}
 		
 	}
 	
 }

