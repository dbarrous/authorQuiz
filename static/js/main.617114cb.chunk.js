(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,o,a){e.exports=a(13)},,,,,,function(e,o,a){},function(e,o,a){},function(e,o,a){},function(e,o,a){"use strict";a.r(o);for(var t=a(0),n=a.n(t),r=a(3),i=a.n(r),u=a(1),l=(a(10),function(e){return n.a.createElement("div",{className:"quizItem",style:{background:e.color},onClick:function(){return e.checkAnswer(e.bool)}},n.a.createElement("h1",null,e.book))}),h=(a(11),function(e){var o=e.bookLibrary.map(function(o){return e.data.books.includes(o)}),a=n.a.useState("blue"),t=Object(u.a)(a,2),r=t[0],i=t[1],h=function(e){"blue"===r&&(e?s():g())},s=function(){e.setScore(e.score+1),i("green")},g=function(){e.lives>0?e.setLives(e.lives-1):(e.setLives(e.lives-1),e.setTimer(0)),i("red")},m=n.a.createElement("button",{onClick:function(){return e.nextRound(),i("blue"),""}},"Next");return n.a.createElement("div",{className:"quizBox",style:{background:r}},n.a.createElement("div",{className:"author"},n.a.createElement("h1",null,e.data.author),"green"===r?n.a.createElement("h1",null,"You are Correct!"):"red"===r?n.a.createElement("h1",null,"You are Wrong!"):null),"blue"===r&&n.a.createElement("div",{className:"quiz"},e.bookLibrary.map(function(e,a){return n.a.createElement(l,{book:e,bool:o[a],checkAnswer:h,key:a})})),"blue"!==r&&e.timer>0?m:null)}),s={0:{id:0,authorImg:"img/stephenking.png",author:"Stephen King",books:["It","The Dark Tower","Christine"]},1:{id:1,authorImg:"img/marktwain.png",author:"Mark Twain",books:["The Adventures of Tom Sawyer","Adventures of Huckleberry Finn","Life on the Mississippi"]},2:{id:2,authorImg:"img/fscottfitzgerald.png",author:"F. Scott Fitzgerald",books:["The Great Gatsby","Tender Is the Night","The Curious Case of Benjamin Button"]},3:{id:3,authorImg:"img/ernesthemingway.png",author:"Ernest Hemingway",books:["The Old Man and the Sea","A Farewell to Arms","For Whom The Bell Tolls"]},4:{id:4,authorImg:"img/williamfaulkner.png",author:"William Faulkner",books:["Absalom, Absalom!","A Rose for Emily","Barn Burning"]},5:{id:5,authorImg:"img/hermanmelville.png",author:"Herman Melville",books:["Moby-Dick","Benito Cereno","Bartleby, the Scrivener"]},6:{id:6,authorImg:"img/johnsteinback.png",author:"John Steinbeck",books:["Of Mice and Men","The Grapes of Wrath","East of Eden"]},7:{id:7,authorImg:"img/jdsalinger.png",author:"J. D. Salinger",books:["The Catcher in the Rye","Nine Stories","A Perfect Day for Bananafish"]},8:{id:8,authorImg:"img/edgarallanpoe.png",author:"Edgar Allan Poe",books:["The Raven","The Murders in the Rue Morgue","The Black Cat"]},9:{id:9,authorImg:"img/kurtvonnegut.png",author:"Kurt Vonnegut",books:["Slaughterhouse-Five","Cat's Cradle","Player Piano"]},10:{id:10,authorImg:"img/harperlee.png",author:"Harper Lee",books:["To Kill a Mockingbird","Go Set a Watchman","Snow! Snow! Snow!"]},11:{id:11,authorImg:"img/raybradbury.png",author:"Ray Bradbury",books:["Fahrenheit 451","The Martian Chronicles","Dandelion Wine"]},12:{id:12,authorImg:"img/jacklondon.png",author:"Jack London",books:["The Call of the Wild","White Fang","Martin Eden"]},13:{id:13,authorImg:"img/jackkeroac.png",author:"Jack Kerouac",books:["On the Road","The Dharma Bums","Big Sur"]},14:{id:14,authorImg:"img/trumancapote.png",author:"Truman Capote",books:["In Cold Blood","Breakfast at Tiffany's","Observations"]},15:{id:15,authorImg:"img/hplovecraft.png",author:"H.P. Lovecraft",books:["The Call of Cthulhu","At the Mountains of Madness","The Shadow over Innsmouth"]},16:{id:16,authorImg:"img/jamesfenmorecooper.png",author:"James Fenimore Cooper",books:["The Last of the Mohicans","The Deerslayer","The Pathfinder, or The Inland Sea"]},17:{id:17,authorImg:"img/theodoredreiser.png",author:"Theodore Dreiser",books:["An American Tragedy","The Financier","The Stoic"]},18:{id:18,authorImg:"img/huntersthompson.png",author:"Hunter S. Thompson",books:["Fear and loathing in Las Vegas","The Rum Diary","The Great Shark Hunt"]},19:{id:19,authorImg:"img/margaretmitchell.png",author:"Margaret Mitchell",books:["Gone with the Wind","Before Scarlett","Lost Laysen"]},20:{id:20,authorImg:"img/kenkesey.png",author:"Ken Kesey",books:["One Flew Over the Cuckoo's Nest","Sometimes a Great Notion","Last Go Round"]},21:{id:21,authorImg:"img/ebwhite.png",author:"E.B. White",books:["Charlotte's Web","The Trumpet of the Swan","One Man's Meat"]},22:{id:22,authorImg:"img/mayaangelou",author:"Maya Angelou",books:["I Know Why the Caged Bird Sings","And Still I Rise","Letter to My Daughter"]},23:{id:23,authorImg:"img/johnirving.png",author:"John Irving",books:["The Hotel New Hampshire","Avenue of Mysteries","A Prayer for Owen Meany"]},24:{id:24,authorImg:"img/aynrand.png",author:"Ayn Rand",books:["The Fountainhead","Atlas Shrugged","The Virtue of Selfishness"]},25:{id:25,authorImg:"img/davecullen.png",author:"Dave Cullen",books:["Parkland: Birth of a Movement","Columbine","The Eye of Makarios"]},26:{id:26,authorImg:"img/suzannecollins.png",author:"Suzanne Collins",books:["Mockingjay","The Hunger Games","Catching Fire"]},27:{id:27,authorImg:"img/danbrown.png",author:"Dan Brown",books:["The Da Vinci Code","Angels and Demons","Inferno"]},28:{id:28,authorImg:"img/vladimirnabokov.png",author:"Vladimir Nabokov",books:["Lolita","Invitation to a Beheading","Pale Fire"]},29:{id:29,authorImg:"img/roxanegay.png",author:"Roxane Gay",books:["Bad Feminist","Hunger","Difficult Women"]},30:{id:30,authorImg:"img/charlesbukowski.png",author:"Charles Bukowski",books:["Women","Post Office","Factotum"]},31:{id:31,authorImg:"img/chuckpalahniuk.png",author:"Chuck Palahniuk",books:["Fight Club","Haunted","Choke"]},32:{id:32,authorImg:"img/isaacasimov.png",author:"Isaac Asimov",books:["I, Robot","The Gods Themselves","The Naked Sun"]},33:{id:33,authorImg:"img/donnatartt.png",author:"Donna Tartt",books:["The Goldfinch","The Little Friend","Christmas Pageant"]},34:{id:34,authorImg:"img/tomwolfe.png",author:"Tom Wolfe",books:["The Electric Kool-Aid Acid Test","The Right Stuff","The Bonfire of the Vanities"]},35:{id:35,authorImg:"img/rudyardkipling.png",author:"Rudyard Kipling",books:["The Jungle Book","Rikki-Tikki-Tavi","If"]},36:{id:36,authorImg:"img/jonathansafranfoer.png",author:"Jonathan Safran Foer",books:["Extremely Loud and Incredibly Close","Everything is Illuminated","Here I Am"]},37:{id:37,authorImg:"img/joandidion.png",author:"Joan Didion",books:["The Year of Magical Thinking","Slouching Towards Bethlehem","The White Album"]},38:{id:38,authorImg:"img/cslewis.png",author:"C. S. Lewis",books:["Prince Caspian","The Lion, The Witch and The Wardrobe","The Voyage of the Dawn Treader "]},39:{id:39,authorImg:"img/georgeorwell.png",author:"George Orwell",books:["1984","Animal Farm","Homage to Catalonia"]},40:{id:40,authorImg:"img/janeaustin.png",author:"Jane Austin",books:["Pride and Prejudice","Sense and Sensibility","Northanger Abbey"]},41:{id:41,authorImg:"img/jkrowling.png",author:"J. K. Rowling",books:["Harry Potter and the Deathly Hallows","The Silkworm","The Casual Vacancy"]},42:{id:42,authorImg:"img/charlottebronte.png",author:"Charlotte Bronte",books:["Jane Eyre","Shirley","The Green Dwarf"]},43:{id:43,authorImg:"img/jrrtolkien.png",author:"J. R. R. Tolkien",books:["The Lord of Rings","The Hobbit","The Fall of Gondolin"]},44:{id:44,authorImg:"img/agathachristie.png",author:"Agatha Christie",books:["Murder on the Orient Express","Death on the Nile","Ordeal by Innocence"]},45:{id:45,authorImg:"img/arthurconandoyle.png",author:"Arthur Conan Doyle",books:["The Hound of the Baskervilles","The Lost World","The Adventures of Sherlock Holmes"]},46:{id:46,authorImg:"img/lewiscaroll.png",author:"Lewis Caroll",books:["Alice's Adventures in Wonderland","Through the Looking-Glass","The Hunting of the Snark"]},47:{id:47,authorImg:"img/aldoushuxley.png",author:"Aldous Huxley",books:["Brave New World","Island","The Doors of Perception"]},48:{id:48,authorImg:"img/neilgaiman.png",author:"Neil Gaiman",books:["American Gods","Coraline","Smoke and Mirrors"]},49:{id:49,authorImg:"img/hgwells",author:"H.G. Wells",books:["The Time Machine","The War of the Worlds","A Short History of the World"]},50:{id:50,authorImg:"img/victorhugo.png",author:"Victor Hugo",books:["Les Mis\xe9rables","The Hunchback of Notre Dame","The Man Who Laughs"]},51:{id:51,authorImg:"img/fyodordostoevsky.png",author:"Fyodor Dostoevsky",books:["Crime and Punishment","The Idiot","The Brothers Karamazov"]},52:{id:52,authorImg:"img/migueldecervantes.png",author:"Miguel de Cervantes",books:["Don Quixote","La Galatea","La Gitanilla"]},53:{id:53,authorImg:"img/johngreen.png",author:"John Green",books:["The Fault in Our Stars","Paper Towns","Turtles All the Way Down"]},54:{id:54,authorImg:"img/margaretatwood.png",author:"Margaret Atwood",books:["The Handmaid's Tale","Cat's Eye","The Blind Assassin"]},55:{id:55,authorImg:"img/williamshakespeare.png",author:"William Shakespeare",books:["Romeo and Juliet","Macbeth","Hamlet"]},56:{id:56,authorImg:"img/sigmundfreud.png",author:"Sigmund Freud",books:["The Interpretation of Dreams","Introduction to Psychoanalysis","Totem and Taboo"]},57:{id:57,authorImg:"img/oscarwilde.png",author:"Oscar Wilde",books:["The Picture of Dorian Gray","Salome","The Canterville Ghost"]},58:{id:58,authorImg:"img/carljung.png",author:"Carl Jung",books:["Archetypes and the Collective Unconscious","Psychological Types","Psychology and Alchemy"]},59:{id:59,authorImg:"img/honoredebalzac.png",author:"Honor\xe9 de Balzac",books:["A Woman of Thirty","La Peau de Chagrin","Le lys dans la valle\u0301e"]},60:{id:60,authorImg:"img/harukimurakami.png",author:"Haruki Murakami",books:["1Q84","Kafka on the Shore","The Wind-Up Bird Chronicle"]}},g=function(e){for(var o,a,t=e.length;0!==t;)a=Math.floor(Math.random()*t),o=e[t-=1],e[t]=e[a],e[a]=o;return e},m=[],c=0;c<=60;c++)m=m.concat(s[c].books);console.log(m);var d=Array.from(Array(60),function(e,o){return o});g(d);var k=d.pop(),b=function(e){var o=function(){var e=g(m),o=g(s[r].books),a=o.slice(o.length-1),t=e.slice(e.length-4);return o.some(function(e){return t.includes(e)})||(t.shift(),t.push(a.toString()),g(t)),t},a=n.a.useState(k),t=Object(u.a)(a,2),r=t[0],i=t[1],l=n.a.useState(o()),c=Object(u.a)(l,2),b=c[0],f=c[1],p=n.a.useState(3),T=Object(u.a)(p,2),y=T[0],v=T[1];n.a.useEffect(function(){f(o())},[r]),n.a.useEffect(function(){if(y>0){var e=setInterval(function(){v(y-1)},950);return function(){clearInterval(e)}}});var I=n.a.createElement(h,{data:s[r],bookLibrary:b,nextRound:function(){return d.length>=1?(console.log(d),i(d.pop()),null):(d=Array.from(Array(24),function(e,o){return o}),g(d),console.log("New"+d),i(d.pop()),console.log("New after Pop"+d),null)},setScore:e.setScore,score:e.score,setLives:e.setLives,lives:e.lives,setTimer:e.setTimer,timer:e.timer}),S=n.a.createElement("div",{className:"counter"},n.a.createElement("h3",null,"Get Ready to Play!"),n.a.createElement("h1",null,y));return n.a.createElement("div",{className:"outerBox"},y>0?null:e.stats,y>0?S:I)},f=function(){var e=n.a.useState(0),o=Object(u.a)(e,2),a=o[0],t=o[1],r=n.a.useState(2),i=Object(u.a)(r,2),l=i[0],h=i[1],s=n.a.useState(99999),g=Object(u.a)(s,2),m=g[0],c=g[1],d=n.a.useState(!1),k=Object(u.a)(d,2),f=k[0],p=k[1],T=n.a.useState(!0),y=Object(u.a)(T,2),v=y[0],I=y[1],S=n.a.createElement("div",{className:"stats"},n.a.createElement("h1",{className:"score"},"Score: ",a),n.a.createElement("h1",{className:"timer"},"Timer: ",m),n.a.createElement("h1",{className:"lives"},"Lives: ",l+1));n.a.useEffect(function(){var e=setInterval(function(){return w()},1e3);return function(){clearInterval(e)}});var w=function(){m>0?c(m-1):(p(!1),I(!0))},E=function(e){return"easy"===e?(c(92),h(4),p(!0),I(!1),null):"regular"===e?(c(62),h(2),p(!0),I(!1),null):(c(32),h(1),p(!0),I(!1),null)};return n.a.createElement("div",null,n.a.createElement("div",null,f?n.a.createElement(b,{stats:S,setScore:t,score:a,setLives:h,lives:l,setTimer:c,timer:m}):null,!f&&m<=0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null," Your Final Score is ",a),n.a.createElement("button",{onClick:function(){return window.location.reload()}},"Play Again?")),v&&m>0&&n.a.createElement("div",null,n.a.createElement("h1",null,"Author Quiz"),n.a.createElement("p",null,"Instructions: Correctly guess the book of the authors pictured to earn points before time runs out!"),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return E("easy")}},"Easy Mode"),n.a.createElement("p",null,"This option gives you 5 lives and 90 seconds to answer!")),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return E("regular")}},"Regular Mode"),n.a.createElement("p",null,"This option gives you 3 lives and 60 seconds to answer!")),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return E("hard")}},"Hard Mode"),n.a.createElement("p",null,"This option gives you 1 lives and 30 seconds to answer!")))))};a(12);i.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.617114cb.chunk.js.map